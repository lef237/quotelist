# frozen_string_literal: true

class Book < ApplicationRecord
  has_many :quotes
  has_one_attached :avatar
  validate :validate_avatar

  private

  # アバター画像のバリデーション内容
  def validate_avatar
    return unless avatar.attached?
    # 画像サイズの制限
    if avatar.blob.byte_size > 1.megabytes
      # エラーメッセージはi18nから取得
      errors.add(:avatar, 'ファイルサイズは1MB以下にしてください')
    elsif !image?
      errors.add(:avatar, 'jpg, jpeg, pngのどれかの形式でアップロードしてください')
    end
  end

  # 拡張子でファイルの種類を確認
  def image?
    avatar.content_type.in?(%("image/jpeg image/jpg image/png"))
  end
end
