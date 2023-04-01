# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    sort = params[:sort]
    @quotes = if sort == 'random'
                Quote.where(source_quote_id: nil).order('RANDOM()').page(params[:page])
              else
                Quote.all.where(source_quote_id: nil).order(created_at: :desc).page(params[:page])
              end

    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
  end
end
