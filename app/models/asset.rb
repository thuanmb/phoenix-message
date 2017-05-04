class Asset < ActiveRecord::Base
  TEXT_TYPE = 'text'
  IMAGE_TYPE = 'image'
  YOUTUBE_TYPE = 'youtube'

  validates :asset_type, inclusion: { in: %w(text image youtube), message: '%{value} is not a valid asset type' }
  validates :asset_type, :payload, presence: true
end
