USE business_db;

INSERT INTO department_table (name)
VALUES ("hr"), 
       ("IT"),
       ("managment"),
       ("guy"),
       ("dude");


INSERT INTO role_table (title, salary, department_id)
VALUES ("manager", 50000.00, 5),
       ("teacher", 60000.50, 5);


INSERT INTO employee_table (first_name, last_name, manager_id, role_id, department_id)
VALUES ("john", "doe", null, 1, 5),
       ("bill", "jacob", 1, 2, 5);


      

       