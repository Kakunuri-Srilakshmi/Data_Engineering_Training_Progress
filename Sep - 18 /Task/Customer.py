# Define a simple class
class Customer :
    def __init__(self, first_name, last_name):  #constructor
        self.first_name = first_name
        self.last_name = last_name

    def greet(self):  #method
        return f"Hello, My name is {self.first_name} {self.last_name}"

#create objects of the class

c1 = Customer("Sri", "Lakshmi")
c2 = Customer("Ayyal", "Reddy")

#call methods
print(c1.greet())
print(c2.greet())
