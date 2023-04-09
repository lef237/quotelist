# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Books', type: :system do
  let!(:user) { create(:user) }
  let!(:book) { create(:book, title: 'プロを目指す人のRuby入門', author: '伊藤淳一') }

  context 'when the user is logged in' do
    before do
      sign_in user
      visit book_path(book)
    end

    it 'displays the book information on the show page' do
      expect(page).to have_content('プロを目指す人のRuby入門')

      expect(page).to have_content('著者：伊藤淳一')

      expect(page).to have_link('書籍情報を編集する', href: edit_book_path(book))

      expect(page).to have_content('引用一覧')
    end
  end

  context 'when the user is not logged in' do
    before do
      visit book_path(book)
    end

    it 'displays the book information without the edit link' do
      expect(page).to have_content('プロを目指す人のRuby入門')

      expect(page).to have_content('著者：伊藤淳一')

      expect(page).not_to have_link('書籍情報を編集する', href: edit_book_path(book))

      expect(page).to have_content('引用一覧')
    end
  end
end
