#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    // Clear the console (Windows)
    system("cls");

    int n, i,found = 0;
    char key[100];
    char arr[n][100];
    printf("Enter the number of strings: ");
    scanf("%d", &n);
    printf("Enter %d strings:\n", n);
    for (i = 0; i < n; i++)
        fgets(arr, sizeof(arr), stdin); 
    
    printf("Enter the string to search: ");
    fgets(key, sizeof(key), stdin);
for (i = 0; i < n; i++)
    {
        if (strcmp(arr[i], key) == 0)
        { // strcmp returns 0 if strings are equal
            found = 1;
            break;
        }
    }

    // Output the result of the search
    if (found)
    {
        printf("\"%s\" is found at index %d\n", key, i);
    }
    else
    {
        printf("\"%s\" is not found\n", key);
    }

    return 0;
}
