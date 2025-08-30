#include <iostream>
using namespace std;
int main()
{
    int n;cout << "enter the no. of rows :", cin >> n;
    char ch = 'A';
    for (int i = 0; i < n; i++)
    {
        for (int j = 1; j < i + 1; j++)
        {
            cout <<" ";
        }
        for (int j = 0; j < n - i; j++)
        {
            cout << ch;
        }
        cout << endl;
        ch++;
    }
}
