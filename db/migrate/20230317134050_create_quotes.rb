class CreateQuotes < ActiveRecord::Migration[7.0]
  def change
    create_table :quotes do |t|
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true
      t.text :sentence
      t.integer :page_number
      t.references :source_quote, foreign_key: { to_table: :quotes }

      t.timestamps
    end
  end
end
