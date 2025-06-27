import shutil

# this created a file
f = open("s1.txt","w")
f.write("this is sample file 2 ")
f.close()

shutil.copy("s1.txt","sample.txt")
# shutil (source,destination)

shutil.move("sample.txt","dir/sub_dir2")

# import os

# os.remove("dir/sub_dir2/sample.txt")