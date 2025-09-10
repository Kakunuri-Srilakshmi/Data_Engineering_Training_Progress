use company_db
switched to db company_db

db.employees.insertMany([
  { first_name: "Amit", last_name: "Verma", age: 28, department: "IT", salary: 55000 },
  { first_name: "Sneha", last_name: "Reddy", age: 32, department: "HR", salary: 60000 },
  { first_name: "Ravi", last_name: "Sharma", age: 26, department: null, salary: 48000 }, 
  { first_name: "Pooja", last_name: "Iyer", age: 29, department: "Marketing", salary: 52000 },
  { first_name: "Arjun", last_name: "Mehta", age: 35, department: "IT", salary: 75000 },
  { first_name: "Divya", last_name: "Nair", age: 30, department: "Operations", salary: 50000 },
  { first_name: "Rahul", last_name: "Kapoor", age: 41, department: "IT", salary: 91000 },
  { first_name: "Priya", last_name: "Singh", age: 24, department: null, salary: 42000 }, 
  { first_name: "Vikram", last_name: "Rao", age: 37, department: "Marketing", salary: 68000 },
  { first_name: "Neha", last_name: "Kulkarni", age: 33, department: "HR", salary: 58500 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68c13c3d1379bc5f2d2930e3'),
    '1': ObjectId('68c13c3d1379bc5f2d2930e4'),
    '2': ObjectId('68c13c3d1379bc5f2d2930e5'),
    '3': ObjectId('68c13c3d1379bc5f2d2930e6'),
    '4': ObjectId('68c13c3d1379bc5f2d2930e7'),
    '5': ObjectId('68c13c3d1379bc5f2d2930e8'),
    '6': ObjectId('68c13c3d1379bc5f2d2930e9'),
    '7': ObjectId('68c13c3d1379bc5f2d2930ea'),
    '8': ObjectId('68c13c3d1379bc5f2d2930eb'),
    '9': ObjectId('68c13c3d1379bc5f2d2930ec')
  }
}
db.departments.insertMany([
  { dept_name: "IT", location: "Bangalore" },
  { dept_name: "HR", location: "Hyderabad" },
  { dept_name: "Finance", location: "Mumbai" },    
  { dept_name: "Marketing", location: "Delhi" },
  { dept_name: "Operations", location: "Chennai" },
  { dept_name: "R&D", location: "Pune" }            
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68c13c771379bc5f2d2930ed'),
    '1': ObjectId('68c13c771379bc5f2d2930ee'),
    '2': ObjectId('68c13c771379bc5f2d2930ef'),
    '3': ObjectId('68c13c771379bc5f2d2930f0'),
    '4': ObjectId('68c13c771379bc5f2d2930f1'),
    '5': ObjectId('68c13c771379bc5f2d2930f2')
  }
}
db.employees.find();
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e3'),
  first_name: 'Amit',
  last_name: 'Verma',
  age: 28,
  department: 'IT',
  salary: 55000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e4'),
  first_name: 'Sneha',
  last_name: 'Reddy',
  age: 32,
  department: 'HR',
  salary: 60000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e5'),
  first_name: 'Ravi',
  last_name: 'Sharma',
  age: 26,
  department: null,
  salary: 48000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e6'),
  first_name: 'Pooja',
  last_name: 'Iyer',
  age: 29,
  department: 'Marketing',
  salary: 52000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e7'),
  first_name: 'Arjun',
  last_name: 'Mehta',
  age: 35,
  department: 'IT',
  salary: 75000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e8'),
  first_name: 'Divya',
  last_name: 'Nair',
  age: 30,
  department: 'Operations',
  salary: 50000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e9'),
  first_name: 'Rahul',
  last_name: 'Kapoor',
  age: 41,
  department: 'IT',
  salary: 91000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930ea'),
  first_name: 'Priya',
  last_name: 'Singh',
  age: 24,
  department: null,
  salary: 42000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930eb'),
  first_name: 'Vikram',
  last_name: 'Rao',
  age: 37,
  department: 'Marketing',
  salary: 68000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930ec'),
  first_name: 'Neha',
  last_name: 'Kulkarni',
  age: 33,
  department: 'HR',
  salary: 58500
}
db.employees.find ( { salary: { $gt: 60000}});
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e7'),
  first_name: 'Arjun',
  last_name: 'Mehta',
  age: 35,
  department: 'IT',
  salary: 75000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e9'),
  first_name: 'Rahul',
  last_name: 'Kapoor',
  age: 41,
  department: 'IT',
  salary: 91000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930eb'),
  first_name: 'Vikram',
  last_name: 'Rao',
  age: 37,
  department: 'Marketing',
  salary: 68000
}
db.employees.find ( { department : null});
{
  _id: ObjectId('68c13c3d1379bc5f2d2930e5'),
  first_name: 'Ravi',
  last_name: 'Sharma',
  age: 26,
  department: null,
  salary: 48000
}
{
  _id: ObjectId('68c13c3d1379bc5f2d2930ea'),
  first_name: 'Priya',
  last_name: 'Singh',
  age: 24,
  department: null,
  salary: 42000
}
db.departments.find();
{
  _id: ObjectId('68c13c771379bc5f2d2930ed'),
  dept_name: 'IT',
  location: 'Bangalore'
}
{
  _id: ObjectId('68c13c771379bc5f2d2930ee'),
  dept_name: 'HR',
  location: 'Hyderabad'
}
{
  _id: ObjectId('68c13c771379bc5f2d2930ef'),
  dept_name: 'Finance',
  location: 'Mumbai'
}
{
  _id: ObjectId('68c13c771379bc5f2d2930f0'),
  dept_name: 'Marketing',
  location: 'Delhi'
}
{
  _id: ObjectId('68c13c771379bc5f2d2930f1'),
  dept_name: 'Operations',
  location: 'Chennai'
}
{
  _id: ObjectId('68c13c771379bc5f2d2930f2'),
  dept_name: 'R&D',
  location: 'Pune'
}
db.employees.updateOne({first_name:"Ravi", last_name: "Sharma"}, {$set : {department : "Finance"}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.employees.updateMany({ department: "IT"}, {$mul : {salary: 1.10}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
db.employees.deleteOne({ first_name: "Priya"}, { last_name: "Singh"});
{
  acknowledged: true,
  deletedCount: 1
}
db.employees.deleteMany({ department : null });
{
  acknowledged: true,
  deletedCount: 0
}
db.employees.aggregate([{$group : { _id:"$department", count:{$sum:1}}}]);
{
  _id: 'Finance',
  count: 1
}
{
  _id: 'IT',
  count: 3
}
{
  _id: 'HR',
  count: 2
}
{
  _id: 'Marketing',
  count: 2
}
{
  _id: 'Operations',
  count: 1
}
db.employees.aggregate([{$group : { _id:"$department", avgSalary:{$avg : "$salary"}}}]);
{
  _id: 'Marketing',
  avgSalary: 60000
}
{
  _id: 'IT',
  avgSalary: 81033.33333333334
}
{
  _id: 'HR',
  avgSalary: 59250
}
{
  _id: 'Finance',
  avgSalary: 48000
}
{
  _id: 'Operations',
  avgSalary: 50000
}
db.employees.aggregate([{$group : { _id:"$department", maxSalary:{$max : "$salary"}}}]);
{
  _id: 'Finance',
  maxSalary: 48000
}
{
  _id: 'HR',
  maxSalary: 60000
}
{
  _id: 'Operations',
  maxSalary: 50000
}
{
  _id: 'Marketing',
  maxSalary: 68000
}
{
  _id: 'IT',
  maxSalary: 100100.00000000001
}


