
class Employee:

    def __init__(self,  name,salary, bond):
        self.salary = salary # Create an instance attribute of name salary and assign it with salary
        self.name = name
        self.bond = bond

    def get_info(self):
        print(f"\nThe name of the employee is {self.name}.\nSalary is {self.salary}.\nThe bond is for {self.bond} years")

e1 = Employee("REX",3400000,  4)
e1.get_info()
e2 = Employee("jhon",2500,2)
e2.get_info()
