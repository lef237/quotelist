# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Home', type: :system do
  let!(:user) { create(:user) }
  let!(:book) { create(:book) }
  let!(:quote) { create(:quote, user:, book:) }

  before do
    driven_by(:rack_test)
    visit root_path
  end

  it 'displays the page title' do
    expect(page).to have_content('引用箱')
  end

  it 'displays the introduction text' do
    expect(page).to have_content('未知の書籍と出会うきっかけとして、色んな本の引用を閲覧・紹介することができます！')
    expect(page).to have_content('ぜひ、色んな引用をクリックして、お気に入りの本を見つけてみましょう📚🔍')
  end

  it 'displays quotes' do
    expect(page).to have_content(quote.sentence)
  end

  it 'displays navigation buttons' do
    expect(page).to have_link('ランダム表示')
    expect(page).to have_link('人気順で表示')
  end

  it 'displays footer links' do
    expect(page).to have_link('利用規約')
    expect(page).to have_link('プライバシーポリシー')
  end
end
