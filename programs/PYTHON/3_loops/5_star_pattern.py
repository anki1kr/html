count=0 # Initialize the count variable to zero.
try:
    rows=int(input('Enter the number of rows: '))
        # Loop to control the number of rows.
    for i in range(1,rows+1): # ROWS
        for j in range(1,i+1): # COLUMNS
            print("*",end='') # Print an asterisk.
            count+=1     # Increment the count variable.
        print() # Move to the next line after each row.

    print(f"Total number of asterisks printed: {count}\n")# Print the total count of asterisks.

except Exception as e:
    print('Input integers only,Error occured is:',e)