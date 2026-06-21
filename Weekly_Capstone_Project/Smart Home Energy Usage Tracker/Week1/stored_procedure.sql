DELIMITER $$

CREATE PROCEDURE room_energy_usage(IN input_date DATE)

BEGIN

SELECT
    r.room_name,
    DATE(e.timestamp) AS usage_date,
    SUM(e.energy_kwh) AS total_energy

FROM energy_logs e

JOIN devices d
ON e.device_id=d.device_id

JOIN rooms r
ON d.room_id=r.room_id

WHERE DATE(e.timestamp)=input_date

GROUP BY
    r.room_name,
    DATE(e.timestamp);

END $$

DELIMITER ;


CALL room_energy_usage('2026-06-01');
