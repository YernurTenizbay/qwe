n=int(input())
a=[]

for i in range(n):
    a.append(int(input()))
for i in range(n):
    if(i%2==1):
        print(a[i])
