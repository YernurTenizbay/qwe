def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return (b.endswith(a) or a.endswith(b))

def count_code(str):
    cnt = 0
    for i in range (len(str)-3):
        if str[i] == 'c' and str[i+1] == 'o' and str[i+3] == 'e':
            cnt += 1
    return cnt
def cat_dog(str):
  return str.count('cat') == str.count('dog')

def strasd():
    i=5
    str="Hello"

    return "Hello "+str

print(strasd())
