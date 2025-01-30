#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num, fact = 1;
    printf("enter any integer=");
    scanf("%d", &num);
    
    // Calculate factorial of the entered integer
    for (int i = 1; i <= num; i++)
    {
        fact = fact * i;
    }
    
    // Output the factorial result
    printf("factorial of %d is =%d", num, fact);
    return 0;
}