# frozen_string_literal: true

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
              else
                Quote.where(book_id: params[:id], source_quote_id: nil).order(created_at: :desc).page(params[:page])
              end

    return unless @quotes.empty?

    @message = 'まだ引用はありません。'
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
        format.html { redirect_to book_url(@book), notice: 'Book was successfully created.' }
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
        format.html { redirect_to book_url(@book), notice: 'Book was successfully updated.' }
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
      format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  rescue ActiveRecord::DeleteRestrictionError
    flash[:notice] = 'この書籍には既に引用がありますので削除することは出来ません。'
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

    redirect_to root_path, alert: 'You are not authorized to edit this book.'
  end
end
