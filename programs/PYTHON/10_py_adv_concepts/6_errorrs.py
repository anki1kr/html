# try and except are use to handle error 
# when there is error in 'try' stmt it transfers control to 'except'

# while True:
#     try:
#         a = int(input("Enter first number: "))
#         b = int(input("Enter second number: "))
#         print(a + b)
#     except ValueError:
#         print("Please don'perform bad typecast")
#     except ZeroDivisionError:
#         print("don't divide by 0")
    
#     except Exception as e:
#         print("unknown  error occured",e)

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

if b == 0:
    raise ValueError("Please don't divide by 0")
print(f"the division is by {a/b}")