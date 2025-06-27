# - filter() applies a function that returns True or False to each item and keeps only the items where the result is True.

# def divisible_by_9(x):
#     if (x%9) == 0:
#         return True
#     else:
#         return False


a = []
n = int(input("How many no.: "))
for i in range(n):
    while True:
        try:
            num = int(input(f"Number {i+1} = "))
            a.append(num)
            break
        except ValueError:
            print("Please enter a valid integer.")
print(a)
    
divisible_by_9 = lambda x: x % 9 == 0
new = list(filter(divisible_by_9, a))
print(new)