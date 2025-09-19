from students_module import load_students, save_students, Student, get_next_student_id
from teachers_module import load_teachers, save_teachers, Teacher, get_next_teacher_id
from reports import class_teacher_report, students_per_grade, average_marks_per_subject, total_teacher_salary

STUDENTS_FILE = 'students.json'
TEACHERS_FILE = 'teachers.csv'

def print_students(students):
    print("\nStudents:")
    for s in students:
        print(f"ID: {s.id} | Name: {s.name} | Age: {s.age} | Grade: {s.grade} | Average: {s.get_average():.2f}")

def print_teachers(teachers):
    print("\nTeachers:")
    for t in teachers:
        print(t.get_details())

def add_student(students):
    next_id = get_next_student_id(students)
    name = input("Enter student name: ")
    age = int(input("Enter age: "))
    grade = input("Enter grade: ")
    marks = {}
    print("Enter marks (leave subject blank to stop):")
    while True:
        subj = input(" Subject: ").strip()
        if not subj:
            break
        marks[subj] = int(input(f" Marks in {subj}: "))
    s = Student(next_id, name, age, grade, marks)
    students.append(s)
    save_students(STUDENTS_FILE, students)
    print("Student added.")

def add_teacher(teachers):
    next_id = get_next_teacher_id(teachers)
    name = input("Enter teacher name: ")
    subject = input("Enter subject: ")
    salary = float(input("Enter salary: "))
    t = Teacher(next_id, name, subject, salary)
    teachers.append(t)
    save_teachers(TEACHERS_FILE, teachers)
    print("Teacher added.")

def generate_reports(students, teachers):
    print("\n-- Class Teacher Report --")
    for student_name, top_sub, teacher_name in class_teacher_report(students, teachers):
        print(f"{student_name} -> Top Subject: {top_sub} -> Class Teacher: {teacher_name}")

    print("\n-- Summary --")
    print("Students per grade:", students_per_grade(students))
    print("Average marks per subject:", average_marks_per_subject(students))
    print("Total salary spent on teachers:", total_teacher_salary(teachers))

def main():
    students = load_students(STUDENTS_FILE)
    teachers = load_teachers(TEACHERS_FILE)

    while True:
        print("\n=== School Management Menu ===")
        print("1. View all students")
        print("2. View all teachers")
        print("3. Add a new student")
        print("4. Add a new teacher")
        print("5. Generate reports")
        print("6. Exit")
        choice = input("Enter choice (1-6): ")

        if choice == "1":
            print_students(students)
        elif choice == "2":
            print_teachers(teachers)
        elif choice == "3":
            add_student(students)
        elif choice == "4":
            add_teacher(teachers)
        elif choice == "5":
            generate_reports(students, teachers)
        elif choice == "6":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()
