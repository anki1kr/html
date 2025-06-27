'''
normal fn
def sum(a,b):
    return a+b

print(sum(1,2))
'''
# args will be a tuple of all the values passed to sum 
def sum(*args):
    total = 0
    for item in args:
#   total = total+item
        total += item
    return total
   

print(sum(1,2,3,4))