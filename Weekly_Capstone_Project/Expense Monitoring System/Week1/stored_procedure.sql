DELIMITER $$

CREATE PROCEDURE monthly_category_expenses(
    IN input_month INT,
    IN input_year INT
)

BEGIN

SELECT
    c.category_name,
    SUM(e.amount) AS total_expense

FROM expenses e

JOIN categories c
ON e.category_id = c.category_id

WHERE MONTH(e.expense_date) = input_month
AND YEAR(e.expense_date) = input_year

GROUP BY c.category_name;

END $$

DELIMITER ;


CALL monthly_category_expenses(6, 2026);
