Rails.application.routes.draw do
  # 後でTOP画面（root画面）に引用一覧を表示させる（index表示）
  get 'users/show/:id', to: 'users#show', as: 'user'
  resources :quotes do
    resource :coquotes, only: [:create, :destroy]
    member do
      get 'coquote_users'
    end
  end
  resources :books do
    # indexなどの画面も必要ある→検索時に使うため
    resources :quotes
  end
  resources :total_quotes, only: [:index]
  get 'terms_of_service', to: 'top#terms_of_service'
  get 'privacy_policy', to: 'top#privacy_policy'
  devise_for :users
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
