json.set! :id do
    json.extract! @review, :rating, :comment
end