# - map() applies a function to every item in a list and returns a new iterable with the results. Think of it as transforming or converting each element.


# it takes input from user for the list 
list_of_no = []
total_no = int(input("Total numbers to be entered: "))

for i in range(total_no):
    no_entered = int(input(f"Enter number {i+1}: "))
    list_of_no.append(no_entered)

print("You entered:", list_of_no)

square = lambda x: x * x

new = list(map(square,list_of_no))  
print(new)