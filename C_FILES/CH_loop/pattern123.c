#include <stdio.h>
#include <stdlib.h>

int main()
{
    system("cls");
    int a = 1;
    for (int i = 0; i <= 4; i++)
    {
        for (int j = 0; j < i; j++)
        {
            printf("%d", a);
            a++;
        }
        printf("\n");
    }
    return 0;
}