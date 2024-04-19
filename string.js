// let a = 'javascript is cool, programming is fun'
// console.log(a.length)
// console.log(a.startsWith('is', 11))
// console.log(a.endsWith('fun', 38))
// console.log(a.repeat(3))
    
// let java = 'javascript javascripts javascript'.trim()
// let fOccurrence = java.indexOf(' ')
// let sOccurrence = java.indexOf(' ', fOccurrence + 1)
// let secondStr = java.slice(fOccurrence, sOccurrence)
// console.log(secondStr)
// let res1 = java.indexOf('javascript', 1) 
// console.log(res1)


let pal = 'booble'
let palLength = pal.length

let firstPart = pal.slice(0, palLength/2 +1)
let secondPart = pal.slice(-(palLength/2+1)).split('').reverse().join('')

let isPalin;

if(firstPart == secondPart){
    isPalin = 'It is a Palindrome'
}else{
    isPalin = 'It is not a Palindrome'
}
//console.log(isPalin)

//let letter = 'loBJAasdk fdpri dnncjfalei fkf'.toLocaleLowerCase()
// let count =0;
// let alphabetA = 'a';

// for(let i = 0; i< letter.length; i++){
//     if(letter[i] === alphabetA){
//         count += 1
//     }else{
//         continue
//     }
// }
//console.log(`The number of letter ${alphabetA} in this sentence is ${count}`)

// get the sentence then loop through it. create a newWOrd variable
//add every letter in and even index in the newword variable
// add the prefix to the letters that of odd index then concat it to newword variable

// let word = 'Abassibrahim prof'
// let newWord = ''

// for(let i =0; i < word.length; i+=1){
//     if(i % 2 == 0){
//         newWord += word.charAt(i)
//     }else{
//         let prefix = "un-" + word.charAt(i)
//         newWord += prefix
//     }
// }
// console.log(newWord)

let word = 'Abassibrahim'
let letter = ''
let newWord = ''

for(let i = 0; i < word.length; i+=1){
    letter = word.slice(i, (i+1))
    if(i % 2 == 0){
        newWord = newWord + 'un-' + letter       
    }else{
        newWord +=letter
    }
}
//console.log(newWord)



let market = 'Christiana goes to school'.split(' ')
let result = []

console.log(market)

for(let i = 0; i < market.length; i++){
    word = market[i].split('')
    word[1] = word[1].toUpperCase()
    let newword = word.join('')
    result.push(newword)
}
//console.log(result.join(' '))

let arr1 = [23, 'butterfly', 'moth', 'caterpilar', 1001]

//question1

//let question1 = arr1.splice(2,0, 'eshinshin', 'praying mantis')
//console.log(arr1)

//question2

//let question2 = arr1.splice(3,2)
//console.log(arr1)

//question3

let question3 = arr1.splice(2, 1, 'ayon', 'bed bug', 'ant')
//console.log(arr1)

function product(number1, number2){
    return number1 * number2
}

function isMultiple(multiple){
    if(isNaN(multiple)){
        return `Enter a number please`
    }
    else if(multiple % 3 == 0 && multiple % 5 == 0){
        return true
    }else{
        return false
    }
}

console.log(isMultiple(15))
console.log(product(30,50))