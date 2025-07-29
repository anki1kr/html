# Program to take n sets of integers from the user and print their union and intersection.

# Take the number of sets from the user
n = int(input("Enter number of sets: "))

sets = []  # List to store all sets

# Loop to take input for each set
for i in range(n):
    # Take comma-separated input, split it, and convert to set
    s = set(input(f"Set {i+1} (comma-separated): ").split(','))
    sets.append(s)  # Add the set to the list

# Print the union of all sets
print("Union:", set.union(*sets))

# Print the intersection of all sets (if any sets exist)
print("Intersection:", set.intersection(*sets) if sets else "None")
