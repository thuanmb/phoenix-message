class CreateWidgetContents < ActiveRecord::Migration
  def change
    create_table :widget_contents do |t|
      t.references :widget, index: true, foreign_key: true
      t.references :asset, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
