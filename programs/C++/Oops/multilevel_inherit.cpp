#include <iostream>
using namespace std;

// Class A (Base Class)
// Takes input for length and breadth
class A {
protected:
    // Protected, so the child class (B) can access them
    int l, b,r;

public:
    void get_A() {
        cout << "Enter length (l): ";
        cin >> l;
        cout << "Enter breadth (b): ";
        cin >> b;
        cout << "\nEnter radius (r): ";
        cin >> r;
    }
};

// Class B (Derived Class)
// Inherits from A and calculates area
class B : public A {
public:
    void display_area() {
        int area = l * b; // Accessing l and b from parent class
        cout << "Area of Rectangle (l * b) is: " << area << endl;
    }
};

// Class C (A separate class for Circle)
class C:public B{
public:
    void display_circle_area() {
        // Using the formula PI * r^2
        float area = 3.14 * r * r;
        cout << "Area of Circle (PI * r * r) is: " << area << endl;
    }
};


int main() {
    cout << "--- Calculating Rectangle Area ---" << endl;
    // Creating object for Class B
    C rect;
    rect.get_A(); // This method is from the parent class (A)
    rect.display_area();   // This method is from its own class

    cout << "\n--- Calculating Circle Area ---" << endl;

    rect.display_circle_area();

    return 0;
}