Rails.application.routes.draw do
  get 'top/terms_of_service'
  get 'top/privacy_policy'
  devise_for :users
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
