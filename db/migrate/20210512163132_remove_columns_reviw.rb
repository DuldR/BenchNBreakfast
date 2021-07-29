class RemoveColumnsReviw < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :user_id
    remove_column :reviews, :bench_id
  end
end
