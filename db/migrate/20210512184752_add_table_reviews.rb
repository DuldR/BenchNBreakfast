class AddTableReviews < ActiveRecord::Migration[5.2]
  def change

    create_table :reviews do |t|
      t.string :comment, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :bench_id, null: false
      t.timestamps
    end

  end
end
