class SharedMessageWidget < ActiveRecord::Base
  belongs_to :shared_message
  belongs_to :widget

  validates :shared_message, :widget, presence: true
end
