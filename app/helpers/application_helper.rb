# frozen_string_literal: true

module ApplicationHelper
  def ogp_tags
    {
      'og:title' => content_for?(:title) ? content_for(:title) : '引用箱 QuoteList',
      'og:type' => 'website',
      'og:description' => content_for?(:description) ? content_for(:description) : '未知の書籍と出会う切っ掛けとして、色んな本の引用を閲覧・紹介することができます！ぜひ、色んな引用をクリックして、お気に入りの本を見つけてみましょう',
      'og:url' => request.original_url,
      'og:image' => asset_path('quotelistogp.png')
    }
  end

  def twitter_card_tags
    {
      'twitter:card' => 'summary_large_image',
      'twitter:site' => '@lef237',
      'twitter:title' => content_for?(:title) ? content_for(:title) : '引用箱 QuoteList',
      'twitter:description' => content_for?(:description) ? content_for(:description) : '未知の書籍と出会う切っ掛けとして、色んな本の引用を閲覧・紹介することができます！ぜひ、色んな引用をクリックして、お気に入りの本を見つけてみましょう',
      'twitter:image' => asset_path('quotelistogp.png')
    }
  end
end
