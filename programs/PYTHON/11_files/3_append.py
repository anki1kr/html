# append is used add the data in existing file at end , without oveerwriting it
f = open("rex.txt","a") # 'a' mode is for appending
str ='''\nThis is added through append.I work in AI and ML'''

f.write(str) # write the string to the file
f.close() # close the file