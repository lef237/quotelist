# frozen_string_literal: true

FactoryBot.define do
  factory :book do
    title { Faker::Book.title }
    author { Faker::Book.author }
    information_url { Faker::Internet.url(host: 'example.com', path: "/book/#{Faker::Number.unique.number(digits: 10)}") }
  end
end
