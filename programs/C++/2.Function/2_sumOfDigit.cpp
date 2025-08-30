#include<iostream>
using namespace std;
int sumOfDigit(int n){
    int sum_of_digit = 0;
    while(n > 0){
        int last_digit = n % 10;
        n/=10;
        sum_of_digit += last_digit;
    }
return sum_of_digit;
}

int main(){
    int n;
    cout<<"Enter a number: ",cin>>n;
    cout<<"Sum of digits is: "<<sumOfDigit(n)<<endl;
    return 0;
}