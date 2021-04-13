b = int(input())
a = int(input())
cnt=0
while(b>0):
    if b%10==a:
        cnt+=1
    b=b//10
print(cnt)