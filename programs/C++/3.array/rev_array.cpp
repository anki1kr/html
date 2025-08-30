#include<iostream>
using namespace std;
void reverseArray(int arr[],int size){
int start=0,end=size-1;
    while(start<end){
        swap(arr[start],arr[end]);
        start++;end--;
    }
}
int main(){int size;
    cout<<"\nEnter the size of array: ",cin>>size;
    int arr[size];
    for(int i=0;i<size;i++){
        cout<<"Enter the element "<<i+1<<": ",cin>>arr[i];
    }

reverseArray(arr,size);
cout<<"\nReversed array: ";
for(int j=0;j<size;j++)cout<<arr[j]<<" ";
    return 0;
}
//Time Complexity: O(n)
//Space Complexity: O(1)