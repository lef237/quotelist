# frozen_string_literal: true

class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    sort = params[:sort]
    @quotes = if sort == 'random'
                Quote.where(user_id: params[:id]).order('RANDOM()').page(params[:page]).per(10)
              elsif sort == 'popular'
                Quote.where(user_id: params[:id]).user_popular.page(params[:page]).per(10)
              else
                Quote.where(user_id: params[:id]).order(created_at: :desc).page(params[:page]).per(10)
              end

    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
  end
end
