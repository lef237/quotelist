# frozen_string_literal: true

require 'csv'

class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    sort = params[:sort]
    @quotes = if sort == 'random'
                Quote.where(user_id: params[:id]).order('RANDOM()').page(params[:page]).per(10)
              elsif sort == 'popular'
                Quote.where(user_id: params[:id]).popular.page(params[:page]).per(10)
              else
                Quote.where(user_id: params[:id]).order(created_at: :desc).page(params[:page]).per(10)
              end

    @all_quotes = Quote.where(user_id: params[:id])

    @message = 'まだ引用はありません。' if @quotes.empty?

    respond_to do |format|
      format.html
      format.csv { send_data quotes_to_csv(@all_quotes), filename: "user_quotes_#{params[:id]}.csv" }
    end
  end

  private

  def quotes_to_csv(quotes)
    CSV.generate(headers: true) do |csv|
      csv << %w[書籍名 著者名 引用文 引用ページ]

      quotes.each do |quote|
        csv << [quote.book.title, quote.book.author, quote.sentence, quote.page_number]
      end
    end
  end
end
