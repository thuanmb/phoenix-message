class WidgetDecorator < ApplicationDecorator
  decorates Widget

  def type
    source.asset.asset_type
  end
end