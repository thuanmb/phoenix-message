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
end