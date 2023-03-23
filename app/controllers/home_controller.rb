# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    sort = params[:sort]
    @quotes = if sort == 'random'
                Quote.order('RANDOM()')
              else
                Quote.all.order(created_at: :desc)
              end

    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
  end
end
