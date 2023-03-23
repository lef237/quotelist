# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    sort = params[:sort]
    if sort == "random"
      @quotes = Quote.order("RANDOM()")
    else
      @quotes = Quote.all.order(created_at: :desc)
    end

    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
  end
end
