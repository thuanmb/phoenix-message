class Image < ActiveRecord::Base
  mount_uploader :source, ImageUploader

  belongs_to :user
end
