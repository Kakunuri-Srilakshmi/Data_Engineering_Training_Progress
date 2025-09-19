class Order:
    def __init__(self, order_id, customer, items):
        self.order_id = order_id
        self.customer = customer
        self.items = items  # list of dict {product, qty}

    def get_total(self):
        return sum(item['product'].price * item['qty'] for item in self.items)

    def __str__(self):
        return f"Order {self.order_id} by {self.customer.name} | Total: ₹{self.get_total()}"
