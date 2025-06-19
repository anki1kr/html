'''
0 1 1 2 3 5 8 

fib(0) = 0
fib(1) = 1
fib(2) = fib(0) + fib(1)
fib(3)=fib(1) + fib(2)
fib(4)=fib(2)+ fib(3)
fib(n) = fib(n-2) + fib(n-1)
'''
def fib(n):
# Base case of recursion
    if(n == 0 or n == 1):
        return n
    return fib(n-2) + fib(n-1)


for i in range(0, 9):
    print(fib(i), end="\t")
# The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
