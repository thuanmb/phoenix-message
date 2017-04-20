class WidgetRepresenter < BaseRepresenter
  property :id
  property :type
  property :asset, decorator: AssetRepresenter
end