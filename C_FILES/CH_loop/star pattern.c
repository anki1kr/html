#include <stdio.h>
#include <stdlib.h>

int main()
{
    system("cls"); // Clear the console screen (specific to Windows OS).

    int count = 0; // Initialize the count variable to zero.

    // Loop to control the number of rows.
    for (int i = 0; i < 3; i++) // ROWS
    {
        // Loop to control the number of asterisks in each row.
        for (int j = 0; j < 2 * i + 1; j++) // COLUMNS
        {
            printf("*"); // Print an asterisk.
            count++;     // Increment the count variable.
        }
        printf("\n"); // Move to the next line after each row.
    }

    printf("Total number of asterisks printed: %d\n", count); // Print the total count of asterisks.

    return 0; // Indicate that the program ended successfully.
}
