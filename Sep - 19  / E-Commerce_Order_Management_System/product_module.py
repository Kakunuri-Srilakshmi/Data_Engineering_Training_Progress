class Product:
    def __init__(self, pid, name, category, price, stock):
        self.id = pid
        self.name = name
        self.category = category
        self.price = float(price)
        self.stock = int(stock)

    def update_stock(self, qty):
        if qty <= self.stock:
            self.stock -= qty
            return True
        else:
            return False

    def __str__(self):
        return f"{self.id}. {self.name} ({self.category}) - ₹{self.price}, Stock: {self.stock}"
