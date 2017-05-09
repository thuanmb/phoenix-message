class SharedMessageDecorator < ApplicationDecorator
  decorates SharedMessage
  delegate :id, :user, :shared, :archived_at, to: :message

  def widgets
    widget_ids = source.shared_message_widgets.pluck(:widget_id)
    WidgetDecorator.decorate_collection(Widget.where(id: widget_ids))
  end
end