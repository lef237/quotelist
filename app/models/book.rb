# frozen_string_literal: true

class Book < ApplicationRecord
  has_many :quotes
end
