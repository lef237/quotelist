# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Quote Edit', type: :system do
  let!(:user) { create(:user) }
  let!(:book) { create(:book) }

  before do
    sign_in user
  end

  describe 'editing a quote' do
    before do
      visit book_path(book)
      add_quote('これはテストの引用文です。', 42)
    end

    it 'creates a quote' do
      expect(page).to have_current_path(book_path(book))
      expect(page).to have_content('引用が投稿されました')
      expect(page).to have_content('これはテストの引用文です。')
      expect(page).to have_content('42')
    end

    it 'deletes a quote' do
      click_link 'この引用を表示する'
      click_link '編集する'
      click_button '削除する'
      expect(page.accept_confirm).to eq('削除してよろしいですか？')

      expect(page).to have_current_path(book_path(book))
      expect(page).to have_content('引用が削除されました')
      expect(page).to have_content('まだ引用はありません')
      expect(page).not_to have_content('これはテストの引用文です。')
    end
  end

  private

  def add_quote(sentence, page_number)
    click_link '新しい引用を追加する'
    fill_in 'quote_sentence', with: sentence
    fill_in 'quote_page_number', with: page_number
    click_button '投稿する'
  end
end
