SELECT * FROM department_table;


SELECT 
    role_table.id AS role_id,
    role_table.title AS title,
    role_table.salary AS salary,
    department_table.name AS department_name 
        FROM role_table JOIN department_table ON role_table.department_id = department_table.id;

SELECT 
    employee_table.id AS employee_id,
    employee_table.first_name AS first_name,
    employee_table.last_name AS last_name,
    role_table.title AS title,
    role_table.salary AS salary
        FROM employee_table JOIN role_table ON employee_table.role_id = role_table.id;
