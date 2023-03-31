class CoquotesController < ApplicationController
  def create
    # params[:quote_id]を受け取る
    source_quote = Quote.find(params[:quote_id])
    # 新しいquoteを作成して、そのsource_quote_idへとparamsの値を代入する
    @quote = Quote.new(user_id: current_user.id, book_id: source_quote.book_id, sentence: source_quote.sentence, page_number: source_quote.page_number,
                       source_quote_id: source_quote.id)
    # saveして、responseをReactに返す？→responseが返ってきたらReactでアニメーション？
    if @quote.save
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def destroy
    # params[:quote_id]を受け取る
    @quote = Quote.find_by(source_quote_id: params[:quote_id], user_id: current_user.id)
    # current_userのQuote一覧から、source_quote_idがparamsに一致するものを探す
    # destroyして、それをresponseに返す
    if @quote.destroy
      render json: { success: true }
    else
      render json: { success: false }
    end
  end
end

# class LikesController < ApplicationController
#   def create
#     @post = Post.find(params[:post_id])
#     @like = @post.likes.new(user: current_user)

#     if @like.save
#       render json: { success: true }
#     else
#       render json: { success: false }
#     end
#   end

#   def destroy
#     @post = Post.find(params[:post_id])
#     @like = @post.likes.find_by(user: current_user)

#     if @like.destroy
#       render json: { success: true }
#     else
#       render json: { success: false }
#     end
#   end
# end
