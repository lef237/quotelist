# frozen_string_literal: true

class Book < ApplicationRecord
  has_many :quotes, dependent: :restrict_with_exception
  has_one_attached :avatar
  validate :validate_avatar
  before_create :default_avatar
  scope :search, ->(keyword) { where('author LIKE ? OR title LIKE ?', "%#{keyword}%", "%#{keyword}%").order(created_at: :desc) }

  private

  def validate_avatar
    return unless avatar.attached?

    if avatar.blob.byte_size > 1.megabytes
      errors.add(:avatar, 'ファイルサイズは1MB以下にしてください')
    elsif !image?
      errors.add(:avatar, 'jpg, jpeg, pngのどれかの形式でアップロードしてください')
    end
  end

  def image?
    avatar.content_type.in?(%("image/jpeg image/jpg image/png"))
  end

  def default_avatar
    return if avatar.attached?

    avatar.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default.png')), filename: 'default.png', content_type: 'image/png')
  end
end
