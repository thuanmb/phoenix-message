Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  require 'sidekiq/web'
  apipie
  root to: 'phoenix_message#index'

  mount Sidekiq::Web => '/sidekiq'
end
