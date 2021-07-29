class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :comment, null: false
      t.integer :rating, null: false
    end
    
  end
end
