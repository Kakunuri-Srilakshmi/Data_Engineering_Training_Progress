from typing import List, Dict, Tuple
from students_module import Student
from teachers_module import Teacher

def class_teacher_report(students: List[Student], teachers: List[Teacher]) -> List[Tuple[str, str, str]]:
    subject_to_teacher = {t.subject: t.name for t in teachers}
    report = []
    for s in students:
        top_sub = s.highest_subject()
        teacher_name = subject_to_teacher.get(top_sub, "No teacher found")
        report.append((s.name, top_sub, teacher_name))
    return report

def students_per_grade(students: List[Student]) -> Dict[str, int]:
    result = {}
    for s in students:
        result[s.grade] = result.get(s.grade, 0) + 1
    return result

def average_marks_per_subject(students: List[Student]) -> Dict[str, float]:
    totals, counts = {}, {}
    for s in students:
        for subj, mark in s.marks.items():
            totals[subj] = totals.get(subj, 0) + mark
            counts[subj] = counts.get(subj, 0) + 1
    return {subj: totals[subj] / counts[subj] for subj in totals}

def total_teacher_salary(teachers: List[Teacher]) -> float:
    return sum(t.salary for t in teachers)
