# frozen_string_literal: true

class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @quotes = Quote.where(user_id: params[:id])
    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
  end
end
