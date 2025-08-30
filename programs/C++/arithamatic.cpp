#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cout << "Enter two integer numbers (separated by a space): ";
    cin >> a >> b;

   
    cout << "\nSum of two numbers = " << a + b
         << "\nDifference of two numbers = " << a - b
         << "\nProduct of two numbers = " << a * b;

    // For predictable errors, a simple if/else is shorter and clearer than try/catch.
    if (b == 0) {
        cerr << "\nError: Cannot divide or perform modulo by zero." << endl;
        return 1; // Exit with a non-zero code to indicate failure.
    } else {
        cout << "\nDivision of two numbers = " << a / b
             << "\nModulo of two numbers = " << a % b << endl;
    }
    return 0; 
}