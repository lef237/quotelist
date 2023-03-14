# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Top', type: :request do
  describe 'GET /terms_of_service' do
    it 'HTTP ステータス 200 を返す' do
      get '/terms_of_service'
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET /privacy_policy' do
    it 'HTTP ステータス 200 を返す' do
      get '/privacy_policy'
      expect(response).to have_http_status(:ok)
    end
  end
end
