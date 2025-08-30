#include <iostream>
using namespace std;

bool isPrime(int n) {
    for (int i = 2; i * i <= n; i++) {
        // If n is divisible by i, it is not prime
        if (n % i == 0) return false;
    }
    // A prime number is greater than 1 and not divisible by any number other than 1 and itself
    return n > 1;
}

int main() {
    int n;
    cout << "Enter a number: ",cin >> n;
    for (int i = 2; i <= n; i++)
        if (isPrime(i)) cout << i << " ";
        
    return 0;
}
