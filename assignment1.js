// // question1

let num = 0;

if(num > 0){
    console.log('Positive')
}else if(num < 0){
    console.log('Negative')
}else{
    console.log('Zero')
}

// // question2

// let num2 = 4;

// if (num2 % 2 == 0){
//     console.log('Even')
// }else{
//     console.log('Odd')
// }

// // question3

// let num3  = 11;

// if(num3 % 3 == 0){
//     console.log('Multiple of 3')
// }else if(num3 % 5 == 0){
//     console.log('Multiple of 5')
// }else{
//     console.log('Neither')
// }

// question4

let year = 1945;

if (1901 <= year <= 2000){
    console.log('20th Century')
}else if(year >= 2001 && year <= 2100){
    console.log('21st Century')
}else if(year >= 2101 && year <= 2200){
    console.log('22nd Century')
}else{
    console.log('Others')
}

// question5

// let value = 1000;
// let result;

// if(value < 10){
//     result = 0
// }else if(value >= 10 && value <= 50){
//     result = 1
// }else if( value >= 51 && value <= 100){
//     result = 2
// }else{
//     result = 3
// }

// console.log(result)

let total =0
while (true){
    number = Number(prompt('Enter a number: '))
    if(number < 0){
        break
    }
    total +=number
}
while (true){
    let name = prompt('Enter a name: ').toLowerCase()
    if(name == 'end'){
        console.log('I am done')
        break
    }
    console.log(name)
}

const numberSeeker = ()=>{
    let number = prompt('Enter a positive number: ')
    let factorial = 1
    while(number > 0){
        factorial*= number

        number--
    }

    return factorial
}

