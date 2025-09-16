use foodDeliveryDB

db.customers.insertMany([
  { _id: 1, name: "Rahul Sharma", email: "rahul@example.com", city: "Bangalore" },
  { _id: 2, name: "Priya Singh", email: "priya@example.com", city: "Delhi" },
  { _id: 3, name: "Aman Kumar", email: "aman@example.com", city: "Hyderabad" }
])

db.restaurants.insertMany([
  { _id: 101, name: "Spicy Treats", city: "Bangalore", rating: 4.5 },
  { _id: 102, name: "Delhi Biryani House", city: "Delhi", rating: 4.2 },
  { _id: 103, name: "Hyderabad Grill", city: "Hyderabad", rating: 4.7 }
])

db.menu.insertMany([
  { _id: 201, restaurant_id: 101, name: "Paneer Tikka", price: 250 },
  { _id: 202, restaurant_id: 101, name: "Veg Biryani", price: 180 },
  { _id: 203, restaurant_id: 102, name: "Chicken Biryani", price: 300 },
  { _id: 204, restaurant_id: 103, name: "Mutton Biryani", price: 400 },
  { _id: 205, restaurant_id: 103, name: "Butter Naan", price: 50 }
])

db.orders.insertMany([
  { _id: 301, customer_id: 1, items: [ { menu_id: 201, qty: 2 }, { menu_id: 202, qty: 1 } ], order_date: ISODate("2025-01-05"), status: "Delivered" },
  { _id: 302, customer_id: 2, items: [ { menu_id: 203, qty: 1 } ], order_date: ISODate("2025-01-06"), status: "Delivered" },
  { _id: 303, customer_id: 3, items: [ { menu_id: 204, qty: 1 }, { menu_id: 205, qty: 3 } ], order_date: ISODate("2025-01-07"), status: "Pending" }
])

db.customers.insertOne({
  _id: 4,
  name: "Sravani Reddy",
  email: "sravani.reddy@example.com",
  city: "Mumbai"
})

db.restaurants.find({
  city: "Hyderabad"
})

db.restaurants.updateOne(
  { name: "Spicy Treats" },
  { $set: { rating: 4.8 } }
)

db.menu.deleteOne({
  name: "Butter Naan"
})

db.customers.createIndex(
  { email: 1 },
  { unique: true }
)

db.restaurants.createIndex(
  { city: 1, rating: -1 }
)

db.restaurants.getIndexes()

db.restaurants.find(
  { city: "Delhi" }
).sort(
  { rating: -1 }
)

db.restaurants.find({
  rating: { $gt: 4.5 }
})

db.orders.aggregate([
  { $group: { _id: "$customer_id", totalOrders: { $sum: 1 } } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $lookup: { from: "restaurants", localField: "menuDetails.restaurant_id", foreignField: "_id", as: "restDetails" } },
  { $unwind: "$restDetails" },
  { $group: { _id: "$restDetails.name", totalRevenue: { $sum: { $multiply: [ "$items.qty", "$menuDetails.price" ] } } } }
])

db.menu.aggregate([
  { $sort: { price: -1 } },
  { $limit: 2 }
])

db.menu.aggregate([
  { $group: { _id: "$restaurant_id", avgPrice: { $avg: "$price" } } }
])

db.orders.aggregate([
  { $match: { status: "Pending" } },
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuInfo" } },
  { $unwind: "$menuInfo" },
  { $lookup: { from: "restaurants", localField: "menuInfo.restaurant_id", foreignField: "_id", as: "restInfo" } },
  { $unwind: "$restInfo" },
  { $group: { _id: "$restInfo.city", pendingOrders: { $sum: 1 } } }
])

db.restaurants.aggregate([
  { $group: { _id: "$city", topRestaurant: { $first: "$name" }, maxRating: { $max: "$rating" } } }
])

db.orders.aggregate([
  { $lookup: { from: "customers", localField: "customer_id", foreignField: "_id", as: "custInfo" } },
  { $unwind: "$custInfo" },
  { $project: { _id: 1, status: 1, order_date: 1, customerName: "$custInfo.name", city: "$custInfo.city" } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $lookup: { from: "restaurants", localField: "menuDetails.restaurant_id", foreignField: "_id", as: "restDetails" } },
  { $unwind: "$restDetails" },
  { $project: { order_id: "$_id", dish: "$menuDetails.name", qty: "$items.qty", price: "$menuDetails.price", restaurant: "$restDetails.name" } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $group: { _id: "$customer_id", dishes: { $push: { dish: "$menuDetails.name", qty: "$items.qty" } } } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $match: { "menuDetails.restaurant_id": 103 } },
  { $lookup: { from: "customers", localField: "customer_id", foreignField: "_id", as: "custInfo" } },
  { $unwind: "$custInfo" },
  { $project: { customer: "$custInfo.name", city: "$custInfo.city" } }
])

db.orders.aggregate([
  { $match: { _id: 301 } },
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuInfo" } },
  { $unwind: "$menuInfo" },
  { $project: { dish: "$menuInfo.name", qty: "$items.qty", price: "$menuInfo.price", total: { $multiply: [ "$items.qty", "$menuInfo.price" ] } } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $group: { _id: "$customer_id", totalSpent: { $sum: { $multiply: [ "$items.qty", "$menuDetails.price" ] } } } },
  { $match: { totalSpent: { $gt: 500 } } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $group: { _id: "$customer_id", totalSpent: { $sum: { $multiply: [ "$items.qty", "$menuDetails.price" ] } } } },
  { $lookup: { from: "customers", localField: "_id", foreignField: "_id", as: "custInfo" } },
  { $unwind: "$custInfo" },
  { $match: { "custInfo.city": "Bangalore" } },
  { $sort: { totalSpent: -1 } },
  { $limit: 1 }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $lookup: { from: "restaurants", localField: "menuDetails.restaurant_id", foreignField: "_id", as: "restDetails" } },
  { $unwind: "$restDetails" },
  { $group: { _id: "$restDetails.name", revenue: { $sum: { $multiply: [ "$items.qty", "$menuDetails.price" ] } } } },
  { $match: { revenue: { $gt: 500 } } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: { from: "menu", localField: "items.menu_id", foreignField: "_id", as: "menuDetails" } },
  { $unwind: "$menuDetails" },
  { $project: { day: { $dateToString: { format: "%Y-%m-%d", date: "$order_date" } }, revenue: { $multiply: [ "$items.qty", "$menuDetails.price" ] } } },
  { $group: { _id: "$day", dailyRevenue: { $sum: "$revenue" } } }
])

db.orders.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.menu_id", totalOrdered: { $sum: "$items.qty" } } },
  { $sort: { totalOrdered: -1 } },
  { $limit: 1 },
  { $lookup: { from: "menu", localField: "_id", foreignField: "_id", as: "dish" } },
  { $unwind: "$dish" },
  { $project: { mostPopularDish: "$dish.name", totalOrdered: 1 } }
])
