// question1

let firstNum = 5
let secondNum = 8
let greater;

if(firstNum > secondNum){
    greater = `${firstNum} is greater than ${secondNum}`
}else{
    greater = `${secondNum} is greater than ${firstNum}`
}

//console.log(greater)

//question2
let num1 = 9
let num2 = 19
let num3 = 19
let greatest;

if(num1 > num2){
    if(num1 > num3){
        greatest= `${num1} is the greatest`
    }else{
        greatest = `${num3} is the greatest`
    }
}else if (num2 > num1){
    if(num2 > num3){
        greatest= `${num2} is the greatest`
    }else{
        greatest = `${num3} is the greatest`
    }
}
//console.log(greatest)

//question3
// let num = 0;

// if(num > 0){
//     console.log('Positive')
// }else if(num < 0){
//     console.log('Negative')
// }else{
//     console.log('Zero')
// }

//question5
// let character = 'o';

// if( (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) || ( character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)){
//     console.log('This is an alphabet')
// }else{
//     console.log('This is not an alphabet')
// }

//question6

let letter = 'i';
let vowelOrConsonant;


if (letter == 'a' || letter == 'e' || letter == 'o' || letter == 'i' || letter == 'u'){
    vowelOrConsonant = 'It is a vowel'
}else{
    vowelOrConsonant = 'It is a consonant'
}
// console.log(vowelOrConsonant)

//question7

let basicSalary= 5000
let grossSalary;
 
if(basicSalary <= 10000){
    grossSalary = (basicSalary * 0.2) + (basicSalary * 0.8) + basicSalary
}else if(basicSalary <= 20000){
    grossSalary = (basicSalary * 0.25) + (basicSalary * 0.9) + basicSalary
}else if( basicSalary > 20000){
    grossSalary = (basicSalary * 0.3) + (basicSalary * 0.95) + basicSalary
}else{
    console.log('Enter a valid salary')
}
console.log('Gross Salary'+ ' ' + grossSalary)

//question9

//let years = currentYear - enteringYear
// let bonus = 0

// //if(years > 3){
//     bonus += 2500
// }

//question10

let ages = [
    {
        name: 'zainab',
        age: 123
    },
    {
        name: 'Alim',
        age: 44
    },
    {
        name: 'Kelvin',
        age: 87
    }
]
let maxAge = 0;
for(let i = 0; i< ages.length; i++){
    if(ages[i].age > maxAge){
        maxAge = ages[i].age
    }
}
//console.log(maxAge)

//question11

let lateNess = 10;
let complaint;

if(lateNess <= 5){
    complaint = `You have to pay a fine of #50`
}else if(lateNess >5 && lateNess <=10){
    complaint = `You have to pay a fine of #100`
}else if(lateNess > 10 && lateNess < 30){
    complaint = `You have to pay a fine of #500`
}else if (lateNess >= 30){
    complaint = 'Your membership has been cancelled'
}else{
    complaint= 'Enter a valid days of lateness'
}

let isWeekend = false
let isHoliday = true
let response;

if(isWeekend){
    if(isHoliday){
        response = 'Weekend holiday'
    }else{
        response = 'Regular weekend'
    }
}else{
    if (isHoliday){
        response = 'Weekday holiday'
    }else{
        response = 'Regular weekday'
    }
}
//console.log(response)

let cost = 5000
let discountPrice;

function discountedPrice(cost){
    if(cost >= 1000){
        discountPrice = cost - (cost*0.1)
    }else{
        discountPrice = cost
    }
    return discountPrice
}
//console.log(discountedPrice(cost))

let buzz = "wet"
let isBuzz;
if(!isNaN(buzz)){
    if(buzz % 7 ==0 || buzz.toString().slice(-1) == 7){
    isBuzz = 'It is a buzz number'
}
    else{
    isBuzz = 'It is not a buzz number'
    }
}
else{
    isBuzz = 'This is not a valid input for this purpose'
}

console.log(isBuzz)

function greet(name){
    let time = Date()
    let hour = Number(time.split(' ')[4].split(':')[0])
    let message= ''

    if(hour >= 0 && hour < 12){
        message = `Good morning, ${name}`
    }else if (hour >= 12 && hour < 16){
        message = `Good afternoon ${name}`
    }else{
        message = `Good evening ${name}`
    }
    return message
}