class CreatePlanets < ActiveRecord::Migration
  def change
    create_table :planets do |t|
      t.string :name
      t.text :desc
      t.integer :size

      t.timestamps null: false
    end
  end
end
