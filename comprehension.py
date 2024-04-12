number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

calender = {key:value for key, value in zip(number, months)}
print(calender)