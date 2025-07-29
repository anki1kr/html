import shutil

# this created a file
with open("s1.txt","w") as f:
    f.write("this is sample file 2 ")
    

shutil.copy("s1.txt","sample.txt")
# shutil (source,destination)

shutil.move("sample.txt","dir/sample.txt")

# import os

# os.remove("11_files/dir/sub_dir2/sample.txt")