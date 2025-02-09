#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "enter the termns upto: ";
    cin >> n;
    int sum = 0;
    // for (int i = 1; i <= n; i +=2)
    // {
    //     cout << i<<"\t";
    //     sum += i;
    // }
    int i = 2;
    while (i <= n)
    {
        cout << i << "\t";
        sum += i;
        i += 2;
    }
    cout << endl
         << "=" << sum <<endl;

    return 0;
}