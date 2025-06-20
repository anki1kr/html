#  class is a template for creating objects
#  object is an instance of a class
class employee:
    company="Google"

    def get_salary(self): # self is way to referemnce to object which which is created
        return 34000
# class 1 
e = employee() # an object is created 
print(e.get_salary()) # calling the method of the class
# class 2
e2 = employee()
print(e2.get_salary()) # accessing the class variable

print(e.company) # accessing the class variable

