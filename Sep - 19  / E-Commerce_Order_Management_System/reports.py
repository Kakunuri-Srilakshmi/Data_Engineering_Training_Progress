def generate_sales_report(orders):
    total_revenue = sum(o.get_total() for o in orders)
    revenue_by_category = {}
    customer_spending = {}

    for o in orders:
        customer_spending[o.customer.name] = customer_spending.get(o.customer.name, 0) + o.get_total()
        for item in o.items:
            cat = item['product'].category
            revenue_by_category[cat] = revenue_by_category.get(cat, 0) + item['product'].price * item['qty']

    top_customer = max(customer_spending, key=customer_spending.get)

    print("\n--- Sales Report ---")
    print(f"Total Revenue: ₹{total_revenue}")
    print("Revenue by Category:", revenue_by_category)
    print(f"Top Customer: {top_customer} (₹{customer_spending[top_customer]})")

def generate_inventory_report(products):
    low_stock = [p.name for p in products.values() if p.stock < 5]
    avg_price = {}
    cat_count = {}

    for p in products.values():
        avg_price[p.category] = avg_price.get(p.category, 0) + p.price
        cat_count[p.category] = cat_count.get(p.category, 0) + 1

    for cat in avg_price:
        avg_price[cat] /= cat_count[cat]

    print("\n--- Inventory Report ---")
    print("Low Stock Products:", low_stock)
    print("Average Price by Category:", avg_price)
