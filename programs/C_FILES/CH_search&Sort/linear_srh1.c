#include <stdio.h>
#include <stdlib.h>

int main() {
    // Clear the console screen
    system("cls");

    int key, i, n;

    // Prompt user for the size of the array
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    // Declare the array with size n
    int a[n];

    // Prompt user to enter the elements of the array
    printf("Enter the elements of the array:\n");
    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    // Prompt user to enter the element to search for
    printf("Enter the element to search: ");
    scanf("%d", &key);

    int found = 0;
    // Perform linear search for the key in the array
    for (i = 0; i < n; i++) {
        if (a[i] == key) {
            found = 1;
            break;
        }
    }

    // Output the result of the search
    if (found) {
        printf("%d is found at index %d\n", key, i);
    } else {
        printf("%d is not found\n", key);
    }

    return 0;
}
