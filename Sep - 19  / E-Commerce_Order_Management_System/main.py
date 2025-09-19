from csv_handler import load_products, save_products
from json_handler import load_orders, save_orders
from product_module import Product
from customer_module import Customer
from order_module import Order
import reports

PRODUCT_FILE = "products.csv"
ORDER_FILE = "orders.json"

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
