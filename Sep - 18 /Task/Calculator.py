# Define calculator class
class Calculator:
    def add(self, a, b):
        return a + b

    def sub(self, a, b):
        return a - b

    def mul(self, a, b):
        return a * b

    def div(self, a, b):
        return a / b

#create object of calculator
calc = Calculator()

#call methods
print("Addition:", calc.add(10,10))
print("Subtraction:", calc.sub(10,8))
print("Multiplication:", calc.mul(10,5))
print("Division:", calc.div(10,2))

