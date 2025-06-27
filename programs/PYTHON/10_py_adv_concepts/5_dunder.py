# dunder stands for double underscore
class employee:
    def __init__(self,name,salary):
        self.name= name
        self.salary = salary

    def __str__(self):
        return f"\nThe name of employee is {self.name}.\nand Salary is {self.salary}"
    
    def __repr__(self):
        return f"\nname = {self.name}.\n Salary = {self.salary}"
    
    def __len__(self):
        return  len(self.name)
    
e1 = employee("Rex",68477)

# print(e1.name, e1.salary)
# taking inpu by the usere for the list of employees
list_of_employees = []
no_of_employee = int(input("no. of employees: "))

for i in range(no_of_employee):
    print(f"\n for employee {i+1}:")
    name = input("Enter employee's name: ")
    salary = int(input("Enter employee's salary: "))

    e = employee(name, salary)
    list_of_employees.append(e)

for e in list_of_employees:
        print("The length of name is =",len(e))
        print(str(e))
        print(repr(e))
