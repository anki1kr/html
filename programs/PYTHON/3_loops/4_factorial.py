num =int(input('Enter a number: '))
fact=0
# using for loop
# for i in range(1,num+1):
#     if fact == 0:
#         fact = i
#     else:
#         fact *= i

# using while loop
i=1
while i<= num:
    if fact == 0:
        fact = i
    else:
        fact *= i
    i += 1 # increment i by 1
    
# factorial upto 5 is 120
print(f'factorial upto {num} is {fact}')