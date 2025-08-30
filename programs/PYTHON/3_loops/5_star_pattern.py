try:
    rows = int(input("Enter number of rows: "))
    count = 0
    for i in range(1, rows + 1):
        print("*" * i)
        count += i
    print(f"Total asterisks: {count}")
except Exception as e:
    print("Error:", e)
