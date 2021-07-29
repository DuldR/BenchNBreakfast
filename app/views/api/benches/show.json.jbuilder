json.set! @bench.id do
    json.extract! @bench, :description, :id, :lat, :long, :seats
    if (@bench.photo.attached?)
        json.photoUrl url_for(@bench.photo)
    end
end