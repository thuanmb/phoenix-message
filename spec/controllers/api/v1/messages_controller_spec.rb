require 'rails_helper'

RSpec.describe Api::V1::MessagesController, type: :controller do
  let(:user) { create(:user) }
  let(:json) { JSON.parse(response.body, symbolize_names: true) }

  before do
    warden.set_user(user)
  end

  describe 'GET /index' do
    let(:another_user) { create(:user) }
    let!(:message) { create(:message, user: user) }
    let!(:another_message) { create(:message, user: another_user) }

    it 'should return list of messages of current user' do
      get :index
      expect(json[:status]).to eq('OK')

      messages = json[:data]
      expect(messages.size).to eq 1
      expect(messages.first[:id]).to eq message.id
    end
  end

  describe 'GET /show' do
    context 'when message not exist' do
      let(:params) {{ id: 'undefined' }}

      it 'should return not found status' do
        get :show, params

        expect(json[:status]).to eq 'NOT_FOUND'
      end
    end

    context 'when message exist' do
      let(:message) { create(:message, user: user) }
      let(:params) {{ id: message.id }}

      it 'should return data of specific message' do
        get :show, params

        expect(json[:status]).to eq 'OK'
        expect(json[:data][:id]).to eq message.id
      end
    end
  end

  describe 'POST /create' do
    it 'should create new message successfully' do
      expect {
        post :create
      }.to change { Message.count }.from(0).to(1)

      expect(json[:status]).to eq('OK')
      expect(json[:data][:id]).to be_present
    end
  end

  describe 'PUT /update' do
    context 'change status to share' do
      let(:message) { create(:message, user: user) }
      let(:params) {{
        id: message.id,
        message: {
          shared: true
        }
      }}

      it 'should change message to shared state' do
        put :update, params

        message.reload
        expect(json[:status]).to eq('OK')
        expect(message.shared).to eq(true)
      end
    end

    context 'archive message' do
      let(:message) { create(:message, user: user) }
      let(:params) {{
          id: message.id,
          message: {
            archived_at: Time.current
          }
      }}

      it 'should archive message' do
        put :update, params

        message.reload
        expect(json[:status]).to eq('OK')
        expect(message.archived_at).to be_present
      end
    end
  end
end