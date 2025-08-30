#include <stdio.h>
int main() {
    int n, temp, sum = 0, r;
    printf("Enter a number: ");
    scanf("%d", &n);
    temp = n;
    while (temp > 0) {
        r = temp % 10;
        sum += r * r * r;
        temp /= 10;
    }
    if (sum == n)
        printf("%d is a Armstrong number",n);
    else
        printf("Not an Armstrong number");
    return 0;
}
