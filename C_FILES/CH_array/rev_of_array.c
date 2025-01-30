#include <stdio.h>

// Function prototypes
void printArray(int a[], int n); // fn prototype

void reverse(int a[], int n);

int main()
{

    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int a[n];

    printf("Enter element:");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }

    printArray(a, n); // function call
    reverse(a, n);    // function call
    printArray(a, n); // function call

    return 0;
}

void printArray(int a[], int n)
{ // fn defination
    for (int i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }
    printf("\n");
}

void reverse(int a[], int n)
{ // fn defination
    for (int i = 0; i < n / 2; i++)
    {
        int temp = a[i];
        a[i] = a[n - i - 1];
        a[n - i - 1] = temp;
    }
}
