#include <iostream>
using namespace std;
int reverse(int n)
{int rev = 0;
    while (n > 0)
    {int lastDigit = n % 10;
        rev = rev * 10 + lastDigit;
        n /= 10;
    }
    return rev;
}

int main()
{
    int n;
    cout<<"Enter a number: ",cin>>n;
    cout << "\nReverse of " << n << " is " << reverse(n) << "\n\n";

    return 0;
}
