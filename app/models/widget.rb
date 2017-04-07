class Widget < ActiveRecord::Base
  belongs_to :message
  has_one :asset

  validates :message, :asset, presence: true
end
