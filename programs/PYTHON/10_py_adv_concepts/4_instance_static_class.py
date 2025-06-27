class employee:
    company = "HP"
    def __init__(self,name,salary):
        self.name = name
        self.salary = salary

#  This is an instance methodthod(default)
    def info(self):
        print(f"THe name of {self.name} and the salary is {self.salary}")
#   this is a static method  
    @staticmethod
    def sum(a,b):
        return a+b
# this is a class method
    @classmethod
    def print_company(cls):
        print(cls.company)

    @classmethod
    def change_company(cls,new_company):
        cls.company = new_company



e1 = employee("micheal",7389)
e2 = employee("Judas",6545)

# e1.info()
# print(e1.sum(3,3))

# class method try either this
# e1.print_company()
# e1.change_company("SAMSUNG")
# e1.print_company()

# or
print(employee.company)
e1.change_company("ACER")
print(employee.company)