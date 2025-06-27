# # this is how acctuually open a file in python
# f = open("rex.txt","r")
# content = f.read()
# print(content)
# f.close()

with open("rex.txt","r") as f:  #context manager
    content = f.read()
    print(content)
# The 'with' statement automatically closes the file after the block is executed.