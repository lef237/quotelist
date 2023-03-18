class Quote < ApplicationRecord
  belongs_to :user
  belongs_to :book
  belongs_to :source_quote, class_name: 'Quote', optional: true, inverse_of: :child_quotes
  has_many :child_quotes, class_name: 'Quote', foreign_key: 'source_quote_id', inverse_of: :source_quote
end
