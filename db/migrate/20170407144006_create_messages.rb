class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.references :user, index: true, foreign_key: true
      t.boolean :shared
      t.datetime :archived_at

      t.timestamps null: false
    end
  end
end
