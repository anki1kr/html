def factorial(n):
    if n < 0:
        return "Factorial is not defined for negative numbers."
    elif n == 0 or n == 1:
        return f"The factorial of {n} is 1"
    else:
        fact = 1
        for i in range(2, n + 1):
            fact *= i
        return f"The factorial of {n} is {fact}"

# Test cases
print(factorial(-5))  # Negative input
print(factorial(0))   # Special case
print(factorial(1))   # Special case
print(factorial(5))   # Normal case

