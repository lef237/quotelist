# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'UserPage', type: :system do
  let!(:user) { create(:user) }
  let!(:book) { create(:book) }
  let!(:quote) { create(:quote, user:, book:) }

  before do
    driven_by(:rack_test)
    visit user_path(user)
  end

  it 'displays the csv description' do
    expect(page).to have_content('CSV')
  end

  it 'displays the user information' do
    expect(page).to have_content(user.name)
    expect(page).to have_link('このユーザーの引用をダウンロードできます') if user.profile_url.present?
  end

  it 'displays quotes' do
    expect(page).to have_content(quote.sentence)
  end

  it 'displays navigation buttons' do
    expect(page).to have_link('ランダム表示')
    expect(page).to have_link('人気順で表示')
  end

  it 'displays quote details' do
    within('#quotes') do
      expect(page).to have_link('この引用を表示する')
    end
  end
end
