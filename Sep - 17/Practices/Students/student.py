# Define a simple class
class Student :
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, My name is {self.name} and I am {self.age} years old."

#create objects of the class

s1=Student("Rahul",21)
s2 = Student( "Priya", 22)

#call methods
print(s1.greet())
print(s2.greet())
