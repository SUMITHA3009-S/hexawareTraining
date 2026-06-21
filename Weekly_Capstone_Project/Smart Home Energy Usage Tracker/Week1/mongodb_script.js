use smart_home_energy


db.sensor_logs.insertMany([
{
device_id:1,
timestamp:"2026-06-01T10:00:00",
temperature:25,
power_usage:2.5
},
{
device_id:2,
timestamp:"2026-06-01T12:00:00",
temperature:22,
power_usage:5.0
},
{
device_id:3,
timestamp:"2026-06-01T14:00:00",
temperature:18,
power_usage:3.2
}
]);

db.sensor_logs.createIndex({device_id:1});


db.sensor_logs.createIndex({timestamp:1});
