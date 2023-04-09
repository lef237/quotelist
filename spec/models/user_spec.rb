# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { build(:user) }

    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to validate_presence_of(:password) }

    context 'when avatar is attached' do
      let(:large_image) { fixture_file_upload(Rails.root.join('spec', 'fixtures', 'large_image.png'), 'image/png') }
      let(:invalid_file) { fixture_file_upload(Rails.root.join('spec', 'fixtures', 'invalid_file.txt'), 'text/plain') }

      it 'validates file size' do
        subject.avatar.attach(large_image)
        expect(subject).not_to be_valid
        expect(subject.errors.full_messages).to include('Avatar ファイルサイズは1MB以下にしてください')
      end

      it 'validates file format' do
        subject.avatar.attach(invalid_file)
        expect(subject).not_to be_valid
        expect(subject.errors.full_messages).to include('Avatar jpg, jpeg, pngのどれかの形式でアップロードしてください')
      end
    end
  end

  describe 'default avatar' do
    let(:user) { create(:user) }

    it 'attaches a default avatar if none is provided' do
      expect(user.avatar).to be_attached
      expect(user.avatar.filename).to eq('default.png')
    end
  end

  describe 'Devise related tests' do
    let(:user) { create(:user, password: 'mypassword', password_confirmation: 'mypassword') }

    it 'authenticates the user with a correct password' do
      expect(user.valid_password?('mypassword')).to be_truthy
    end

    it 'does not authenticate the user with an incorrect password' do
      expect(user.valid_password?('wrongpassword')).to be_falsey
    end
  end
end
