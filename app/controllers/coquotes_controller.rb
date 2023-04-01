class CoquotesController < ApplicationController
  def create
    source_quote = Quote.find(params[:quote_id])
    @quote = Quote.new(user_id: current_user.id, book_id: source_quote.book_id, sentence: source_quote.sentence, page_number: source_quote.page_number,
                       source_quote_id: source_quote.id)
    if @quote.save
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def destroy
    @quote = Quote.find_by(source_quote_id: params[:quote_id], user_id: current_user.id)
    if @quote.destroy
      render json: { success: true }
    else
      render json: { success: false }
    end
  end
end
