class ReviewsJoinTable < ActiveRecord::Migration[5.2]
  def change

    create_table :bench_reviews do |t|
      t.integer :bench_id
      t.integer :user_id
      t.timestamps
    end
  end
end
