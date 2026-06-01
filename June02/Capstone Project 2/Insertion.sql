INSERT INTO departments VALUES
(1,'Cardiology'),
(2,'Neurology'),
(3,'Orthopedics'),
(4,'Dermatology'),
(5,'General Medicine');

INSERT INTO patients VALUES
(101,'Rahul Sharma','Male',35,'Hyderabad','9876543210'),
(102,'Priya Reddy','Female',42,'Hyderabad','9876543211'),
(103,'Amit Kumar','Male',28,'Chennai','9876543212'),
(104,'Sneha Patel','Female',31,'Mumbai','9876543213'),
(105,'Arjun Verma','Male',55,'Delhi','9876543214'),
(106,'Neha Singh','Female',38,'Bangalore','9876543215'),
(107,'Farhan Ali','Male',45,'Hyderabad','9876543216'),
(108,'Meera Nair','Female',29,'Chennai','9876543217'),
(109,'Kiran Rao','Male',50,'Pune','9876543218'),
(110,'Divya Sharma','Female',33,'Mumbai','9876543219'),
(111,'Sana Khan','Female',40,'Hyderabad','9876543220'),
(112,'Vikram Gupta','Male',60,'Delhi','9876543221');

INSERT INTO doctors VALUES
(201,'Dr. Anil Kumar','Cardiologist',1,1200),
(202,'Dr. Priya Menon','Neurologist',2,1500),
(203,'Dr. Rajesh Rao','Orthopedic',3,1000),
(204,'Dr. Sneha Iyer','Dermatologist',4,900),
(205,'Dr. Farhan Ali','Physician',5,800),
(206,'Dr. Kavya Reddy','Cardiologist',1,1300),
(207,'Dr. Amit Shah','Neurologist',2,1400),
(208,'Dr. Meera Nair','Physician',5,700);

INSERT INTO appointments VALUES
(301,101,201,'2026-01-05','Completed'),
(302,102,202,'2026-01-07','Completed'),
(303,103,203,'2026-01-10','Cancelled'),
(304,104,204,'2026-01-12','Completed'),
(305,105,205,'2026-01-15','Pending'),
(306,106,206,'2026-01-18','Completed'),
(307,107,201,'2026-01-20','Completed'),
(308,108,202,'2026-01-22','Completed'),
(309,109,203,'2026-01-25','Pending'),
(310,110,204,'2026-01-27','Completed'),
(311,111,205,'2026-02-01','Completed'),
(312,112,206,'2026-02-03','Cancelled'),
(313,101,207,'2026-02-05','Completed'),
(314,102,208,'2026-02-07','Completed'),
(315,103,201,'2026-02-10','Completed'),
(316,104,202,'2026-02-12','Pending'),
(317,105,203,'2026-02-15','Completed'),
(318,106,204,'2026-02-18','Completed'),
(319,107,205,'2026-02-20','Completed'),
(320,108,206,'2026-02-22','Pending');

INSERT INTO treatments VALUES
(401,301,'ECG',2000),
(402,302,'Brain Scan',6000),
(403,304,'Skin Therapy',3000),
(404,306,'Heart Checkup',5000),
(405,307,'ECG',2000),
(406,308,'MRI Scan',7000),
(407,310,'Skin Therapy',3000),
(408,311,'General Checkup',1500),
(409,313,'Neuro Test',4500),
(410,314,'Blood Test',1000),
(411,315,'Heart Checkup',5000),
(412,317,'Bone Scan',4000),
(413,318,'Skin Therapy',3000),
(414,319,'General Checkup',1500),
(415,320,'Heart Checkup',5000);

INSERT INTO bills VALUES
(501,101,301,'2026-01-05',3200,'Paid'),
(502,102,302,'2026-01-07',7500,'Paid'),
(503,104,304,'2026-01-12',3900,'Paid'),
(504,106,306,'2026-01-18',6200,'Paid'),
(505,107,307,'2026-01-20',3200,'Paid'),
(506,108,308,'2026-01-22',8500,'Paid'),
(507,110,310,'2026-01-27',3900,'Paid'),
(508,111,311,'2026-02-01',2300,'Paid'),
(509,101,313,'2026-02-05',5900,'Paid'),
(510,102,314,'2026-02-07',1800,'Paid'),
(511,103,315,'2026-02-10',6500,'Paid'),
(512,105,317,'2026-02-15',5000,'Unpaid'),
(513,106,318,'2026-02-18',3900,'Paid'),
(514,107,319,'2026-02-20',2300,'Paid'),
(515,108,320,'2026-02-22',6500,'Unpaid');

INSERT INTO payments VALUES
(601,501,'UPI',3200,'Paid'),
(602,502,'Card',7500,'Paid'),
(603,503,'Cash',3900,'Paid'),
(604,504,'UPI',6200,'Paid'),
(605,505,'Card',3200,'Paid'),
(606,506,'UPI',8500,'Paid'),
(607,507,'Cash',3900,'Paid'),
(608,508,'UPI',2300,'Paid'),
(609,509,'Card',5900,'Paid'),
(610,510,'UPI',1800,'Paid'),
(611,511,'Card',6500,'Paid'),
(612,512,'UPI',0,'Pending'),
(613,513,'Cash',3900,'Paid'),
(614,514,'UPI',2300,'Paid'),
(615,515,'Card',3000,'Paid');
