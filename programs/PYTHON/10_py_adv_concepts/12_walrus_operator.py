# def function():
#     print("something.......")
#     print("something.......")
#     return 7

# # a = function()
# if (a:=function())>10:
#     print(a)

# else:
#     print("a is not greater than 10")

while (data:= input("\nEnter some data: ")):
    print(f"You entered: {data}")
# The loop will continue until the user enters an empty string

    if data == "exit":
        print("Exiting the loop.")
        break