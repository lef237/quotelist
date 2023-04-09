# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Quote, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:book) }
    it { is_expected.to belong_to(:source_quote).class_name('Quote').optional }
    it { is_expected.to have_many(:child_quotes).class_name('Quote').inverse_of(:source_quote).dependent(:restrict_with_exception) }
  end

  describe 'validations' do
    it { is_expected.to validate_length_of(:sentence).is_at_most(300) }
  end

  describe '.popular' do
    let(:quote1) { create(:quote, created_at: 5.days.ago) }
    let(:quote2) { create(:quote, created_at: 4.days.ago) }

    before do
      create(:quote, source_quote: quote1, created_at: 3.days.ago)
      create(:quote, source_quote: quote1, created_at: 2.days.ago)
      create(:quote, source_quote: quote2, created_at: 1.day.ago)
    end

    it 'returns quotes in descending order of child_quotes_count' do
      result = described_class.popular.to_a

      expect(result[0].child_quotes_count).to eq(2)
      expect(result[1].child_quotes_count).to eq(1)
      expect(result[2].child_quotes_count).to eq(0)
      expect(result[3].child_quotes_count).to eq(0)
      expect(result[4].child_quotes_count).to eq(0)
    end
  end
end
