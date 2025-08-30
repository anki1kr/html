#include <iostream>
using namespace std;

// Searches by transvering each  element of the array
int linearSearch(int arr[], int size, int target)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == target)return i;
    }
    return -1;
}

int main()
{
    int target, n;
cout << "Enter the size of the array: ", cin >> n;

    int arr[n];

    for (int i = 0; i < n; i++)cout << "Enter element " << i+1 << ": ", cin >> arr[i];
    cout << "\nEnter the target element: ", cin >> target;

    int result = linearSearch(arr, n, target); // Function ko ek hi baar call kiya

    if (result == -1)cout << "Element not found." << endl;
    else cout << "Found at index: " << result << endl;

    return 0;
}