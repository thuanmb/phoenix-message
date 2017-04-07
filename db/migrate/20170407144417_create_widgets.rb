class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.references :message, index: true, foreign_key: true
      t.references :asset, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
