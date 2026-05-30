use config
switched to db config
use retail_db
switched to db retail_db
db.createCollection("customers")
{ ok: 1 }
db.customers.insertOne({})
{
  acknowledged: true,
  insertedId: ObjectId('6a1aaa1ee725fa53a85b6755')
}
db.customers.insertOne({
customer_id:1,
name:"Rahul Sharma",
city:"Hyderabad",
phone:"98766543210",
membership:"Gold"
})
{
  acknowledged: true,
  insertedId: ObjectId('6a1aaa72e725fa53a85b6756')
}
db.customers.insertMany({
customer_id:2,
name:"Priya Reddy",
city:"Bangalore",
phone:"98766543211",
membership:"Silver"
})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
db.customers.insertMany([{
customer_id:2,
name:"Priya Reddy",
city:"Bangalore",
phone:"98766543211",
membership:"Silver"
},
{
customer_id:3,
name:"Amit Kumar",
city:"Mumbai",
phone:"98766543212",
membership:"Gold"
},
{
customer_id:4,
name:"Sneha Patel",
city:"Chennai",
phone:"98766543213",
membership:"Bronze"
}
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a1aabb5e725fa53a85b6757'),
    '1': ObjectId('6a1aabb5e725fa53a85b6758'),
    '2': ObjectId('6a1aabb5e725fa53a85b6759')
  }
}
db.customers.find()
{
  _id: ObjectId('6a1aaa1ee725fa53a85b6755')
}
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6757'),
  customer_id: 2,
  name: 'Priya Reddy',
  city: 'Bangalore',
  phone: '98766543211',
  membership: 'Silver'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6758'),
  customer_id: 3,
  name: 'Amit Kumar',
  city: 'Mumbai',
  phone: '98766543212',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6759'),
  customer_id: 4,
  name: 'Sneha Patel',
  city: 'Chennai',
  phone: '98766543213',
  membership: 'Bronze'
}
db.customers.find({city:"Hyderabad"})
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
db.customers.find({customer_id:{$gt:2}})
{
  _id: ObjectId('6a1aabb5e725fa53a85b6758'),
  customer_id: 3,
  name: 'Amit Kumar',
  city: 'Mumbai',
  phone: '98766543212',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6759'),
  customer_id: 4,
  name: 'Sneha Patel',
  city: 'Chennai',
  phone: '98766543213',
  membership: 'Bronze'
}
db.customers.find({customer_id:{$lte:3}})
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6757'),
  customer_id: 2,
  name: 'Priya Reddy',
  city: 'Bangalore',
  phone: '98766543211',
  membership: 'Silver'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6758'),
  customer_id: 3,
  name: 'Amit Kumar',
  city: 'Mumbai',
  phone: '98766543212',
  membership: 'Gold'
}
db.customers.find({city:{$in:["Hyderabad","bangalore"]}})
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
db.customers.find({city:"Hyderabad",membership:"Gold"})
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
db.customers.find({$or:[{city:"Hyderabad"},{membership:"Silver"}]})
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6757'),
  customer_id: 2,
  name: 'Priya Reddy',
  city: 'Bangalore',
  phone: '98766543211',
  membership: 'Silver'
}
db.customers.find({},{name:1,city:1,_id:0})
{}
{
  name: 'Rahul Sharma',
  city: 'Hyderabad'
}
{
  name: 'Priya Reddy',
  city: 'Bangalore'
}
{
  name: 'Amit Kumar',
  city: 'Mumbai'
}
{
  name: 'Sneha Patel',
  city: 'Chennai'
}
db.customers.find().sort({customer_id:1})
{
  _id: ObjectId('6a1aaa1ee725fa53a85b6755')
}
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6757'),
  customer_id: 2,
  name: 'Priya Reddy',
  city: 'Bangalore',
  phone: '98766543211',
  membership: 'Silver'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6758'),
  customer_id: 3,
  name: 'Amit Kumar',
  city: 'Mumbai',
  phone: '98766543212',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6759'),
  customer_id: 4,
  name: 'Sneha Patel',
  city: 'Chennai',
  phone: '98766543213',
  membership: 'Bronze'
}
db.customers.find().sort({customer_id:-1})
{
  _id: ObjectId('6a1aabb5e725fa53a85b6759'),
  customer_id: 4,
  name: 'Sneha Patel',
  city: 'Chennai',
  phone: '98766543213',
  membership: 'Bronze'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6758'),
  customer_id: 3,
  name: 'Amit Kumar',
  city: 'Mumbai',
  phone: '98766543212',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6757'),
  customer_id: 2,
  name: 'Priya Reddy',
  city: 'Bangalore',
  phone: '98766543211',
  membership: 'Silver'
}
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aaa1ee725fa53a85b6755')
}
db.customers.find().limit(3)
{
  _id: ObjectId('6a1aaa1ee725fa53a85b6755')
}
{
  _id: ObjectId('6a1aaa72e725fa53a85b6756'),
  customer_id: 1,
  name: 'Rahul Sharma',
  city: 'Hyderabad',
  phone: '98766543210',
  membership: 'Gold'
}
{
  _id: ObjectId('6a1aabb5e725fa53a85b6757'),
  customer_id: 2,
  name: 'Priya Reddy',
  city: 'Bangalore',
  phone: '98766543211',
  membership: 'Silver'
}
