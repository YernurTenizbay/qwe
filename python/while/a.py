import math
a=int(input())
i=1
while i<=a:
    k=int(math.sqrt(i))
    if((k*k)%i==0):
        print(i)
    i+=1