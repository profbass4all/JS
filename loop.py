# foods = ['beans','beans', 'rice', 'dodo', 'semolina', 'bread', 'egg']

# for a, b in enumerate(foods):
#     #print(a, b)

# lent = foods.count('beans')
# print(lent)

# def find_beans(food):
#     if food == 'beans':
#         return food

# food_map = filter(find_beans, foods)
# for x in food_map:
#     print(x)

results = {'Abass': [89,76,90,75,87], 'Ziki': [56, 89, 32, 54], 'Aisha': [54,23,73,4,59]}

results['Rodiyah'] = [43,76,59,90]
results['Abass'].sort()
print(results)

def add(x,y):
    return x + y

def sub(x, y):
    return x - y

def apply(func):
   
    def wrapper(*args, **kwargs):
        print('I am inside')
        addition = add(x,y)
        return addition
    return wrapper
    
x= apply(add(4,5))

print(x(4,5))
# http://simeonfranklin.com/blog/2012/jul/1/python-decorators-in-12-steps/

