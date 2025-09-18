import json

#open and load json file
with open("students.json", "r") as file:
    students = json.load(file)


# print all student names
print("All Students:")
for s in students:
    print("-", s["name"])


#calculate total & average marks for each student
print("\nMarks Summary:")
for s in students:
    total = sum(s["marks"].values())
    avg = total / len(s["marks"])
    print(f"{s['name']} -> Total: {total}, Average: {avg:.2f}")
