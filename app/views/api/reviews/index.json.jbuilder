@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :comment, :rating
    end
end