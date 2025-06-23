A = int(input ("A :"))
G = input ("M/F : ")
if((A == 1 or A == 2) and G == "M"):
	print("fee is 100")
elif(A == 3 or A == 4 or G == "F"):
	print("fee is 200")
elif(A == 5 and G == "M"):
	print("fee is 300")
else:
	print("no fee")
	
	''' 
	marks = int(input("enter marks:"))

if (marks>=90):
    grade="A"
elif (marks<90 and marks>=80):
    grade="B"
elif (marks<80 and marks>=70):
    grade="C"
else:
    grade="D"
print("grade is:",grade)'''