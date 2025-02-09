#include<stdio.h>
#include<stdlib.h>
int main()
{
    // Clear the console screen
    system("cls");

    // Initialize an array with 10 integer elements
    int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // Print the array elements
    printf("Array elements are: ");
    for (int i = 0; i < 10; i++)
    {
        printf("%d", a[i]);
        if (i < 9) {
            printf(", ");
        }
    }
    printf("\n");

    // Return 0 to indicate successful execution
    return 0;
}
