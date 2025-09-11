use universityDB
switched to db universityDB
db.students.insertMany([
  { _id: 1, name: "Rahul Sharma", age: 21, email: "rahul@example.com", city: "Bangalore" },
  { _id: 2, name: "Priya Singh", age: 22, email: "priya@example.com", city: "Delhi" },
  { _id: 3, name: "Aman Kumar", age: 20, email: "aman@example.com", city: "Hyderabad" },
  { _id: 4, name: "Sneha Reddy", age: 23, email: "sneha@example.com", city: "Chennai" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4
  }
}
db.courses.insertMany([
  { _id: 101, title: "Database Systems", department: "CS", credits: 4 },
  { _id: 102, title: "Data Structures", department: "CS", credits: 3 },
  { _id: 103, title: "Economics 101", department: "Economics", credits: 2 },
  { _id: 104, title: "Operating Systems", department: "CS", credits: 4 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': 101,
    '1': 102,
    '2': 103,
    '3': 104
  }
}
db.enrollments.insertMany([
  { student_id: 1, course_id: 101, grade: "A" },
  { student_id: 1, course_id: 103, grade: "B" },
  { student_id: 2, course_id: 101, grade: "A" },
  { student_id: 3, course_id: 102, grade: "C" },
  { student_id: 4, course_id: 104, grade: "B" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68c29a2414eb1b2ae21d65c1'),
    '1': ObjectId('68c29a2414eb1b2ae21d65c2'),
    '2': ObjectId('68c29a2414eb1b2ae21d65c3'),
    '3': ObjectId('68c29a2414eb1b2ae21d65c4'),
    '4': ObjectId('68c29a2414eb1b2ae21d65c5')
  }
}
db.students.insertOne({
  _id: 5,
  name: "Kiran Patel",
  age: 21,
  email: "kiran@example.com",
  city: "Mumbai"
})
{
  acknowledged: true,
  insertedId: 5
}
db.students.find({ city: "Delhi" })
{
  _id: 2,
  name: 'Priya Singh',
  age: 22,
  email: 'priya@example.com',
  city: 'Delhi'
}
db.students.updateOne(
  { name: "Aman Kumar" },
  { $set: { email: "aman.kumar@example.com" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.students.deleteOne({ name: "Sneha Reddy" })
{
  acknowledged: true,
  deletedCount: 1
}
db.students.createIndex({ email: 1 }, { unique: true })
email_1
db.courses.createIndex({ department: 1, credits: -1 })
department_1_credits_-1
db.students.getIndexes()
db.courses.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  {
    v: 2,
    key: { department: 1, credits: -1 },
    name: 'department_1_credits_-1'
  }
]
db.courses.find({ department: "CS" }).sort({ credits: -1 })
{
  _id: 101,
  title: 'Database Systems',
  department: 'CS',
  credits: 4
}
{
  _id: 104,
  title: 'Operating Systems',
  department: 'CS',
  credits: 4
}
{
  _id: 102,
  title: 'Data Structures',
  department: 'CS',
  credits: 3
}
db.courses.find({ title: "Economics 101" })
{
  _id: 103,
  title: 'Economics 101',
  department: 'Economics',
  credits: 2
}
db.enrollments.aggregate([
  { $group: { _id: "$course_id", total_students: { $sum: 1 } } }
])
{
  _id: 101,
  total_students: 2
}
{
  _id: 104,
  total_students: 1
}
{
  _id: 102,
  total_students: 1
}
{
  _id: 103,
  total_students: 1
}
db.students.aggregate([
  { $group: { _id: "$city", avg_age: { $avg: "$age" } } }
])
{
  _id: 'Bangalore',
  avg_age: 21
}
{
  _id: 'Hyderabad',
  avg_age: 20
}
{
  _id: 'Mumbai',
  avg_age: 21
}
{
  _id: 'Delhi',
  avg_age: 22
}
db.courses.aggregate([
  { $match: { department: "CS" } },
  { $sort: { credits: -1 } },
  { $limit: 1 }
])
{
  _id: 101,
  title: 'Database Systems',
  department: 'CS',
  credits: 4
}
db.enrollments.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "student_id",
      foreignField: "_id",
      as: "student_info"
    }
  }
])
{
  _id: ObjectId('68c29a2414eb1b2ae21d65c1'),
  student_id: 1,
  course_id: 101,
  grade: 'A',
  student_info: [
    {
      _id: 1,
      name: 'Rahul Sharma',
      age: 21,
      email: 'rahul@example.com',
      city: 'Bangalore'
    }
  ]
}
{
  _id: ObjectId('68c29a2414eb1b2ae21d65c2'),
  student_id: 1,
  course_id: 103,
  grade: 'B',
  student_info: [
    {
      _id: 1,
      name: 'Rahul Sharma',
      age: 21,
      email: 'rahul@example.com',
      city: 'Bangalore'
    }
  ]
}
{
  _id: ObjectId('68c29a2414eb1b2ae21d65c3'),
  student_id: 2,
  course_id: 101,
  grade: 'A',
  student_info: [
    {
      _id: 2,
      name: 'Priya Singh',
      age: 22,
      email: 'priya@example.com',
      city: 'Delhi'
    }
  ]
}
{
  _id: ObjectId('68c29a2414eb1b2ae21d65c4'),
  student_id: 3,
  course_id: 102,
  grade: 'C',
  student_info: [
    {
      _id: 3,
      name: 'Aman Kumar',
      age: 20,
      email: 'aman.kumar@example.com',
      city: 'Hyderabad'
    }
  ]
}
{
  _id: ObjectId('68c29a2414eb1b2ae21d65c5'),
  student_id: 4,
  course_id: 104,
  grade: 'B',
  student_info: []
}
db.students.aggregate([
  {
    $lookup: {
      from: "enrollments",
      localField: "_id",
      foreignField: "student_id",
      as: "enrollment_info"
    }
  },
  {
    $lookup: {
      from: "courses",
      localField: "enrollment_info.course_id",
      foreignField: "_id",
      as: "courses_enrolled"
    }
  }
])
{
  _id: 1,
  name: 'Rahul Sharma',
  age: 21,
  email: 'rahul@example.com',
  city: 'Bangalore',
  enrollment_info: [
    {
      _id: ObjectId('68c29a2414eb1b2ae21d65c1'),
      student_id: 1,
      course_id: 101,
      grade: 'A'
    },
    {
      _id: ObjectId('68c29a2414eb1b2ae21d65c2'),
      student_id: 1,
      course_id: 103,
      grade: 'B'
    }
  ],
  courses_enrolled: [
    {
      _id: 101,
      title: 'Database Systems',
      department: 'CS',
      credits: 4
    },
    {
      _id: 103,
      title: 'Economics 101',
      department: 'Economics',
      credits: 2
    }
  ]
}
{
  _id: 2,
  name: 'Priya Singh',
  age: 22,
  email: 'priya@example.com',
  city: 'Delhi',
  enrollment_info: [
    {
      _id: ObjectId('68c29a2414eb1b2ae21d65c3'),
      student_id: 2,
      course_id: 101,
      grade: 'A'
    }
  ],
  courses_enrolled: [
    {
      _id: 101,
      title: 'Database Systems',
      department: 'CS',
      credits: 4
    }
  ]
}
{
  _id: 3,
  name: 'Aman Kumar',
  age: 20,
  email: 'aman.kumar@example.com',
  city: 'Hyderabad',
  enrollment_info: [
    {
      _id: ObjectId('68c29a2414eb1b2ae21d65c4'),
      student_id: 3,
      course_id: 102,
      grade: 'C'
    }
  ],
  courses_enrolled: [
    {
      _id: 102,
      title: 'Data Structures',
      department: 'CS',
      credits: 3
    }
  ]
}
{
  _id: 5,
  name: 'Kiran Patel',
  age: 21,
  email: 'kiran@example.com',
  city: 'Mumbai',
  enrollment_info: [],
  courses_enrolled: []
}
db.enrollments.aggregate([
  { $match: { grade: "A" } },
  { $count: "total_A_students" }
])
{
  total_A_students: 2
}


