#include <stdio.h>

int add(int, int); // Function prototype

int main() {
    int result = add(5, 10);
    printf("Sum: %d", result);
    return 0;
}

int add(int a, int b) {
    return a + b;
}