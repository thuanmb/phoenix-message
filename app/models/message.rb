class Message < ActiveRecord::Base
  belongs_to :user
  has_many :widgets

  validates :user, presence: true
end
