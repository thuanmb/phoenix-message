class SharedMessage < ActiveRecord::Base
  include Tokenable

  belongs_to :message
  has_many :shared_message_widgets

  validates :message, presence: true
  validates :token, presence: true

  def create_shared_message_widgets
    message.widgets.each do |widget|
      SharedMessageWidget.create(shared_message: self, widget: widget)
    end
  end
end
