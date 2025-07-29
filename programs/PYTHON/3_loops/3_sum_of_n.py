# sum of first n numbers using while
'''
      1+ 2   +3   +4+5 = 15
sum = n+ n+1 +n+2...
'''


input_num = int(input('Enter a number: '))

total = 0
# # using while loop
# i = 1
# while i <= input_num:
#     total += i
#     i += 1

# using for loop
for i in range (1,input_num+1):
    total += i

print(total)
   