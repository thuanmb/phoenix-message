module Api
  module V1
    class MessagesController < BaseController
      before_filter :find_message, only: [:show, :update]

      def index
        authorize Message

        messages = current_user.messages
        api_respond_ok(data: MessageRepresenter.for_collection.prepare(MessageDecorator.decorate_collection(messages)))
      end

      def show
        authorize @message
        api_respond_ok(data: MessageRepresenter.prepare(MessageDecorator.decorate(@message)))
      end

      def create
        authorize Message

        message = current_user.messages.create
        api_respond_ok(data: MessageRepresenter.prepare(MessageDecorator.decorate(message)))
      end

      def update
        authorize @message
        @message.update_attributes(message_params)
        @message.reload
        api_respond_ok(data: MessageRepresenter.prepare(MessageDecorator.decorate(@message)))
      end

      private

      def find_message
        @message = current_user.messages.find(params[:id])
      end

      def message_params
        params.require(:message).permit(:shared, :archived_at)
      end
    end
  end
end