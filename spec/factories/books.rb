# frozen_string_literal: true

FactoryBot.define do
  factory :book do
    title { 'すべてがFになる' }
    author { '森博嗣' }
    information_url { 'https://bookclub.kodansha.co.jp/product?item=0000198009' }
  end
end
