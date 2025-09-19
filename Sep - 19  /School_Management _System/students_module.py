import json
from typing import List, Dict

class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, id: int, name: str, age: int, grade: str, marks: Dict[str, int]):
        super().__init__(name, age)
        self.id = id
        self.grade = grade
        self.marks = marks

    def get_average(self) -> float:
        if not self.marks:
            return 0.0
        return sum(self.marks.values()) / len(self.marks)

    def highest_subject(self) -> str:
        if not self.marks:
            return ""
        return max(self.marks.items(), key=lambda x: x[1])[0]

    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "grade": self.grade,
            "marks": self.marks
        }

# Load students from JSON
def load_students(filepath: str) -> List[Student]:
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return [Student(**item) for item in data]

# Save students to JSON
def save_students(filepath: str, students: List[Student]) -> None:
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump([s.to_dict() for s in students], f, indent=2)

# Get next student ID
def get_next_student_id(students: List[Student]) -> int:
    if not students:
        return 1
    return max(s.id for s in students) + 1
