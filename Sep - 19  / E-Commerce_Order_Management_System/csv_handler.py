import csv
from product_module import Product

def load_products(filename):
    products = {}
    with open(filename, newline="") as file:
        reader = csv.DictReader(file)
        for row in reader:
            prod = Product(row['id'], row['name'], row['category'], row['price'], row['stock'])
            products[int(row['id'])] = prod
    return products

def save_products(filename, products):
    with open(filename, "w", newline="") as file:
        fieldnames = ["id", "name", "category", "price", "stock"]
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        for p in products.values():
            writer.writerow({
                "id": p.id, "name": p.name,
                "category": p.category, "price": p.price,
                "stock": p.stock
            })
