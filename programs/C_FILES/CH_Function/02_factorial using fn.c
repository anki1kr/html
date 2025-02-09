#include <stdio.h>

int fact(int); // fn PROTOTYPE

int main()
{
  
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num < 0)
    {
        printf("Factorial of a negative number is not defined.\n");
    }
    else
    {
        printf("Factorial of %d is %d.\n", num, fact(num)); // function call
    }

    return 0;
}

// function to calculate factorial
int fact(int n) // FUNCTION DEFINATION
{
    if (n == 0)
    {
        return 0; // Base case: factorial of 0 
    }
    else if (n == 1)
    {
        return 1; // Base case: factorial of  1 is 1
    }
    else
    {
        return fact(n - 1) * n; // Recursive case
    }
}
