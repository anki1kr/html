rows = int(input('Enter the no. of rows= '))
for i in range(1, rows + 1):
    print(' ' * (rows - i) + '*' * (2 * i - 1))
   