
class Employee:

    def __init__(self, salary, name, bond):
        self.salary = salary # Create an instance attribute of name salary and assign it with salary
        self.name = name
        self.bond = bond

    def get_info(self):
        print(f"The name of the employee is {self.name}.\nSalary is {self.salary}.\nThe bond is for {self.bond} years")

e1 = Employee(3400000, "REX", 4)
e1.get_info()
e2 = Employee(2500,"jhon",2)
e2.get_info()
