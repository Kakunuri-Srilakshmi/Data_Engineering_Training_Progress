create database orders_db;
use orders_db;

create table customers(
  customer_id int primary key auto_increment,
  customer_name varchar(100) not null,
  city varchar(50)
);

create table orders(
  order_id int primary key auto_increment,
  product varchar(100),
  amount decimal(10,2),
  order_date date,
  customer_id int
);

insert into customers (customer_id, customer_name, city) values
(1, 'Rahul Sharma', 'Bangalore'),
(2, 'Priya Singh', 'Delhi'),
(3, 'Aman Kumar', 'Hyderabad'),
(4, 'Sneha Reddy', 'Chennai'),
(5, 'Arjun Mehta', 'Pune');

insert into orders (order_id, product, amount, order_date, customer_id) values
(101, 'Laptop', 55000.00, '2025-01-05', 1),
(102, 'Headphones', 3000.00, '2025-01-06', 2),
(103, 'Mobile Phone', 25000.00, '2025-01-06', 3),
(104, 'Keyboard', 1500.00, '2025-01-07', NULL),
(105, 'Monitor', 12000.00, '2025-01-07', 1),
(106, 'Tablet', 20000.00, '2025-01-09', 2);

select o.order_id, o.product, o.amount, o.order_date, c.customer_name
from orders o
inner join customers c
on o.customer_id = c.customer_id;

select o.order_id, o.product, o.amount, o.order_date, c.customer_name
from orders o
left join customers c
on o.customer_id = c.customer_id;

select c.customer_id, c.customer_name, c.city, o.order_id
from customers c
left join orders o
on c.customer_id = o.customer_id;

select customer_id, count(order_id) as total_orders
from orders
where customer_id is not null
group by customer_id;

select customer_id, sum(amount) as total_amount
from orders
where customer_id is not null
group by customer_id;

select *
from customers
where customer_id not in (select distinct customer_id from orders where customer_id is not null);

select *
from orders
where amount > 20000;

select avg(amount) as avg_order_amount
from orders;

select customer_id, max(amount) as max_order_amount
from orders
where customer_id is not null
group by customer_id;

select customer_id, max(order_date) as latest_order_date
from orders
where customer_id is not null
group by customer_id;
