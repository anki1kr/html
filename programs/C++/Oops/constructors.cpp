#include <iostream>
using namespace std;
class Teacher
{
private:
    double salary;

public:
    Teacher() { dept = "Computer Science"; }
    Teacher(string n, string d, string s, double sal)
    {
        name = n;
        dept = d;
        subject = s;
        salary = sal;
    }

    string name;
    string dept;
    string subject;
    void getInfo()
    {
        cout << "\nName is: " << name << endl;
        cout << "Department is: " << dept << endl;
        cout << "Subject is: " << subject << endl;
        cout << "Salary is: " << salary << endl<<endl;
    }
};

int main()
{
    Teacher t1("Rex", "Data Science", "Ai/ml", 350000);
    t1.getInfo();

    return 0;
}