def min(a,b,c,d):
    e=1e9
    
    if (e>a):
        e=a
    if(e>b):
        e=b
    if(e>c):
        e=c
    if(e>d):
        e=d

                
    return e


a=int(input())
b=int(input())
c=int(input())
d=int(input())
m=min(a,b,c,d)
print(m)