class Widget < ActiveRecord::Base
  belongs_to :message
  belongs_to :asset
  has_many :shared_message_widgets, dependent: :destroy

  delegate :asset_type, to: :asset

  validates :message, :asset, presence: true
end
