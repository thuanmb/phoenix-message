Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  require 'sidekiq/web'
  apipie
  root to: 'phoenix_message#index'

  mount Sidekiq::Web => '/sidekiq'

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index, :show, :create, :update]
      resources :widgets, only: [:create, :update]
      resources :shared_messages, only: [:show, :create]
    end
  end

  match '*a', to: 'phoenix_message#index', via: :all
end
