# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ユーザーの初期データ
users_data = [
  {
    email: "test@test1",
    password: "testtest",
    name: "ユーザー１",
    profile_url: "https://example.com/user_one"
  },
  {
    email: "test@test2",
    password: "testtest",
    name: "ユーザー２",
    profile_url: "https://example.com/user_two"
  },
  {
    email: "test@test3",
    password: "testtest",
    name: "ユーザー３",
    profile_url: "https://example.com/user_three"
  }
]

created_users = users_data.map { |user_data| User.create!(user_data) }


# 本の初期データ
books_data = [
  {
    title: "サンプルブック１",
    author: "夏目漱石",
    information_url: "https://example.com/example_book_one"
  },
  {
    title: "サンプルブック２",
    author: "森鴎外",
    information_url: "https://example.com/example_book_two"
  },
  {
    title: "サンプルブック３",
    author: "芥川龍之介",
    information_url: nil
  }
]

created_books = books_data.map { |book_data| Book.create!(book_data) }

# 引用の初期データ
quotes_data = [
  {
    user: User.first,
    book: Book.first,
    sentence: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    page_number: 42
  },
  {
    user: User.first,
    book: Book.second,
    sentence: "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    page_number: 42
  },
  {
    user: User.first,
    book: created_books[2],
    sentence: "うううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううう",
    page_number: nil
  },
  {
    user: User.second,
    book: Book.first,
    sentence: "ええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええ",
    page_number: 100
  },
  {
    user: User.second,
    book: Book.second,
    sentence: "おおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお",
    page_number: 100
  },
  {
    user: created_users[2],
    book: created_books[2],
    sentence: "かかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかかか",
    page_number: nil
  }
]

quotes_data.each do |quote_data|
  Quote.create!(quote_data)
end
