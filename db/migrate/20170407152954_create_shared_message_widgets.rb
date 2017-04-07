class CreateSharedMessageWidgets < ActiveRecord::Migration
  def change
    create_table :shared_message_widgets do |t|
      t.references :shared_message, index: true, foreign_key: true
      t.references :widget, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
