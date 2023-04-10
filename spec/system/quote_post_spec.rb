# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Quote Post', type: :system do
  let!(:user) { create(:user) }
  let!(:book) { create(:book) }

  before do
    sign_in user
  end

  describe 'creating a quote' do
    before do
      visit book_path(book)
      click_link '新しい引用を追加する'
    end

    it 'successfully creates a quote' do
      fill_in 'quote_sentence', with: 'これはテストの引用文です。'
      fill_in 'quote_page_number', with: 42
      click_button '投稿する'

      expect(page).to have_current_path(book_path(book))
      expect(page).to have_content('引用が投稿されました')
      expect(page).to have_content('これはテストの引用文です。')
      expect(page).to have_content('42')
    end
  end
end
