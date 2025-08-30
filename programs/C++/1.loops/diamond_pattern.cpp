#include <iostream>
using namespace std;
int main()
{
    int n = 9;
    // top
    for (int i = 0; i < n; i++)
    { // left side
        for (int k = 0; k < n - i - 1; k++)
        {
            cout << " ";
        }
        cout << "*";
        if (i != 0) // right side
        {
            for (int j = 0; j < 2 * i - 1; j++)
            {
                cout << " ";
            }

            cout << "*";
        }
        cout << endl;
    }
    // bottom
    for (int i = 0; i < n - 1; i++)
    {
        for (int k = 0; k < i + 1; k++)
        { // left side
            cout << " ";
        }
        cout << "*";
        if (i != n - 2)
        {
            for (int j = 0; j < 2 * (n-i-2) -1; j++)
            {
                cout << " ";
            }

            cout << "*";
        }
        cout << endl;
    }
    return 0;
}
