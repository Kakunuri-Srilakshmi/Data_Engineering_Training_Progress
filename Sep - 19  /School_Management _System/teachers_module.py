import csv
from typing import List, Dict

class Person:
    def __init__(self, name: str, age: int = None):
        self.name = name
        self.age = age

class Teacher(Person):
    def __init__(self, id: int, name: str, subject: str, salary: float):
        super().__init__(name)
        self.id = id
        self.subject = subject
        self.salary = float(salary)

    def get_details(self) -> str:
        return f"ID: {self.id} | Name: {self.name} | Subject: {self.subject} | Salary: {self.salary}"

    def to_dict(self) -> Dict:
        return {"id": self.id, "name": self.name, "subject": self.subject, "salary": int(self.salary)}

# Load teachers from CSV
def load_teachers(filepath: str) -> List[Teacher]:
    teachers = []
    with open(filepath, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            teachers.append(Teacher(int(row['id']), row['name'], row['subject'], float(row['salary'])))
    return teachers

# Save teachers to CSV
def save_teachers(filepath: str, teachers: List[Teacher]) -> None:
    with open(filepath, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=['id', 'name', 'subject', 'salary'])
        writer.writeheader()
        for t in teachers:
            writer.writerow(t.to_dict())

# Get next teacher ID
def get_next_teacher_id(teachers: List[Teacher]) -> int:
    if not teachers:
        return 1
    return max(t.id for t in teachers) + 1
