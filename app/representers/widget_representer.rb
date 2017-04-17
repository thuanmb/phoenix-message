class WidgetRepresenter < BaseRepresenter
  property :id
  property :message, decorator: MessageRepresenter
  property :asset, decorator: AssetRepresenter
end