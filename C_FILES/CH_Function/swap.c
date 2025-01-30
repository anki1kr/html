#include <stdio.h>
#include <stdlib.h>
void swap(int *, int *);

int main()
{
    system("cls"); // Clear the console screen (specific to Windows OS).
    int a = 4, b = 6;
    swap(&a, &b); // Swap the values of a and b using their memory addresses.
    printf("the value of a is %d and b is %d", a, b); // Print the swapped values of a and b.
    return 0; // Indicate that the program ended successfully.
}

void swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}