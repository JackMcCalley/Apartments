Rails.application.routes.draw do
  resources :ratings, defaults: {format: :json}
  post 'user_token' => 'user_token#create'
  resources :users, defaults: {format: :json}
  resources :apartments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/apartments' => 'apartments#index'
  post '/apartments' => 'apartments#create'

end
