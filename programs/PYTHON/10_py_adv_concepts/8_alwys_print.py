a = int(input("enter no. 1: "))
b = int(input("enter no. 2: "))

def div(a, b):
    try:
        c = a / b
        print(c)
        return c
    
    except Exception as e:
        print("An error occurred:", e)
        return None
    
    finally:
        print("program is executed")


div(a,b)