def xor(x,y):
    if (x==False and y==True) or (y==False and x==True):
        return 1
    else:
        return 0

a=int(input())
b=int(input())
print(xor(a,b))