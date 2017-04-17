class AssetRepresenter < BaseRepresenter
  property :id
  property :asset_type, as: :type
  property :payload
end