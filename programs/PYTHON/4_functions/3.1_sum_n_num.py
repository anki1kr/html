def cal_sum(n):
    if n==0:
        return 0
    return cal_sum(n-1) + n
    
print(cal_sum(5))


# printing a list using the Recursion
num =[1,2,3,65,5,8,2,2,5,5,2]

def print_num(num,idx=0):
    if idx==len(num):
        return
    
    print(num[idx],end=' ')
    return print_num(num, idx+1)

print_num(num)