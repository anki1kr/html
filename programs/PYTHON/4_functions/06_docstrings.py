def sqrt(x):
     '''This function calculates the root of number x.'''
     if x < 0:
          print("enter a postive no.")
     else:
          root = x * x
          return root
     
print (sqrt.__doc__)
print (sqrt(4))