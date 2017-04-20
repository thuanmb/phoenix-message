class MessageDecorator < ApplicationDecorator
  decorates Message

  def widgets
    WidgetDecorator.decorate_collection(source.widgets)
  end
end