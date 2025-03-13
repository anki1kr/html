food=input("food:")
print("sweet") if food=="cake" or food=="jalebi" else print("not sweet")

#cleaver ternary operator  1
age = int(input("age :"))
vote = ("yes", "no") [age <= 18]
print(vote)

#cleaver ternary operator 2
sal = float (input("salary : "))
tax = sal*(0.1, 0.2) [sal <= 50000]
print(tax)