# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'CoquoteUsers', type: :system do
  let!(:user) { create(:user) }
  let!(:book) { create(:book) }
  let!(:quote) { create(:quote, user:, book:) }
  let!(:coquote_users) { create_list(:user, 3) }

  before do
    coquote_users.each do |coquote_user|
      create(:quote, user: coquote_user, book:, source_quote: quote)
    end
    driven_by(:rack_test)
    visit coquote_users_quote_path(quote)
  end

  it 'displays the quote information' do
    expect(page).to have_content(quote.sentence)
  end

  it 'displays the original user who quoted' do
    expect(page).to have_link(user.name, href: user_path(user))
  end

  it 'displays the list of coquote users' do
    coquote_users.each do |coquote_user|
      expect(page).to have_link(coquote_user.name, href: user_path(coquote_user))
    end
  end

  it 'displays a link to the book page' do
    expect(page).to have_link(book.title, href: book_path(book))
  end

  it 'displays a back button' do
    click_link '戻る'
  end
end
