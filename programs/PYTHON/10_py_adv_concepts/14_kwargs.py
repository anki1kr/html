def order_summary(*items, **details):
# def function(*args,**kwargs)
    print("Items ordered:", items)
    for key, value in details.items():
        print(f"{key}: {value}")

order_summary("Burger", "Fries", table=5, takeout=True)