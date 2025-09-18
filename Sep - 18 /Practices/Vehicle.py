# Parent Class

class Vehicle :
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display_info(self):
        return f"Vehicle: {self.brand} {self.model}"

#child class inheriting from vehicle
class Car(Vehicle):
    def __init__(self, brand, model, doors):
        #call parent constructor
        super().__init__(brand, model)#call parent const using keyword super
        self.doors = doors

    def display_info(self):
        #extend parent behavior
        return f"Car:{self.brand} {self.model}, Doors: {self.doors}"
#create objects of the class
v1=Vehicle("Tata","Truck")
c1=Car("Hyundai", "i20", 4)

#call methods
print(v1.display_info())
print(c1.display_info())

