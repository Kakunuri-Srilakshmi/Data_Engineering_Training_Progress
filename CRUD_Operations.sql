create database student_db;
use student_db;
create table students (
id int primary key auto_increment,
name varchar(100) not null,
age int,
course varchar(50)
);

insert into students (name, age, course)
values('sri',24,'Data Engineering'),
('Lakshmi',28,'Data Analyst'),
('Rahul',26,'AI');

select * from students;

select name , course from students
where age>21;

update students set course = 'ML' where id = 2;

delete from students where id = 3;
