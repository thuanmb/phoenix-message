module Api
  module V1
    class WidgetsController < BaseController
      def create
        message = Message.find(params.require(:message_id))

        asset_id = params.require(:widget)[:asset_id]
        asset = AssetsService.find_or_create(asset_id, asset_params)
        widget = Widget.create(message_id: message.id, asset_id: asset.id)

        authorize widget

        api_respond_ok(data: WidgetRepresenter.prepare(WidgetDecorator.decorate(widget)))
      end

      def update
        widget = Widget.find(params.require(:id))

        authorize widget

        WidgetService.new(widget).update(params.require(:payload))
      end

      private
      def asset_params
        params.require(:widget)
      end
    end
  end
end