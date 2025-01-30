#include <stdio.h>
#include <stdlib.h>
int sum(int, int); // fn PROTOTYPE
int main()
{
    system("cls");

    int a = 10, b = 5;
    int s = sum(a, b); // FUNCTION CALL
    printf("%d\n", s);

    int a1 = 5, b2 = 15;
    int s1 = sum(a1, b2); // FUNCTION CALL
    printf(" %d\n", s1);

    int c = 11, d = 5;
    int s2 = sum(c, d); // FUNCTION CALL
    printf(" %d\n", s2);
    return 0;
}

// FUNCTION DEFINATION
int sum(int a, int b)
{
    return a + b;
}