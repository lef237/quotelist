Rails.application.routes.draw do
  # 後でTOP画面（root画面）に引用一覧を表示させる（index表示）
  get 'users/show/:id', to: 'users#show', as: 'user'
  resources :quotes
  resources :books do
    # indexなどの画面は必要ないので後で制約を付ける。（本の個別ページに引用一覧を表示する）
    resources :quotes
  end
  get 'terms_of_service', to: 'top#terms_of_service'
  get 'privacy_policy', to: 'top#privacy_policy'
  devise_for :users
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
