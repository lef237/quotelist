class TotalQuotesController < ApplicationController
  def index
    @quotes = Quote.all
    # 対応するviewファイルがないので、明示的にrenderを書いてあげる必要がある。
    render json: @quotes
  end
end
