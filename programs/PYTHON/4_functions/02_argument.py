def sum(a,b,c): # fn defination(actual parameter)
    sum=(a + b+ c)
    return sum

s1 = sum(3,2,1) #function call(argumrnt)
print(s1)
s2 = sum(8,5,9)
print(s2)

# a functer to check value is even or odd
value=int(input('enter the no.: '))
def checker(num):
    
    if ((num%2)==0):
        print('EVEN')
    else:
        print('ODD')

checker(value)