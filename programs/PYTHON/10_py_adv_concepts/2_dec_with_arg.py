
def repeat(n):
    def decorator(func):
        def wrapper(a):
            for i in range(n):
                func(a)
        return wrapper
    return decorator

@repeat(5)
def say_hello(a):
    print(f"hello! {a}")
say_hello("REX")

'''
it replaces say_hello fn with this:
def decorator(func):
    def wrapper(a):
        for i in range(5):
            say_hello(a)        
    return decorator
'''