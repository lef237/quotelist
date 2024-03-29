# frozen_string_literal: true

require 'csv'

class BooksController < ApplicationController
  before_action :set_book, only: %i[show edit update destroy]
  before_action :require_login, only: %i[edit create update destroy]

  # GET /books or /books.json
  def index
    keyword = params[:keyword]
    if keyword
      @books = Book.search(keyword).with_attached_avatar.page(params[:page]).per(10)
      @empty_message = "検索ワード「#{keyword}」に合致する書籍や著者は登録されていません。"
    else
      @books = Book.order(created_at: :desc).with_attached_avatar.page(params[:page]).per(10)
      @empty_message = 'まだ書籍は登録されていません。'
    end
  end

  # GET /books/1 or /books/1.json
  def show
    sort = params[:sort]
    @quotes = if sort == 'random'
                Quote.where(book_id: params[:id], source_quote_id: nil).order('RANDOM()').page(params[:page])
              elsif sort == 'popular'
                Quote.where(book_id: params[:id], source_quote_id: nil).popular.page(params[:page])
              else
                Quote.where(book_id: params[:id], source_quote_id: nil).order(created_at: :desc).page(params[:page])
              end

    @all_quotes = Quote.where(book_id: params[:id], source_quote_id: nil)

    @message = 'まだ引用はありません。' if @quotes.empty?

    respond_to do |format|
      format.html
      format.csv { send_data quotes_to_csv(@all_quotes), filename: "book_quotes_#{params[:id]}.csv" }
    end
  end

  # GET /books/new
  def new
    @book = Book.new
  end

  # GET /books/1/edit
  def edit; end

  # POST /books or /books.json
  def create
    @book = Book.new(book_params)

    respond_to do |format|
      if @book.save
        format.html { redirect_to book_url(@book), notice: '本が作成されました' }
        format.json { render :show, status: :created, location: @book }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /books/1 or /books/1.json
  def update
    @book.avatar.attach(book_params[:avatar]) if book_params[:avatar].present?
    respond_to do |format|
      if @book.update(book_params)
        format.html { redirect_to book_url(@book), notice: '本が更新されました' }
        format.json { render :show, status: :ok, location: @book }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /books/1 or /books/1.json
  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to books_url, notice: '本が削除されました' }
      format.json { head :no_content }
    end
  rescue ActiveRecord::DeleteRestrictionError
    flash[:notice] = 'この書籍には既に引用がありますので削除することはできません'
    redirect_to books_url
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_book
    @book = Book.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def book_params
    params.require(:book).permit(:title, :author, :information_url, :avatar)
  end

  def require_login
    return if current_user

    redirect_to root_path, alert: 'この本を編集する権限がありません'
  end

  def quotes_to_csv(quotes)
    CSV.generate(headers: true) do |csv|
      csv << %w[書籍名 著者名 引用文 引用ページ]

      quotes.each do |quote|
        csv << [quote.book.title, quote.book.author, quote.sentence, quote.page_number]
      end
    end
  end
end
