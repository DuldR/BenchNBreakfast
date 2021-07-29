@benches.each do |bench|
    json.set! bench.id do
        json.extract! bench, :description, :id, :lat, :long, :seats
    end
end