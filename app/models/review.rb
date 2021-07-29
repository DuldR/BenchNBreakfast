class Review < ApplicationRecord

    validates :comment, null: false
    validates :rating, numericality: { less_than_or_equal_to: 5, greater_than_or_equal_to:1  }

    belongs_to :user
    belongs_to :bench


end