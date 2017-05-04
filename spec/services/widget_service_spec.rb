require 'rails_helper'

describe WidgetService do
  context '#update' do
    let(:user) { create(:user) }
    let(:message) { create(:message, user_id: user.id) }
    let(:widget) { create(:widget, asset_id: asset.id, message_id: message.id) }
    subject { WidgetService.new(widget).update(payload) }
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