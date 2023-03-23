# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @quotes = Quote.all
    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
  end
end
