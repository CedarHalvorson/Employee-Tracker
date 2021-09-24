DROP DATABASE IF EXISTS business_db;

CREATE DATABASE business_db;

USE business_db;

DROP TABLE IF EXISTS department_table;

CREATE TABLE department_table (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS role_table;

CREATE TABLE role_table (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department_table(id) ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee_table;

CREATE TABLE employee_table (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee_table(id),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role_table(id) ON DELETE SET NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department_table(id) ON DELETE SET NULL
);

