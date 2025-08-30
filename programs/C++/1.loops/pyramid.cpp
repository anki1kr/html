#include<iostream>
using namespace std;
int main(){
    int n=4;
    for(int i=0;i<n;i++){
        // spaces
        for(int k=0;k<n-i-1;k++){
            cout<<" ";
        
        }
        // 1st trainage
        for(int j=1;j<i+1;j++){
            cout<<j;
        }
        // 2nd trainage
        for(int j=i+1;j>0;j--){
            cout<<j;
        }
        cout<<endl;
    }
    return 0;
} // namespace std;
