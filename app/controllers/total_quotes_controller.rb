# frozen_string_literal: true

class TotalQuotesController < ApplicationController
  def index
    count = Quote.count
    # 対応するviewファイルがないので、明示的にrenderを書いてあげる必要がある。
    render json: { count: }
  end
end
