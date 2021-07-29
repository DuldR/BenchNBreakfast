class BenchReview < ApplicationRecord


    belongs_to :bench

    belongs_to :user

    belongs_to :review

end