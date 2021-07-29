class Bench < ApplicationRecord

    has_many :reviews
    has_one_attached :photo

    def self.in_bounds(bounds)

        # Google map bound format
        # {
        #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
        #   "southWest"=> {"lat"=>"36", "lng"=>"-123"}
        # }

        northEastLat = bounds["northEast"]["lat"].to_f
        northEastLong = bounds["northEast"]["lng"].to_f
        southWestLat = bounds["southWest"]["lat"].to_f
        southWestLong = bounds["southWest"]["lng"].to_f




        # This works
        @benches = Bench.where("lat < ? and long < ?", northEastLat, northEastLong).where("lat > ? and long > ?", southWestLat, southWestLong)
    end

    def self.seat_filter(min, max)

    end
end
