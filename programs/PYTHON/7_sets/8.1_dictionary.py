std = {"kevin":10,
         "jhon":43,
         "mike":23}
# this KEVIN,JHON are keys of dictionary
'''
print(std["kevin"])  # Accessing value using key
std["mike"] = 2
print(std["mike"]) 
'''

#  dictionary methods
print(std.keys())
print(std.values())

std.pop("mike")  # remove key-value pair

# dictionary comprehension
sq = {x: x**2 for x in range(10)}
print(sq)

table_of_20 = {i:i*20 for i in range (1,11)}
print(table_of_20)