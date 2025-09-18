
import json

# open and load JSON file
with open("products.json", "r") as file:
    products = json.load(file)

# print all product names
print("Available Products:")
for p in products:
    print(f"- {p['name']} ({p['category']})")

 # calculate total inventory value ( price * stock )
print("\nInventory Value:")
for p in products:
    total_value = p["price"] * p["stock"]
    print(f"{p['name']} -> rs.{total_value}")

# find out-of-stock products ( if any )
out_of_stock = [p["name"] for p in products if p["stock"] == 0]
if out_of_stock:
    print("\nOut of Stock:", ", ".join(out_of_stock))
else:
    print("\nAll products are in stock.")
