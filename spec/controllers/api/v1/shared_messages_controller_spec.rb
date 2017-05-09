require 'spec_helper'

describe Api::V1::SharedMessagesController do
  let(:user) { create(:user) }
  let(:json) { JSON.parse(response.body, symbolize_names: true) }

  describe 'for authenticated actions' do
    before do
      warden.set_user(user)
    end

    describe 'POST /create' do
      let(:message) { create(:message, user_id: user.id) }
      let(:asset) {
        create(:asset,
          asset_type: 'image',
          payload: {
            url: 'http://sampleurl.png',
          })
      }
      let!(:widget) { create(:widget, asset_id: asset.id, message_id: message.id) }
      let(:params) {{
          message_id: message.id
      }}

      it 'should create new shared message' do
        expect {
          post :create, params
        }.to change { SharedMessage.count }.from(0).to(1)

        message.reload

        expect(json[:status]).to eq('OK')
        expect(json[:data]).to be_present
        expect(SharedMessage.first.shared_message_widgets.size).to eq 1
        expect(message.shared).to eq true
      end
    end
  end

  describe 'GET /show' do
    let(:message) { create(:message, user_id: user.id) }
    let(:asset) {
      create(:asset,
             asset_type: 'image',
             payload: {
                 url: 'http://sampleurl.png',
             })
    }
    let!(:widget) { create(:widget, asset_id: asset.id, message_id: message.id) }
    let(:shared_message) { create(:shared_message, message: message) }
    let(:params) {{
        id: shared_message.token
    }}

    before do
      shared_message.create_shared_message_widgets
    end

    it 'should return the data of message to be shared' do
      get :show, params

      expect(json[:status]).to eq('OK')
      expect(json[:data][:widgets].size).to eq 1
    end
  end
end