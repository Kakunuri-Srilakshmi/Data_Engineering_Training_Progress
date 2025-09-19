class Customer:
    def __init__(self, name):
        self.name = name
        self.orders = []

    def add_order(self, order):
        self.orders.append(order)

    def __str__(self):
        return f"Customer: {self.name}, Orders: {len(self.orders)}"
