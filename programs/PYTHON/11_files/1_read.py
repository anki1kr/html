f = open("rex.txt", "r")
# r refers to just read 
# rt means reading file in text mode 
content = f.read()
f.close()
print(content)