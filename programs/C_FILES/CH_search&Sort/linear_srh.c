
#include <stdio.h>

int linearSearch(int arr[], int n, int target);

int main()
{
    int arr[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    int n = 10,target,i;

    printf("Enter the element to be searched: ");
    scanf("%d", &target);

    int result = linearSearch(arr, n, target);
    if (result == i) {
        printf("Element found at index: %d\n", result);
    } else {
        printf("Element not found in the array.\n");
    }

    return 0;
}

int linearSearch(int arr[], int n, int target) {
    for ( i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}