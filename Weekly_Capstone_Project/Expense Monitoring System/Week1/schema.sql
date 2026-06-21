CREATE DATABASE expense_monitoring;

USE expense_monitoring;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50)
);

CREATE TABLE expenses (
    expense_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    category_id INT,
    amount DECIMAL(10,2),
    expense_date DATE,
    description VARCHAR(200),
    FOREIGN KEY (user_id)
        REFERENCES users(user_id),
    FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
);
