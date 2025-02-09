#include <stdio.h>
#include <stdlib.h>
int main()
{ system("cls");
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    if (num > 0)
    {
        printf("no. is Positive\n");
        if (num % 2 == 0)
        {
            printf("no. is even\n");
        }
        else
        {
            printf("no. is odd\n");
        }
    }
    else
    {
        printf("NO, IS NEGATIVE\n");
    }
    return 0;
}