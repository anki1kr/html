count = 0
with open('rex.txt', 'r') as f:
    data = f.read()
    print(data)

    # Remove square brackets if they exist
    data = data.replace('[', '').replace(']', '')

    nums = data.split(',')
    print(nums)
    for val in nums:
        try:
            if int(val.strip()) % 2 == 0:
                count += 1
        except ValueError:
            print(f"Skipping invalid input: {val}")

print(f"Total even numbers: {count}")
