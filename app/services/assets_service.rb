class AssetsService
  def self.find_or_create(asset_id, asset_params)
    if asset_id
      Asset.find(asset_id)
    else
      Asset.create(AssetSchema.create(asset_params))
    end
  end
end