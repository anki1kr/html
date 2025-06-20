class animal:
    loacation = "India"
    def __init__(self,name):
           self.name = name
    def seapk(self):
          print("generic animal sound")
# This is how in hertyance works in python
class dog(animal):   #this class contain all the properties of animal class
      def seapk(self):
            print("woof!")