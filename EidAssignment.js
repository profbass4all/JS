for(let i = 0; i<=20; i++){
    //console.log(i)
}

for(let i = 3; i<30; i++){
    if(i % 2 != 0){
        //console.log(i)
    }
}

for(let i = 12; i >= -14; i--){
    if(i % 2 == 0){
        //console.log(i)
    }
}

for(let i = 50; i >=20; i--){
    if(i % 3 == 0){
        //console.log(i)
    }
}

let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi, optio sequi amet laudantium ullam dolore quod eos aliquam laborum veritatis! Ipsum amet at nobis accusamus nisi ut eveniet ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur quod fugiat dolores, natus ab enim blanditiis adipisci aperiam laudantium non cumque at labore esse quam neque saepe reiciendis consequatur, fugit obcaecati! Numquam unde deleniti a illum facilis vero, iusto cum quaerat illo. Fugiat rerum officia, magni minus asperiores ad?'

let newStr = ''

for(let i =0; i<=str.length; i++){
    if(i % 2 == 0){
        newStr += 'Z'
    }else{
        newStr += str[i]
    }
}

// console.log(newStr)

let checkY = 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY'.toLocaleLowerCase()
if(checkY.includes('y')){
    //console.log('yes')
}else{
    //console.log('no')
}

let n = 0
let factorial = 1
let result = ''
if(n < 1){
    result = 'Please provide a positive number'
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

let number = 5
let summation = 0

for(let i =0; i <= number; i++){
    summation += i
}
//console.log(summation)

let myName = 'Console'.toLowerCase()
let reversedName = ''

for(let i = myName.length -1; i >= 0; i--){
    reversedName += myName[i]
}
console.log(reversedName)
let nameCapitalize = ''
for(let i = 0; i < reversedName.length; i++){
    
    if(i == 0){
        nameCapitalize += reversedName[i].toUpperCase()
    }
    else{
        nameCapitalize += reversedName[i]
    }
}
console.log(nameCapitalize)