Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  require 'sidekiq/web'
  apipie
  root to: 'phoenix_message#index'

  mount Sidekiq::Web => '/sidekiq'

  match '*a', to: 'phoenix_message#index', via: :all
end
