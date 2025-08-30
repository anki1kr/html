#include<iostream>
using namespace std;
int fib(int n){
        if(n == 0) return 0;
        if(n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

int main(){
    int n;
    cout<<"\n\nEnter a number: ",cin>>n;
cout<<"---Fibonacci Series---"<<endl;
    for(int i = 0; i <= n-1;i++){
        cout<<fib(i)<<" ";
    }
cout<<endl;

return 0;
}
