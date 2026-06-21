-- Insert Users

INSERT INTO users(user_name, email)
VALUES
('Arun','arun@gmail.com'),
('Priya','priya@gmail.com'),
('Rahul','rahul@gmail.com');

-- Insert Categories

INSERT INTO categories(category_name)
VALUES
('Food'),
('Transport'),
('Shopping');

-- Insert Expenses

INSERT INTO expenses
(user_id, category_id, amount, expense_date, description)
VALUES
(1,1,450.00,'2026-06-01','Restaurant bill'),
(1,2,150.00,'2026-06-02','Taxi fare'),
(2,3,2500.00,'2026-06-03','Clothes purchase');

-- Read Data

SELECT * FROM expenses;

-- Update Expense

UPDATE expenses
SET amount = 500.00
WHERE expense_id = 1;

-- Delete Expense

DELETE FROM expenses
WHERE expense_id = 2;
