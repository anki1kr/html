#include <stdio.h>
int main()
{
    int num, fact = 1;
    printf("enter any integer number: ");
    scanf("%d", &num);
    // Calculate factorial of the entered integer
    for (int i = 1; i <= num; i++)
    {
        fact *=i;
    }
    printf("factorial of %d is : %d", num, fact);
    return 0;
}