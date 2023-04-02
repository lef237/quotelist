# frozen_string_literal: true

class Quote < ApplicationRecord
  belongs_to :user
  belongs_to :book
  belongs_to :source_quote, class_name: 'Quote', optional: true, inverse_of: :child_quotes
  has_many :child_quotes, class_name: 'Quote', foreign_key: 'source_quote_id', inverse_of: :source_quote, dependent: :restrict_with_exception
  validates :sentence, length: { maximum: 300 }

  def self.popular
    includes(:child_quotes)
      .order(Arel.sql('COUNT(quotes.id) DESC'))
      .left_joins(:child_quotes)
      .group('quotes.id')
  end

  def self.user_popular
    joins('LEFT OUTER JOIN quotes AS child_quotes ON quotes.id = child_quotes.source_quote_id')
      .group('quotes.id')
      .select('quotes.*, COUNT(child_quotes.id) AS child_quotes_count')
      .order('child_quotes_count DESC')
  end
end
