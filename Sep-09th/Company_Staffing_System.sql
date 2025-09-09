
use company_db;

create table departments(
  dept_id int primary key auto_increment,
  dept_name varchar(50) not null,
  location varchar(50) not null
);

insert into departments (dept_id, dept_name, location) values
(1, 'IT', 'Bangalore'),
(2, 'HR', 'Hyderabad'),
(3, 'Finance', 'Mumbai'),
(4, 'Marketing', 'Delhi'),
(5, 'Operations', 'Chennai'),
(6, 'R&D', 'Pune');

select * 
from departments;

create table staff(
  staff_id int primary key auto_increment,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  age int,
  salary decimal(10,2),
  dept_id int
);

insert into staff (staff_id, first_name, last_name, age, salary, dept_id) values
(101, 'Ramakrishna', 'Reddy', 28, 55000.00, 1),
(102, 'Sravani', 'Chowdary', 32, 60000.00, 2),
(103, 'Vamsi', 'Krishna', 26, 48000.00, null),
(104, 'Harika', 'Ippala', 29, 52000.00, 4),
(105, 'Aravind', 'Kumar', 35, 75000.00, 1),
(106, 'Divya', 'Manchala', 30, 50000.00, 5),
(107, 'Sai', 'Teja', 41, 91000.00, 1),
(108, 'Mounika', 'Yarlagadda', 24, 42000.00, null),
(109, 'Venkatesh', 'Pakala', 37, 68000.00, 4),
(110, 'Lakshmi', 'Peddinti', 33, 58500.00, 2);

select * 
from staff;

select first_name, last_name, salary 
from staff 
where salary > 60000;

select * 
from staff 
where dept_id is null;

select * 
from staff 
order by age asc;

select count(*) as total_staff 
from staff;

select * 
from departments;

select * 
from departments 
where location in ('Bangalore','Chennai');

select * 
from departments 
where dept_name like 'M%';

select count(distinct location) as unique_locations 
from departments;

select * 
from departments 
order by dept_name asc;

select s.first_name, s.last_name, d.dept_name
from staff s
inner join departments d
on s.dept_id = d.dept_id;

select s.first_name, s.last_name, s.salary
from staff s
inner join departments d
on s.dept_id = d.dept_id
where d.dept_name = 'IT';

select s.first_name, s.last_name, d.dept_name
from staff s
left join departments d
on s.dept_id = d.dept_id;

select *
from staff
where dept_id is null;

select d.dept_name, s.first_name, s.last_name
from staff s
right join departments d
on s.dept_id = d.dept_id;

select d.*
from departments d
left join staff s
on d.dept_id = s.dept_id
where s.staff_id is null;

select d.dept_name, s.first_name, s.last_name
from staff s
right join departments d
on s.dept_id = d.dept_id;
