foods = ['beans','beans', 'rice', 'dodo', 'semolina', 'bread', 'egg']

for a, b in enumerate(foods):
    print(a, b)

lent = foods.count('beans')
print(lent)

def find_beans(food):
    if food == 'beans':
        return food

food_map = filter(find_beans, foods)
for x in food_map:
    print(x)