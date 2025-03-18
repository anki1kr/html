# str.len() function
'''len() function is an inbuilt function in python programming language that returns the length of the string.
 syntax: len(string)'''

name =input("name:")
print("length of string is :",len(name))


# str.count() function
'''count() function is an inbuilt function in python programming language that returns the number of occurrences of a substring in the given string.
 syntax: str.count(substring, start, end)'''

str="this is $ symbol $99.9 and it is used for $ money"
print("the repetation of ",str.count("$"))


#str.find() function
'''find() function is an inbuilt function in python programming language that returns the index of first occurrence of the substring in the given string.
syntax: str.find(substring, start, end)'''

str="this is $ symbol"
#            87654321
#           -8-7-6-5-4-3-2-1 negative indexing is used 
print(str.find("$"))


# ste.capatalise function
'''capatalise() function is an inbuilt function in python programming language that returns the first letter of the string in capital letter.
syntax: str.capatalise()'''
str = "i am Studying Python from College"
str =str.capitalize()
print(str)

# str.endswith() function
'''endswith() function is an inbuilt function in python programming language that returns the boolean value True if the string ends with the specified suffix, otherwise False.
syntax: str.endswith(suffix, start, end)'''
str = "i am Studying Python from College"
print(str.endswith("College"))

# str.replace() function
'''replace() function is an inbuilt function in python programming language that returns the string by replacing the old substring with the new substring.'
syntax: str.replace(old, new, count)'''
str = "i am Studying Python from College"
str =str.replace("Python","Java")
print(str)