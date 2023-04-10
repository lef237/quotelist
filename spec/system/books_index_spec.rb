# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Books index', type: :system do
  let!(:user) { create(:user) }

  context 'when there are less than 11 books' do
    let!(:books) { create_list(:book, 5) }

    before do
      driven_by(:rack_test)
      sign_in user
      visit books_path
    end

    it 'displays the page title' do
      expect(page).to have_content('書籍一覧')
    end

    it 'displays a list of books' do
      books.each do |book|
        expect(page).to have_content(book.title)
        expect(page).to have_content(book.author)
        expect(page).to have_link('この書籍を見る', href: book_path(book))
      end
    end

    it 'does not display pagination' do
      expect(page).not_to have_css('.pagination')
    end

    it 'displays the new book creation link' do
      expect(page).to have_link('新規作成', href: new_book_path)
    end
  end

  context 'when there are more than 10 books' do
    let!(:books) { create_list(:book, 11) }

    before do
      driven_by(:rack_test)
      sign_in user
      visit books_path
    end

    it 'displays the page title' do
      expect(page).to have_content('書籍一覧')
    end

    it '少しFlakyなので注意：displays a list of books' do
      books[1..10].each do |book|
        expect(page).to have_content(book.title)
        expect(page).to have_content(book.author)
        expect(page).to have_link('この書籍を見る', href: book_path(book))
      end
    end

    it 'displays pagination' do
      expect(page).to have_css('.pagination')
    end

    it 'displays the new book creation link' do
      expect(page).to have_link('新規作成', href: new_book_path)
    end
  end
end
