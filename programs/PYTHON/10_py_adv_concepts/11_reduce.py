# This adds up all the numbers in the list. You’ll find reduce() in the functools module, and it’s great for tasks like summing, multiplying, or combining values into one.

from functools import reduce

numbers = [1,2,3,4,5,6]
#          [3,3,4,5,6]
#          [6,4,5,6]
#          [10,5,6]
#          [15,6]
#          [21] as output
        
        
print("Original list",numbers)

sum = lambda a,b : a+b
print("Reduced list: ",reduce(sum, numbers))