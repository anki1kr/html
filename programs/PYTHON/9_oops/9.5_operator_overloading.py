class point:
    def __init__(self,x,y):
        self.x = x 
        self.y = y

    def sum(self, p):
        return point((self.x+p.x),(self.y+p.y))
    
    def print_point(self):
        print(f"X is {self.x} and Y is {self.y}")

    def __add__(self,p):
        return ((self.x+p.x),(self.y+p.y))
    
p1 = point(1,2)
p2 = point(3,4)

# p = p1.sum(p2) #X is 4 and Y is 6         
#Operator Overloading

p = p1 + p2  # we overloaded + operator by writing __add__ method
print(p)  # This will print a tuple (4, 6)
 