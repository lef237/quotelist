FactoryBot.define do
  factory :quote do
    user { nil }
    book { nil }
    sentence { "MyText" }
    page_number { 1 }
    source_quote { nil }
  end
end
