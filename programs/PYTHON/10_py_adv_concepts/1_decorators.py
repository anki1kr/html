#decorators are functions that modify the behavior of another function 
# without changing its code. They are often used to add functionality to existing functions in a clean and readable way.
def decorator(func):
    def wrapper():
        print("I am about to execute a function.........")
        
        func()
        print("I have executed a function.........")
    return wrapper
        
@decorator
def say_hello():
    print("This is hello function")

say_hello()
'''
f will look somethimng like this:
def f():
    print("I am about to execute a function.........")
    print("This is hello function")
    print("I have executed a function.........")

'''
# f = decorator(say_hello)
# f()   