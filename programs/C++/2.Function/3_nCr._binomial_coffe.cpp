#include<iostream>
using namespace std;
int fact(int n){
    if(n==0 or n==1)return 1;
    else return n * fact(n-1);
}

int nCr(int n,int r){
    int nmr=n-r;
    return fact(n)/(fact(r)*fact(nmr));
}


int main(){
int n,r;
cout<<"\nEnter  n: ",cin>>n;
cout<<"Enter  r: ",cin>>r;
cout<<"---Factorial of--- "<<endl;
cout<<n<<endl;
cout<<"  C"<<endl;
cout<<"   "<<r<<"  is =  "<<nCr(n,r)<<endl;

    return 0;
}

