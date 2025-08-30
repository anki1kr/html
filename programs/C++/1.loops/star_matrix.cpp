#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "enter n= ", cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int k = 0; k < n - i - 1; k++)
        {
            cout << " ";
        }
        for (int j = 0; j < i + 1; j++)
        {
            cout << "*";
        }
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }

        cout << endl;
    }
    for (int i = 0; i < n; i++)
    {
        for (int k = 0; k < i + 1; k++)
        {
            cout << " ";
        }
        for (int j = 1; j <= n - i - 1; j++)
        {
            cout << "*";
        }

        for (int j = 1; j < n - i - 1; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}
