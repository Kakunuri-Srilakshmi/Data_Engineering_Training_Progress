use movieDB

db.users.insertMany([
  { _id: 1, name: "Rahul Sharma", email: "rahul@example.com", city: "Bangalore", plan: "Premium" },
  { _id: 2, name: "Priya Singh", email: "priya@example.com", city: "Delhi", plan: "Basic" },
  { _id: 3, name: "Aman Kumar", email: "aman@example.com", city: "Hyderabad", plan: "Standard" }
])

db.movies.insertMany([
  { _id: 101, title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
  { _id: 102, title: "3 Idiots", genre: "Comedy", year: 2009, rating: 8.4 },
  { _id: 103, title: "Bahubali", genre: "Action", year: 2015, rating: 8.1 },
  { _id: 104, title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
  { _id: 105, title: "Dangal", genre: "Drama", year: 2016, rating: 8.5 }
])

db.subscriptions.insertMany([
  { user_id: 1, start_date: ISODate("2025-01-01"), end_date: ISODate("2025-12-31"), amount: 999 },
  { user_id: 2, start_date: ISODate("2025-02-01"), end_date: ISODate("2025-07-31"), amount: 499 },
  { user_id: 3, start_date: ISODate("2025-01-15"), end_date: ISODate("2025-10-15"), amount: 799 }
])

db.watchHistory.insertMany([
  { user_id: 1, movie_id: 101, watch_date: ISODate("2025-02-10") },
  { user_id: 1, movie_id: 102, watch_date: ISODate("2025-02-12") },
  { user_id: 2, movie_id: 103, watch_date: ISODate("2025-02-11") },
  { user_id: 3, movie_id: 104, watch_date: ISODate("2025-02-13") },
  { user_id: 3, movie_id: 105, watch_date: ISODate("2025-02-14") }
])

db.users.insertOne({ _id: 4, name: "Neha Verma", email: "neha@example.com", city: "Mumbai", plan: "Premium" })

db.movies.updateOne({ title: "Bahubali" }, { $set: { rating: 8.3 } })

db.movies.deleteOne({ title: "3 Idiots" })

db.users.find({ plan: "Standard" })

db.users.find({ plan: "Premium" })

db.users.createIndex({ email: 1 }, { unique: true })

db.movies.createIndex({ genre: 1, rating: -1 })

db.movies.getIndexes()

db.movies.find({ genre: "Action" }).sort({ rating: -1 })

db.movies.find({ title: { $exists: true } }).hint({ $natural: 1 })

db.movies.aggregate([{ $group: { _id: "$genre", count: { $sum: 1 } } }])

db.movies.aggregate([{ $sort: { rating: -1 } }, { $limit: 2 }])

db.subscriptions.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "userDetails" } },
  { $unwind: "$userDetails" },
  { $group: { _id: "$userDetails.plan", avgAmount: { $avg: "$amount" } } }
])

db.watchHistory.aggregate([{ $group: { _id: "$movie_id", totalWatches: { $sum: 1 } } }])

db.users.aggregate([{ $match: { plan: "Premium" } }, { $group: { _id: "$city", count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 1 }])

db.watchHistory.aggregate([
  { $lookup: { from: "movies", localField: "movie_id", foreignField: "_id", as: "movie" } },
  { $unwind: "$movie" },
  { $group: { _id: "$movie.genre", totalWatches: { $sum: 1 } } },
  { $sort: { totalWatches: -1 } },
  { $limit: 1 }
])

db.watchHistory.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $lookup: { from: "movies", localField: "movie_id", foreignField: "_id", as: "movie" } },
  { $project: { user: { $arrayElemAt: ["$user.name", 0] }, movie: { $arrayElemAt: ["$movie.title", 0] }, watch_date: 1 } }
])

db.watchHistory.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $lookup: { from: "movies", localField: "movie_id", foreignField: "_id", as: "movie" } },
  { $match: { "user.name": "Rahul Sharma" } },
  { $project: { _id: 0, movie: { $arrayElemAt: ["$movie.title", 0] } } }
])

db.users.aggregate([{ $lookup: { from: "subscriptions", localField: "_id", foreignField: "user_id", as: "subscription" } }])

db.watchHistory.aggregate([
  { $lookup: { from: "movies", localField: "movie_id", foreignField: "_id", as: "movie" } },
  { $unwind: "$movie" },
  { $match: { "movie.year": { $gt: 2010 } } },
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $project: { user: { $arrayElemAt: ["$user.name", 0] } } }
])

db.watchHistory.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $group: { _id: "$movie_id", users: { $push: { $arrayElemAt: ["$user.name", 0] } } } }
])

db.watchHistory.aggregate([{ $group: { _id: "$user_id", count: { $sum: 1 } } }, { $match: { count: { $gt: 2 } } }])

db.subscriptions.aggregate([{ $group: { _id: null, totalRevenue: { $sum: "$amount" } } }])

db.subscriptions.aggregate([
  { $match: { end_date: { $lte: new Date(new Date().getTime() + 30*24*60*60*1000) } } },
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $project: { user: { $arrayElemAt: ["$user.name", 0] }, end_date: 1 } }
])

db.watchHistory.aggregate([{ $group: { _id: "$movie_id", watchCount: { $sum: 1 } } }, { $sort: { watchCount: -1 } }, { $limit: 1 }])

db.watchHistory.aggregate([
  { $lookup: { from: "movies", localField: "movie_id", foreignField: "_id", as: "movie" } },
  { $unwind: "$movie" },
  { $group: { _id: "$movie.genre", count: { $sum: 1 } } },
  { $sort: { count: 1 } },
  { $limit: 1 }
])
