# Program to FIND LARGEST BETWEEN N NUMBERS without using a list

count = int(input('Enter the total number of values you want to compare: '))
# 4
# Take the first input as the initial largest number
largest = int(input('Enter number 1: '))

# Start comparing from the second input
for i in range(1, count):
    num = int(input(f'Enter number {i+1}: '))
    if num > largest:
        largest = num

print("The largest number is:", largest)
