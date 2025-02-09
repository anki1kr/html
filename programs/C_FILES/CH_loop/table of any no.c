#include <stdio.h>
#include <stdlib.h>

int main()
{
    system("cls"); // Clear the console screen.
    int n; // Variable to store the user-input number.
    printf("Enter a number to generate its table: ");
    scanf("%d", &n); // Read the number from user input.

    // Loop to generate and print the multiplication table for the number 'n'.
    for (int i = 1; i <= 10; i++)
    {
        printf("%d\n", n * i); // Print each line of the multiplication table.
    }

    return 0; // Indicate that the program ended successfully.
}
