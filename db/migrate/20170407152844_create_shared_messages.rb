class CreateSharedMessages < ActiveRecord::Migration
  def change
    create_table :shared_messages do |t|
      t.references :message, index: true, foreign_key: true
      t.string :token

      t.timestamps null: false
    end
  end
end
