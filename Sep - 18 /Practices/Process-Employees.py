import csv

with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)
    employees = list(reader)

print("Employees:")
for e in employees:
    print(f"{e['id']} - {e['name']} ({e['department']}) - rs.{e['salary']}")


salaries = [int(e["salary"]) for e in employees]
total_salary = sum(salaries)
average_salary = total_salary / len(salaries)
print(f"\nTotal Salary: rs.{total_salary}")
print(f"Average Salary: rs.{average_salary: .2f}")
