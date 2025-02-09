#include <iostream>
using namespace std;

int main()
{
    int sum = 0, n;
    cout << "Enter the number: ";
    cin >> n;

    // USING FOR LOOP
    for (int i = 1; i <= n; i++)
    {
        sum += i;
    }

    //USING WHILE LOOP
    int i = 1;
    while (i <= n)
    {
        sum += i;
        i++;
    }

    cout << sum;
    return 0;
}