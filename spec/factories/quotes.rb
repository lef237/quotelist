# frozen_string_literal: true

FactoryBot.define do
  factory :quote do
    user
    book
    sentence { Faker::Lorem.sentence }
    page_number { Faker::Number.between(from: 1, to: 500) }
    source_quote_id { nil }
  end
end
