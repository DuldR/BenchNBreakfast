# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create!(username: 1, password: 123456)

# Benches
Bench.create!(description: "Test Bench 1", lat: 37.747573, long: -122.442415, seats: 1, photo: nil )
Bench.create!(description: "Test Bench 2", lat: 37.771836, long: -122.480727, seats: 2, photo: nil)
Bench.create!(description: "Test Bench 3", lat: 37.774343, long: -122.457431, seats: 3, photo: nil)
Bench.create!(description: "Test Bench 4", lat: 37.781894, long: -122.451058, seats: 4, photo: nil)

# Reviews
Review.create!(comment: "Test Review 1", rating: 5, user_id: 1, bench_id: 1)
Review.create!(comment: "Test Review 2", rating: 4, user_id: 1, bench_id: 1)
Review.create!(comment: "Test Review 3", rating: 3, user_id: 1, bench_id: 2)
Review.create!(comment: "Test Review 4", rating: 2, user_id: 1, bench_id: 3)
Review.create!(comment: "Test Review 5", rating: 1, user_id: 1, bench_id: 4)

# Bench Reviews

# BenchReview.create!(user_id: 1, bench_id: 1, review_id: 1)
# BenchReview.create!(user_id: 1, bench_id: 1, review_id: 2)
# BenchReview.create!(user_id: 1, bench_id: 1, review_id: 3)
# BenchReview.create!(user_id: 1, bench_id: 2, review_id: 4)
# BenchReview.create!(user_id: 1, bench_id: 2, review_id: 5)