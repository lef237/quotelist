# frozen_string_literal: true

FactoryBot.define do
  factory :quote do
    user { 1 }
    book { 1 }
    sentence { 'テストテストテスト' }
    page_number { 123 }
    source_quote { nil }
  end
end
