import csv
import json
from product_module import Product
from customer_module import Customer
from order_module import Order
import reports

PRODUCT_FILE = "products.csv"
ORDER_FILE = "orders.json"

#  CSV Handling
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
                "id": p.id,
                "name": p.name,
                "category": p.category,
                "price": p.price,
                "stock": p.stock
            })

# JSON Handling 
def load_orders(filename):
    with open(filename, "r") as file:
        return json.load(file)

def save_orders(filename, orders):
    with open(filename, "w") as file:
        json.dump(orders, file, indent=2)

# Order Processing
def process_orders(products):
    raw_orders = load_orders(ORDER_FILE)
    orders = []
    for ro in raw_orders:
        customer = Customer(ro["customer"])
        items = []
        for it in ro["items"]:
            prod = products[it["product_id"]]
            qty = it["qty"]
            if prod.update_stock(qty):
                items.append({"product": prod, "qty": qty})
        order = Order(ro["order_id"], customer, items)
        customer.add_order(order)
        orders.append(order)
    return orders

# Menu 
def menu():
    products = load_products(PRODUCT_FILE)
    orders = process_orders(products)

    while True:
        print("\n--- E-Commerce System ---")
        print("1. View Products")
        print("2. View Orders")
        print("3. Generate Reports")
        print("4. Exit")

        choice = input("Enter choice: ")
        if choice == "1":
            for p in products.values():
                print(p)
        elif choice == "2":
            for o in orders:
                print(o)
        elif choice == "3":
            reports.generate_sales_report(orders)
            reports.generate_inventory_report(products)
        elif choice == "4":
            save_products(PRODUCT_FILE, products)
            print("Data saved. Exiting...")
            break
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    menu()
