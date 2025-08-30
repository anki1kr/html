#include <iostream>
using namespace std;

class A
{
public:
    bool isPrime(int n)
    {
        for (int i = 2; i * i <= n; i++)
        {
            if (n % i == 0)
                return false;
        }
        return n > 1;
    }
};

class B : public A
{
protected: 
    int num;

public:
    void getData()
    {
        cout << "Enter a number: ";
        cin >> num;
    }
    void PrintData()
    {
        for (int i = 2; i <= num; i++) 
        {
            if (isPrime(i)) 
            {
                cout << i << " ";
            }
        }
    }
};

int main()
{
    B p;
    p.getData();
    p.PrintData();
    return 0;
}