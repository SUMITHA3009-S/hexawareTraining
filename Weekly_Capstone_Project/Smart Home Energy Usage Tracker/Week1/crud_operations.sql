-- Insert Rooms
INSERT INTO rooms(room_name, location)
VALUES
('Living Room','First Floor'),
('Bedroom','First Floor'),
('Kitchen','Ground Floor');


-- Insert Devices
INSERT INTO devices
(device_name, device_type, room_id, status)
VALUES
('Smart TV','Electronics',1,'ON'),
('AC','Appliance',2,'OFF'),
('Refrigerator','Appliance',3,'ON');


-- Insert Energy Logs
INSERT INTO energy_logs
(device_id, timestamp, energy_kwh)
VALUES
(1,'2026-06-01 10:00:00',2.5),
(2,'2026-06-01 12:00:00',5.0),
(3,'2026-06-01 14:00:00',3.2);


-- Read
SELECT * FROM devices;


-- Update
UPDATE devices
SET status='OFF'
WHERE device_id=1;


-- Delete
DELETE FROM devices
WHERE device_id=2;
