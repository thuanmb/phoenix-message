class WidgetService
  attr_reader :source

  def initialize(widget)
    @source = widget
  end

  def update(payload)
    case source.asset_type
      when Asset::TEXT_TYPE
        source.asset.update_attribute(:payload, payload)
      when Asset::YOUTUBE_TYPE
        source.asset.update_attribute(:payload, payload)
      when Asset::IMAGE_TYPE
        source.asset = Asset.create(asset_type: Asset::IMAGE_TYPE, payload: payload)
        source.save!
    end
  end
end