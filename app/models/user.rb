# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :quotes
  has_one_attached :avatar
  validate :validate_avatar

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
end
