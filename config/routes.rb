Rails.application.routes.draw do
  get 'users/show/:id', to: 'users#show', as: 'user'
  resources :quotes
  resources :books
  get 'terms_of_service', to: 'top#terms_of_service'
  get 'privacy_policy', to: 'top#privacy_policy'
  devise_for :users
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
