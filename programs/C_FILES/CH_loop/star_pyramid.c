#include <stdio.h>

int main() {
    int i, j,space,rows,count=0;
    printf("Enter the no. of rows = ");
    scanf("%d",&rows);
    
    int k =space;
    for (i = 1; i <= rows; i++) {
        
        for (k= 1; k <= rows - i; k++)
            printf(" ");
            
        for (j = 1; j <= 2 * i - 1; j++)
            printf("*");

        printf("\n");
    }
    return 0;
}


