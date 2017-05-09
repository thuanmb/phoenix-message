module Api
  module V1
    class SharedMessagesController < BaseController
      before_filter :find_message, only: [:create]
      skip_before_filter :authenticate!, only: [:show]

      def create
        shared_message = SharedMessage.new(message: @message)

        authorize shared_message

        shared_message.save!
        shared_message.create_shared_message_widgets
        @message.update_attribute(:shared, true)
        api_respond_ok(data: api_v1_shared_message_url(id: shared_message.token))
      end

      def show
        skip_authorization

        shared_message = SharedMessage.where(token: params[:id]).first
        decorated_data = MessageRepresenter.prepare(SharedMessageDecorator.decorate(shared_message)) if shared_message.present?
        api_respond_ok(data: decorated_data)
      end

      private

      def find_message
        @message = current_user.messages.find(params[:message_id])
      end
    end
  end
end