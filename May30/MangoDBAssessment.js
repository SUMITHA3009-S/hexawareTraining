use food_delivery_assessment_db
switched to db food_delivery_assessment_db
db.createCollection("restaurants")
{ ok: 1 }
db.restaurants.insertMany([
{
restaurant_id: 1,
name: "Spice Hub",
city: "Hyderabad",
cuisine: "Indian",
rating: 4.5,
avg_order_value: 450,
delivery_available: true,
tags: ["biryani", "north indian", "family"],
contact: {
phone: "9876543210",
email: "spicehub@mail.com"
}
},
{
restaurant_id: 2,
name: "Pizza Corner",
city: "Bangalore",

cuisine: "Italian",
rating: 4.2,
avg_order_value: 600,
delivery_available: true,
tags: ["pizza", "fast food", "cheese"],
contact: {
phone: "9876543211",
email: "pizza@mail.com"
}
},
{
restaurant_id: 3,
name: "Green Bowl",
city: "Chennai",
cuisine: "Healthy",
rating: 4.7,
avg_order_value: 350,
delivery_available: false,
tags: ["salad", "vegan", "healthy"],
contact: {
phone: null,
email: "greenbowl@mail.com"
}
},
{
restaurant_id: 4,
name: "Burger Street",
city: "Hyderabad",
cuisine: "Fast Food",
rating: 3.9,
avg_order_value: 300,
delivery_available: true,
tags: ["burger", "fries", "fast food"],
contact: {
phone: "9876543213",
email: null
}
},
{
restaurant_id: 5,
name: "Royal Tandoor",
city: "Delhi",
cuisine: "Indian",
rating: 4.8,

avg_order_value: 800,
delivery_available: true,
tags: ["tandoor", "north indian", "premium"],
contact: {
phone: "9876543214",
email: "royal@mail.com"
}
},
{
restaurant_id: 6,
name: "Tea Tales",
city: "Pune",
cuisine: "Cafe",
rating: 4.1,
avg_order_value: 200,
delivery_available: false,
tags: ["tea", "snacks", "cafe"],
contact: {
phone: "9876543215",
email: "tea@mail.com"
}
},
{
restaurant_id: 7,
name: "Ocean Grill",
city: "Mumbai",
cuisine: "Seafood",
rating: 4.6,
avg_order_value: 900,
delivery_available: true,
tags: ["fish", "grill", "premium"],
contact: {
phone: "9876543216",
email: "ocean@mail.com"
}
},
{
restaurant_id: 8,
name: "Dosa Point",
city: "Chennai",
cuisine: "South Indian",
rating: 4.3,
avg_order_value: 250,
delivery_available: true,

tags: ["dosa", "idli", "breakfast"],
contact: {
phone: null,
email: null
}
}
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a1ab583d0b388a7527fa315'),
    '1': ObjectId('6a1ab583d0b388a7527fa316'),
    '2': ObjectId('6a1ab583d0b388a7527fa317'),
    '3': ObjectId('6a1ab583d0b388a7527fa318'),
    '4': ObjectId('6a1ab583d0b388a7527fa319'),
    '5': ObjectId('6a1ab583d0b388a7527fa31a'),
    '6': ObjectId('6a1ab583d0b388a7527fa31b'),
    '7': ObjectId('6a1ab583d0b388a7527fa31c')
  }
}
db.restaurants.find()// 1
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({},{name:1,city:1,cuisine:1,_id:0}) //2
{
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian'
}
{
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian'
}
{
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy'
}
{
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food'
}
{
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian'
}
{
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe'
}
{
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood'
}
{
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian'
}
db.restaurants.find({city:"Hyderabad"})
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
db.restaurants.find({cuisine:"Indian"})//3
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
db.restaurants.find({ delivery_available: true })//4
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({ rating: { $gt: 4.5 } })//5
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
db.restaurants.find({ avg_order_value: { $lt: 400 } })//7
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({ rating: { $gte: 4.0, $lte: 4.7 } })
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({ avg_order_value: { $gte: 600 } })//8
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
db.restaurants.find({
  city: "Hyderabad",
  delivery_available: true
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}

db.restaurants.find({$or:[{city:"chennai"},{cuisine:"Indian"}]})//9
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
db.restaurants.find({ delivery_available: false })//10
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
db.restaurants.find({
  city: { $in: ["Hyderabad", "Delhi", "Mumbai"] }
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
db.restaurants.find({
  cuisine: { $in: ["Indian", "Italian", "Cafe"] }
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
db.restaurants.find({
  city: { $nin: ["Hyderabad", "Bangalore"] }
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({
  name: /^P/
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
db.restaurants.find({
  name: /Point/
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({
  cuisine: /Food/
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
db.restaurants.find({
  "contact.phone": null
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({
  "contact.email": null
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({
  $or: [
    { "contact.phone": null },
    { "contact.email": null }
  ]
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
db.restaurants.find({
  tags: "premium"
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
db.restaurants.find({
  tags: "fast food"
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
db.restaurants.find({
  tags: { $all: ["north indian", "premium"] }
})
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
db.restaurants.find().sort({ rating: -1 })
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
db.restaurants.find().sort({ rating: -1 }).limit(3)
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
db.restaurants.find().sort({ avg_order_value: 1 })
{
  _id: ObjectId('6a1ab583d0b388a7527fa31a'),
  restaurant_id: 6,
  name: 'Tea Tales',
  city: 'Pune',
  cuisine: 'Cafe',
  rating: 4.1,
  avg_order_value: 200,
  delivery_available: false,
  tags: [
    'tea',
    'snacks',
    'cafe'
  ],
  contact: {
    phone: '9876543215',
    email: 'tea@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31c'),
  restaurant_id: 8,
  name: 'Dosa Point',
  city: 'Chennai',
  cuisine: 'South Indian',
  rating: 4.3,
  avg_order_value: 250,
  delivery_available: true,
  tags: [
    'dosa',
    'idli',
    'breakfast'
  ],
  contact: {
    phone: null,
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa318'),
  restaurant_id: 4,
  name: 'Burger Street',
  city: 'Hyderabad',
  cuisine: 'Fast Food',
  rating: 3.9,
  avg_order_value: 300,
  delivery_available: true,
  tags: [
    'burger',
    'fries',
    'fast food'
  ],
  contact: {
    phone: '9876543213',
    email: null
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa317'),
  restaurant_id: 3,
  name: 'Green Bowl',
  city: 'Chennai',
  cuisine: 'Healthy',
  rating: 4.7,
  avg_order_value: 350,
  delivery_available: false,
  tags: [
    'salad',
    'vegan',
    'healthy'
  ],
  contact: {
    phone: null,
    email: 'greenbowl@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa315'),
  restaurant_id: 1,
  name: 'Spice Hub',
  city: 'Hyderabad',
  cuisine: 'Indian',
  rating: 4.5,
  avg_order_value: 450,
  delivery_available: true,
  tags: [
    'biryani',
    'north indian',
    'family'
  ],
  contact: {
    phone: '9876543210',
    email: 'spicehub@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa316'),
  restaurant_id: 2,
  name: 'Pizza Corner',
  city: 'Bangalore',
  cuisine: 'Italian',
  rating: 4.2,
  avg_order_value: 600,
  delivery_available: true,
  tags: [
    'pizza',
    'fast food',
    'cheese'
  ],
  contact: {
    phone: '9876543211',
    email: 'pizza@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
db.restaurants.find().sort({ avg_order_value: -1 }).limit(2)
{
  _id: ObjectId('6a1ab583d0b388a7527fa31b'),
  restaurant_id: 7,
  name: 'Ocean Grill',
  city: 'Mumbai',
  cuisine: 'Seafood',
  rating: 4.6,
  avg_order_value: 900,
  delivery_available: true,
  tags: [
    'fish',
    'grill',
    'premium'
  ],
  contact: {
    phone: '9876543216',
    email: 'ocean@mail.com'
  }
}
{
  _id: ObjectId('6a1ab583d0b388a7527fa319'),
  restaurant_id: 5,
  name: 'Royal Tandoor',
  city: 'Delhi',
  cuisine: 'Indian',
  rating: 4.8,
  avg_order_value: 800,
  delivery_available: true,
  tags: [
    'tandoor',
    'north indian',
    'premium'
  ],
  contact: {
    phone: '9876543214',
    email: 'royal@mail.com'
  }
}
db.restaurants.updateOne(
  { name: "Burger Street" },
  { $set: { rating: 4.0 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.updateOne(
  { name: "Tea Tales" },
  { $set: { delivery_available: true } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.updateMany(
  {},
  { $set: { active: true } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 8,
  modifiedCount: 8,
  upsertedCount: 0
}
db.restaurants.updateOne(
  { name: "Spice Hub" },
  { $push: { tags: "popular" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.updateMany(
  {},
  { $unset: { active: "" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 8,
  modifiedCount: 8,
  upsertedCount: 0
}
db.restaurants.deleteOne({
  restaurant_id: 6
})
{
  acknowledged: true,
  deletedCount: 1
}
db.restaurants.deleteMany({
  rating: { $lt: 4.0 }
})
{
  acknowledged: true,
  deletedCount: 0
}
db.restaurants.countDocuments()
7
db.restaurants.countDocuments({
  delivery_available: true
})
6
db.restaurants.distinct("city")
[ 'Bangalore', 'Chennai', 'Delhi', 'Hyderabad', 'Mumbai' ]
db.restaurants.distinct("cuisine")
[
  'Fast Food',
  'Healthy',
  'Indian',
  'Italian',
  'Seafood',
  'South Indian'
]
db.restaurants.aggregate([
  {
    $group: {
      _id: "$city",
      count: { $sum: 1 }
    }
  }
])
{
  _id: 'Delhi',
  count: 1
}
{
  _id: 'Mumbai',
  count: 1
}
{
  _id: 'Bangalore',
  count: 1
}
{
  _id: 'Hyderabad',
  count: 2
}
{
  _id: 'Chennai',
  count: 2
}
db.restaurants.aggregate([
  {
    $group: {
      _id: "$cuisine",
      count: { $sum: 1 }
    }
  }
])
{
  _id: 'Fast Food',
  count: 1
}
{
  _id: 'Indian',
  count: 2
}
{
  _id: 'Healthy',
  count: 1
}
{
  _id: 'Seafood',
  count: 1
}
{
  _id: 'South Indian',
  count: 1
}
{
  _id: 'Italian',
  count: 1
}
db.restaurants.aggregate([
  {
    $group: {
      _id: "$cuisine",
      avgRating: { $avg: "$rating" }
    }
  }
])
{
  _id: 'Healthy',
  avgRating: 4.7
}
{
  _id: 'Indian',
  avgRating: 4.65
}
{
  _id: 'Fast Food',
  avgRating: 4
}
{
  _id: 'Seafood',
  avgRating: 4.6
}
{
  _id: 'South Indian',
  avgRating: 4.3
}
{
  _id: 'Italian',
  avgRating: 4.2
}
db.restaurants.aggregate([
  {
    $group: {
      _id: "$city",
      avgOrderValue: { $avg: "$avg_order_value" }
    }
  }
])
{
  _id: 'Chennai',
  avgOrderValue: 300
}
{
  _id: 'Bangalore',
  avgOrderValue: 600
}
{
  _id: 'Mumbai',
  avgOrderValue: 900
}
{
  _id: 'Delhi',
  avgOrderValue: 800
}
{
  _id: 'Hyderabad',
  avgOrderValue: 375
}
db.restaurants.aggregate([
  {
    $group: {
      _id: "$cuisine",
      highestAvgOrderValue: { $avg: "$avg_order_value" }
    }
  },
  {
    $sort: { highestAvgOrderValue: -1 }
  }
])
{
  _id: 'Seafood',
  highestAvgOrderValue: 900
}
{
  _id: 'Indian',
  highestAvgOrderValue: 625
}
{
  _id: 'Italian',
  highestAvgOrderValue: 600
}
{
  _id: 'Healthy',
  highestAvgOrderValue: 350
}
{
  _id: 'Fast Food',
  highestAvgOrderValue: 300
}
{
  _id: 'South Indian',
  highestAvgOrderValue: 250
}
db.restaurants.aggregate([
  {
    $group: {
      _id: "$cuisine",
      count: { $sum: 1 }
    }
  },
  {
    $match: {
      count: { $gt: 1 }
    }
  }
])
{
  _id: 'Indian',
  count: 2
}
