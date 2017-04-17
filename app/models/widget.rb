class Widget < ActiveRecord::Base
  belongs_to :message
  belongs_to :asset

  validates :message, :asset, presence: true
end
