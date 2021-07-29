class AddColumnsToBench < ActiveRecord::Migration[5.2]
  def change

    add_column :bench_reviews, :review_id, :integer
  end
end
