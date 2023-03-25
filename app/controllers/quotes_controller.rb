# frozen_string_literal: true

class QuotesController < ApplicationController
  before_action :authenticate_user!, only: %i[new edit create update destroy]
  before_action :set_quote, only: %i[show edit update destroy]
  before_action :verify_quote_edit_privileges, only: %i[edit update destroy]

  # GET /quotes or /quotes.json
  def index
    @quotes = Quote.all.page(params[:page])
  end

  # GET /quotes/1 or /quotes/1.json
  def show; end

  # GET /quotes/new
  def new
    @quote = Quote.new
  end

  # GET /quotes/1/edit
  def edit; end

  # POST /quotes or /quotes.json
  def create
    # ここで新たなquoteのIDを作り出している
    @quote = Quote.new(quote_params)
    @quote.user_id = current_user.id

    respond_to do |format|
      if @quote.save
        format.html { redirect_to book_url(@quote.book_id), notice: 'Quote was successfully created.' }
        format.json { render :show, status: :created, location: @quote }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /quotes/1 or /quotes/1.json
  def update
    respond_to do |format|
      if @quote.update(quote_params)
        format.html { redirect_to book_url(@quote.book_id), notice: 'Quote was successfully updated.' }
        format.json { render :show, status: :ok, location: @quote }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quotes/1 or /quotes/1.json
  # 書籍ページに戻るようにする
  def destroy
    @quote.destroy
    respond_to do |format|
      format.html { redirect_to book_url(@quote.book_id), notice: 'Quote was successfully destroyed.' }
      format.json { head :no_content }
    end
  rescue ActiveRecord::DeleteRestrictionError
    flash[:notice] = 'この引用はCoquoteされていますので削除することは出来ません。'
    redirect_to book_url(@quote.book_id)
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_quote
    @quote = Quote.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def quote_params
    params.require(:quote).permit(:user_id, :book_id, :sentence, :page_number, :source_quote_id)
  end

  def verify_quote_edit_privileges
    return unless @quote.user != current_user

    redirect_to root_path, alert: 'You are not authorized to edit this quote.'
  end
end
