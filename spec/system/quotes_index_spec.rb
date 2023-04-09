require 'rails_helper'

RSpec.describe 'Quotes index', type: :system do
  let!(:user) { create(:user) }
  let!(:book) { create(:book) }
  let!(:quotes) { create_list(:quote, 5, user: user, book: book) }

  before do
    driven_by(:rack_test)
    sign_in user
    visit quotes_path
  end

  it 'displays the page title' do
    expect(page).to have_content('Quotes')
  end

  it 'displays a list of quotes' do
    quotes.each do |quote|
      expect(page).to have_content(quote.sentence)
      expect(page).to have_content(quote.book.title)
      expect(page).to have_link("この引用を表示する", href: quote_path(quote))
    end
  end
end
