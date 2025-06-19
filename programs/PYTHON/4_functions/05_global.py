def avg(a,b): 
    avg = (a+b)/2 # this avg is a local variable
    global z # this declares that we want to change the global variable a
    z = 5
    return avg
z = 10 # this is a global variable
print(avg(10,20))
print(z) # this will print the global variable z