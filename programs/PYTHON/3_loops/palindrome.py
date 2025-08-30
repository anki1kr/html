# Variables to store the number, remainder, and result
n = r = num = res = 0

# Prompt the user to enter a number
num = int(input("Enter the number: "))

# Store the original number for later comparison
n = num
res = 0  # Initialize the result

# Reverse the number
while n > 0:
    r = n % 10  # Get the last digit of the number
    res = res * 10 + r  # Append the digit to the reversed number
    n = n // 10  # Remove the last digit from the number

# Output the reversed number
print(f"Reverse of {num} is {res}")

# Check if the original number is a palindrome
if num == res:
    print(f"{num} is a palindrome number")
else:
    print(f"{num} is not a palindrome number")