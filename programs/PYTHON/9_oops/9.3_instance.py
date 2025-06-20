class emp:
    company = "samsung" #this is a class variable

    def __init__(self,salary,name,age,company):
        self.salary = salary
        self.name = name
        self.age = age
        self.company = company

    def get_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Salary: {self.salary}, Company: {self.company}")


e1 = emp(1000,"sam",24,"asus") # this is an instance variable
print(e1.company)
print(emp.company)  # Accessing class variable through class name     

