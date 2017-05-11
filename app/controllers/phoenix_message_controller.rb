class PhoenixMessageController < ApplicationController
  NOT_REQUIRED_AUTHOR_PATHS = '/shared_messages'

  def index
    unless request.fullpath.include?(NOT_REQUIRED_AUTHOR_PATHS)
      authenticate_user!
    end
  end
end
