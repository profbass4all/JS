//question1print 1 to 20
for(let i = 0; i<=20; i++){
    //console.log(i)
}

//question2 Print only the ODD values from 3 - 29, one numbber per line.
for(let i = 3; i<30; i++){
    if(i % 2 != 0){
        //console.log(i)
    }
}

//questin3 Print the EVEN numbbers 12 down to -14 in descending order, one numbber per line.
for(let i = 12; i >= -14; i--){
    if(i % 2 == 0){
        //console.log(i)
    }
}
//question4 Print the numbbers 50 down to 20 in descending order, but only if the numbbers are multiples of 3.
for(let i = 50; i >=20; i--){
    if(i % 3 == 0){
        //console.log(i)
    }
}
//question5 Given a string, change every second letter to an uppercase ‘Z’
let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi, optio sequi amet laudantium ullam dolore quod eos aliquam laborum veritatis! Ipsum amet at nobis accusamus nisi ut eveniet ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur quod fugiat dolores, natus ab enim blanditiis adipisci aperiam laudantium non cumque at labore esse quam neque saepe reiciendis consequatur, fugit obcaecati! numbquam unde deleniti a illum facilis vero, iusto cum quaerat illo. Fugiat rerum officia, magni minus asperiores ad?'

let newStr = ''

for(let i =0; i<=str.length; i++){
    if(i % 2 == 0){
        newStr += 'Z'
    }else{
        newStr += str[i]
    }
}

// console.log(newStr)

//question6 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let checkY = 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY'.toLocaleLowerCase()
if(checkY.includes('y')){
    //console.log('yes')
}else{
    //console.log('no')
}

//question7 Given any numbber, write a program to calculate the factorial of the numbber. 
//(Hint: Factorial is any numbber multiplied by the natural integers before it up to 1. eg: Factorial of 5 = 5x4x3x2x1)

let n = 0
let factorial = 1
let result = ''
if(n < 1){
    result = 'Please provide a positive numbber'
}else{
    for(let i = n; i>=1; i--){
        if(n==1){
        result = `The factorial of ${n} is ${n}`
    }else{
        result = `The factorial of ${n} is ${factorial *= i}`
        }
    }
}
//console.log(result)

//question8 Write a program that use a loop to check if a given string is a palindrome. Remember, a palindrome is a word/sentence that 
//spells the same forward and backward.

let pname = 'madam'
let checkedWord = ''

for(let i = pname.length -1; i >= 0; i--){
    checkedWord += pname[i]
}
if(pname == checkedWord){
    //console.log('It\s a Plaindrome')
}else{
    //console.log('It\'s not a Palindrome')
}
//question9 Write a program that finds the summation of every numbber from 1 to a given numbber. (Given say, numbber 5, the summation is 15, ie: 1 + 2 + 3 + 4 + 5)
let numbber = 5
let summation = 0

for(let i =0; i <= numbber; i++){
    summation += i
}
//console.log(summation)

//question10 Let's see how your name spells in reverse!
//eg: tobi  =  Ibot 
//Write a program that reverses your name and capitalizes the first letter.

let myName = 'Console'.toLowerCase()
let reversedName = ''

for(let i = myName.length -1; i >= 0; i--){
    reversedName += myName[i]
}
//console.log(reversedName)
let nameCapitalize = ''
for(let i = 0; i < reversedName.length; i++){
    
    if(i == 0){
        nameCapitalize += reversedName[i].toUpperCase()
    }
    else{
        nameCapitalize += reversedName[i]
    }
}
//console.log(nameCapitalize)

//question11 change every second letter of a word in a sentence
let wahala = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numbquam nobis fugit deserunt. Rerum ullam architecto dolore earum, perferendis molestias vero natus esse, omnis ex nihil quas facere debitis dicta inventore repudiandae consequatur, dolorum voluptatum aliquam ipsum voluptates similique. Dolor debitis modi odit repudiandae, soluta quasi. Repellendus        libero eius et.'.split(' ')
let newWahala = ''

for(let i = 0; i <= wahala.length-1; i++){
    for(let j = 0; j<= wahala[i].length - 1; j+= 1){
        if(j == 1){
            let second = wahala[i][j]
            second = 'z'.toUpperCase()
            newWahala += second 
        }else if(j == wahala[i].length - 1){
            newWahala += wahala[i][j] + ' '
        }
        else{
            newWahala += wahala[i][j]
        }
    }
}
//console.log(newWahala)


//let count = 0
// for (let i = 0; i <word.length; i++){
//     if(box.includes(word.charAt(i))){
//         for (let j = 0; j< box.length; j++){
//             if(box.charAt(j) == word.charAt(i)){
//                 count++
//             }
//         }
//         if(count === 1){
//             box+= word.charAt(i).toUpperCase()
//         }else{
//             box += word.charAt(i)
//         }
//     }else{
//         box+=word.charAt(i)
//     }
// }

//question12 change the second occurence of every letter to upperCase
let word = 'shhherriffatttar'
let box = ''

for(let i = 0; i <word.length; i++){
    if(box.includes(word.charAt(i))){
        let newBox = box.toLowerCase()
        if(box.indexOf(word.charAt(i)) == newBox.lastIndexOf(word.charAt(i))){
            box+= word.charAt(i).toUpperCase()
        }else{
            box += word.charAt(i)
        }
    }else{
        box += word.charAt(i)
    }
}
//console.log(box)

//question13 calculate the factorial of a number using a while loop
count = 5
let i = 1
factorial = 1

while(i <= count ){
    factorial *= i
    i++
}
//console.log(factorial)

//question14 get the multiples of 3 between 50 and 20 in descending order
let numb = 50
while(numb <= 50 && numb > 20) {
    if(numb % 3 == 0){
        //console.log(numb)
    }
    numb--
}
let myFriend = {
    first_name: 'Sherifat',
    last_name: 'Oshoala',
    specialization: 'Backend Development',
    complexion: 'dark skinned',
    favourite_drink: 'Viju Choco',
    mood: 'moody',
    isBrilliant: true,
    isEngaged: true,
    isMarried: false,
    isLovely: true,
    talents: ['coding', 'presentation', 'critical thinking']
}

for(let key in myFriend){
    //console.log('key :'+' ' + key,',' + ' Value :' + ' ' + myFriend[key])
}
//console.log(Object.entries(myFriend))
let products = [
    {
    name : 'headphones',
    price: 70,
    discount: 0
},
{
    name : 'air-pod',
    price: 700,
    discount: 0
},
{
    name : 'battery',
    price: 245,
    discount: 0
},
{
    name : 'groceries',
    price: 54,
    discount: 0
},
{
    name : 'fruits',
    price: 385,
    discount: 0
},
{
    name : 'Iphone',
    price: 9800,
    discount: 0
}

]

const discountThePrice = (arrayofObjects)=>{
    const mappedArray = arrayofObjects.map((obj, index, arr)=>{
        if(obj.price > 100){
        obj.discount = '10%'
        obj.discountedPrice = (Number(obj.price)) - (Number(obj.price) * 0.1)
    }else{
        obj.discount = '7%'
        obj.discountedPrice = (Number(obj.price)) - (Number(obj.price) * 0.07) 
        }
    })
    
    return arrayofObjects
}

const checkIfDiscounted = (arrayofObjects)=>{
    const isDiscounted = arrayofObjects.filter((elem, index, arr)=>{
         return elem.hasOwnProperty('discountedPrice')
    })
    
    if(isDiscounted.length != arrayofObjects.length){
        return discountThePrice(arrayofObjects)
    }else{
        return arrayofObjects
    }
}
console.log(checkIfDiscounted(products))

