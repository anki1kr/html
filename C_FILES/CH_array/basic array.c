
#include <stdio.h>
#include <stdlib.h>
int main()
{
    system("cls");
    // Declare and initialize an array of integers
    int numbers[] = {10, 20, 30, 40, 50};
    // Calculate the size of the array
    int size = sizeof(numbers) / sizeof(numbers[0]);

    // Print each element of the array
    for (int i = 0; i < size; i++) {
        printf("Element at index %d: %d\n", i, numbers[i]);
    }

    return 0;
}