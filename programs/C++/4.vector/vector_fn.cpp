#include <iostream> // For input and output operations
#include <vector>   // To use the vector container
using namespace std;

int main()
{
    // Initialize a vector of integers with values 1, 2, 3, 4
    vector<int> vec = {1, 2, 3, 4};

    // Add 6 to the end of the vector
    vec.push_back(6);

    // Add 5 to the end of the vector
    vec.push_back(5);

    // Remove the last element (which is 5)
    vec.pop_back();

    // Print all elements of the vector using a range-based for loop
    for (int val : vec)
    {
        cout << val << " "; // Output each value followed by a space
    }

    // Access and print the element at index 2 (third element)
    cout << vec.at(2) << endl;

    return 0;
}