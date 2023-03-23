# frozen_string_literal: true

class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    sort = params[:sort]
    if sort == "random"
      @quotes = Quote.where(user_id: params[:id]).order("RANDOM()")
    else
      @quotes = Quote.where(user_id: params[:id]).order(created_at: :desc)
    end

    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
  end
end
