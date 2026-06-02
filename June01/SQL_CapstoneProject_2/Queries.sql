SELECT * FROM patients;

SELECT * FROM doctors;

SELECT * FROM patients WHERE city = 'Hyderabad';

SELECT * FROM doctors WHERE specialization = 'Cardiologist';

SELECT * FROM appointments WHERE appointment_date > '2026-01-01';

SELECT * FROM appointments WHERE appointment_status = 'Cancelled';

SELECT * FROM bills WHERE total_amount > 5000;

SELECT * FROM payments WHERE payment_mode = 'UPI';

SELECT * FROM patients WHERE age BETWEEN 30 AND 50;

SELECT * FROM doctors WHERE consultation_fee > 800;

SELECT COUNT(*) AS total_patients FROM patients;

SELECT COUNT(*) AS total_doctors FROM doctors;

SELECT COUNT(*) AS total_appointments FROM appointments;

SELECT AVG(consultation_fee) AS avg_consultation_fee FROM doctors;

SELECT MAX(treatment_cost) AS highest_treatment_cost FROM treatments;

SELECT SUM(total_amount) AS total_billing_amount FROM bills;

SELECT SUM(paid_amount) AS total_paid_amount FROM payments;

SELECT city, COUNT(*) AS patient_count FROM patients GROUP BY city;

SELECT specialization, COUNT(*) AS doctor_count FROM doctors GROUP BY specialization;

SELECT appointment_status, COUNT(*) AS appointment_count FROM appointments GROUP BY appointment_status;

SELECT p.patient_name,a.appointment_date,a.appointment_status FROM patients p 
INNER JOIN appointments a ON p.patient_id = a.patient_id;

SELECT d.doctor_name,dp.department_name FROM doctors d INNER JOIN departments dp
ON d.department_id = dp.department_id;

SELECT p.patient_name,d.doctor_name,a.appointment_date FROM appointments a
INNER JOIN patients p ON a.patient_id = p.patient_id INNER JOIN doctors d
ON a.doctor_id = d.doctor_id;

SELECT a.appointment_id,t.treatment_name,t.treatment_cost FROM appointments a 
INNER JOIN treatments t ON a.appointment_id = t.appointment_id;

SELECT b.bill_id,p.patient_name,b.total_amount FROM bills b
INNER JOIN patients p ON b.patient_id = p.patient_id;

SELECT b.bill_id,p.payment_mode,p.paid_amount,p.payment_status FROM bills b
INNER JOIN payments p ON b.bill_id = p.bill_id;

SELECT pt.patient_name,d.doctor_name,dp.department_name,a.appointment_date,a.appointment_status,t.treatment_name,
t.treatment_cost,b.total_amount,p.payment_status FROM appointments a INNER JOIN patients pt
ON a.patient_id = pt.patient_id INNER JOIN doctors d ON a.doctor_id = d.doctor_id
INNER JOIN departments dp ON d.department_id = dp.department_id LEFT JOIN treatments t
ON a.appointment_id = t.appointment_id LEFT JOIN bills b ON a.appointment_id = b.appointment_id
LEFT JOIN payments p ON b.bill_id = p.bill_id;

SELECT doctor_id,COUNT(*) FROM appointments GROUP BY doctor_id;

SELECT dp.department_name,COUNT(a.appointment_id) FROM departments dp
INNER JOIN doctors d ON dp.department_id = d.department_id
INNER JOIN appointments a ON d.doctor_id = a.doctor_id GROUP BY dp.department_name;

SELECT dp.department_name,SUM(b.total_amount) FROM departments dp
INNER JOIN doctors d ON dp.department_id = d.department_id INNER JOIN appointments a
ON d.doctor_id = a.doctor_id INNER JOIN bills b ON a.appointment_id = b.appointment_id
GROUP BY dp.department_name;

SELECT treatment_name,SUM(treatment_cost) FROM treatments GROUP BY treatment_name;

SELECT p.city,SUM(b.total_amount) FROM patients p INNER JOIN bills b ON p.patient_id = b.patient_id GROUP BY p.city;

SELECT d.doctor_name,COUNT(a.appointment_id) FROM doctors d INNER JOIN appointments a
ON d.doctor_id = a.doctor_id GROUP BY d.doctor_id, d.doctor_name HAVING COUNT(a.appointment_id) > 2;

SELECT dp.department_name,SUM(b.total_amount) FROM departments dp INNER JOIN doctors d ON dp.department_id = d.department_id
INNER JOIN appointments a ON d.doctor_id = a.doctor_id INNER JOIN bills b ON a.appointment_id = b.appointment_id
GROUP BY dp.department_name HAVING SUM(b.total_amount) > 20000;

SELECT city,COUNT(*) AS patient_count FROM patients GROUP BY city HAVING COUNT(*) > 2;

SELECT * FROM patients WHERE patient_id IN(SELECT patient_id FROM appointments);

SELECT * FROM patients WHERE patient_id NOT IN (SELECT patient_id FROM appointments);

SELECT * FROM doctors WHERE doctor_id NOT IN(SELECT doctor_id FROM appointments);

SELECT * FROM bills WHERE total_amount > (SELECT AVG(total_amount)FROM bills);

SELECT * FROM patients WHERE patient_id IN ( SELECT patient_id FROM bills WHERE total_amount =(
SELECT MAX(total_amount) FROM bills ));

SELECT * FROM doctors WHERE consultation_fee > ( SELECT AVG(consultation_fee) FROM doctors);

SELECT * FROM patients WHERE patient_id IN ( SELECT a.patient_id FROM appointments a
INNER JOIN doctors d ON a.doctor_id = d.doctor_id INNER JOIN departments dp
ON d.department_id = dp.department_id WHERE dp.department_name = 'Cardiology');

SELECT * FROM bills WHERE bill_status = 'Unpaid';

SELECT * FROM appointments WHERE appointment_id IN (SELECT appointment_id FROM treatments);

SELECT patient_id,SUM(total_amount) AS total_bill FROM bills GROUP BY patient_id HAVING SUM(total_amount) >(
SELECT AVG(total_billing) FROM(SELECT SUM(total_amount) AS total_billing FROM bills
GROUP BY patient_id) AS total_bill );

SELECT * FROM appointments WHERE appointment_id NOT IN ( SELECT appointment_id FROM treatments);

SELECT * FROM bills WHERE bill_id NOT IN ( SELECT bill_id FROM payments);

SELECT * FROM payments WHERE paid_amount IS NULL OR paid_amount = 0;

SELECT * FROM appointments WHERE appointment_status = 'Cancelled' AND appointment_id IN (
SELECT appointment_id FROM bills );

SELECT b.* FROM bills b JOIN payments p ON b.bill_id = p.bill_id WHERE p.payment_status = 'Paid' AND p.paid_amount < b.total_amount;

SELECT * FROM doctors WHERE department_id NOT IN ( SELECT department_id FROM departments);

SELECT * FROM appointments WHERE patient_id NOT IN ( SELECT patient_id FROM patients)
OR doctor_id NOT IN ( SELECT doctor_id FROM doctors);
