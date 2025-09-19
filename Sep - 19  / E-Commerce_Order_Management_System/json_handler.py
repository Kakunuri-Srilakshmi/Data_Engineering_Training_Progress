import json

def load_orders(filename):
    with open(filename, "r") as file:
        return json.load(file)

def save_orders(filename, orders):
    with open(filename, "w") as file:
        json.dump(orders, file, indent=2)
