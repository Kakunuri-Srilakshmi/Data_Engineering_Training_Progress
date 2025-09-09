
create database company_db;
use company_db;

create table employees (
    emp_id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    age int,
    department varchar(50),
    salary decimal(10,2)
);

insert into employees (first_name, last_name, age, department, salary)
values
  ('Sri', 'Lakshmi', 20, 'IT', 70000.00),
  ('Hari', 'Krishna', 26, 'Finance', 54000.00),
  ('Jaya', 'Priya', 32, 'HR', 50000.00),
  ('Bhagya', 'Sree', 30, 'IT', 80000.00),
  ('Rahul', 'Dravid', 46, 'Sales', 48000.00);

select * from employees;
select first_name, department, salary from employees;
select * from employees where department = 'IT';

update employees
set department = 'Accounts'
where department = 'Finance';

delete from employees
where department = 'HR';

select * from employees;
