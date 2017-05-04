require 'rails_helper'

RSpec.describe Api::V1::WidgetsController, type: :controller do
  let(:user) { create(:user) }
  let(:json) { JSON.parse(response.body, symbolize_names: true) }

  before do
    warden.set_user(user)
  end

  describe 'POST /create' do
    context 'when message not exist' do
      let(:params) {{ message_id: 'undefined' }}
      it 'should return error' do
        post :create, params

        expect(json[:status]).to eq('NOT_FOUND')
      end
    end

    context 'when message exist' do
      let(:message) { create(:message, user_id: user.id) }
      context 'when asset has not created' do
        let(:params) {{
          message_id: message.id,
          widget: {
            asset_type: 'image',
            payload: {
              url: 'http://sampleurl.png',
            }
          }
        }}

        it 'should create new widget' do
          expect {
            post :create, params
          }.to change { Message.count }.from(0).to(1)

          expect(json[:status]).to eq('OK')
          expect(json[:data][:id]).to be_present
        end
      end

      context 'when asset is exist' do
        let(:asset) {
          create(:asset,
            asset_type: 'image',
            payload: {
              url: 'http://sampleurl.png',
            })
        }

        let(:params) {{
          message_id: message.id,
          widget: {
            asset_id: asset.id
          }
        }}

        it 'should create new widget' do
          expect {
            post :create, params
          }.to change { Message.count }.from(0).to(1)

          expect(json[:status]).to eq('OK')
          expect(json[:data][:id]).to be_present
        end
      end
    end
  end

  describe 'PUT /update' do
    let(:message) { create(:message, user_id: user.id) }
    let(:widget) { create(:widget, asset_id: asset.id, message_id: message.id) }
    subject { put :update, params }

    context 'when widget is not exist' do
      let(:params) {{
        id: 'undefined'
      }}

      it 'should return error' do
        subject

        expect(json[:status]).to eq('NOT_FOUND')
      end
    end

    context 'when widget is exist' do
      let(:params) {{
        id: widget.id,
        payload: payload
      }}

      context 'when widget is text' do
        let(:asset) { create(:asset, asset_type: Asset::TEXT_TYPE, payload: {content: 'Some text for your message'}) }
        let(:new_text_content) { 'New text content' }
        let(:payload) {{ content: new_text_content }}

        it 'should update the payload of current asset' do
          subject
          widget.reload

          expect(widget.asset.payload['content']).to eq new_text_content
        end
      end

      context 'when widget is image' do
        let(:asset) { create(:asset, asset_type: Asset::IMAGE_TYPE, payload: {url: 'http://someurl.com'}) }
        let(:new_url) { 'http://somenewurl.com' }
        let(:payload) {{ url: new_url }}

        it 'should create new asset for widget' do
          subject
          widget.reload

          expect(widget.asset.id).not_to eq asset.id
          expect(widget.asset.payload['url']).to eq new_url
        end
      end

      context 'when widget is youtube' do
        let(:asset) { create(:asset, asset_type: Asset::YOUTUBE_TYPE, payload: {videoId: 'someid'}) }
        let(:new_youtube_id) { 'newid' }
        let(:payload) {{ videoId: new_youtube_id }}
        it 'should update the payload of current asset' do
          subject
          widget.reload

          expect(widget.asset.payload['videoId']).to eq new_youtube_id
        end
      end
    end
  end
end