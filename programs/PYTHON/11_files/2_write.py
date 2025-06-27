# write to a file called rex.txt 
# it should contain info about rex
f = open("rex.txt","w")

str ='''Hi I am Rex a python programmer , Nice to meet ya !
I am learning how to read and write files in python.'''

f.write(str)

f.close()