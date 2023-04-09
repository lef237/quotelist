# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Book, type: :model do
  it 'has a valid factory' do
    expect(build(:book)).to be_valid
  end

  describe 'associations' do
    it { is_expected.to have_many(:quotes).dependent(:restrict_with_exception) }
    it { is_expected.to have_one_attached(:avatar) }
  end

  describe 'validations' do
    it 'is valid with valid attributes' do
      book = build(:book)
      expect(book).to be_valid
    end

    context 'when validate avatar' do
      it 'is not valid if avatar size is more than 1MB' do
        large_file = fixture_file_upload('spec/fixtures/large_image.png', 'image/png')
        book = build(:book, avatar: large_file)
        expect(book).not_to be_valid
        expect(book.errors[:avatar]).to include('ファイルサイズは1MB以下にしてください')
      end

      it 'is not valid if avatar is not an image' do
        invalid_file = fixture_file_upload('spec/fixtures/invalid_file.txt', 'text/plain')
        book = build(:book, avatar: invalid_file)
        expect(book).not_to be_valid
        expect(book.errors[:avatar]).to include('jpg, jpeg, pngのどれかの形式でアップロードしてください')
      end

      it 'is valid if avatar is an image with size less than 1MB' do
        valid_image = fixture_file_upload('spec/fixtures/valid_image.png', 'image/png')
        book = build(:book, avatar: valid_image)
        expect(book).to be_valid
      end
    end
  end

  describe 'callbacks' do
    it 'attaches a default avatar if no avatar is provided' do
      book = create(:book, avatar: nil)
      expect(book.avatar).to be_attached
    end
  end

  describe 'scopes' do
    let!(:book1) { create(:book, title: 'ゼロからわかるRuby超入門', author: '五十嵐邦明') }
    let!(:book2) { create(:book, title: 'プロを目指す人のためのRuby入門', author: '伊藤淳一') }
    let!(:book3) { create(:book, title: 'パーフェクトRuby on Rails', author: 'すがわらまさのり') }

    it 'returns books matching the search keyword' do
      expect(described_class.search('Ruby')).to contain_exactly(book1, book2, book3)
      expect(described_class.search('五十嵐')).to contain_exactly(book1)
    end

    it 'returns books in descending order of creation' do
      expect(described_class.search('Ruby')).to eq([book3, book2, book1])
    end
  end
end
