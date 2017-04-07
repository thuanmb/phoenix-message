class WidgetContent < ActiveRecord::Base
  belongs_to :widget
  belongs_to :asset
end
