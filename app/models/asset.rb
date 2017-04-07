class Asset < ActiveRecord::Base
  validates :asset_type, inclusion: { in: %w(text image youtube), message: '%{value} is not a valid asset type' }
  validates :asset_type, :content, presence: true
end
