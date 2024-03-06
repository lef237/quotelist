# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Admin management', type: :system do
  let!(:user) { create(:user) }

  before do
    driven_by(:rack_test) # or :selenium, :selenium_chrome, :selenium_chrome_headless
    sign_in user
    visit admin_path
  end

  it 'allows user to become an admin with correct password' do
    fill_in 'admin_password', with: ENV['ADMIN_SECRET_PASSWORD']
    click_button 'Submit'

    expect(page).to have_content('You have been granted admin rights.')
    user.reload
    expect(user.admin).to be true
  end

  it 'does not allow user to become an admin with incorrect password' do
    fill_in 'admin_password', with: 'wrong_password'
    click_button 'Submit'

    expect(page).to have_content('Invalid password.')
    user.reload
    expect(user.admin).to be false
  end
end
