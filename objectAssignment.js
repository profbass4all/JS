let object = {
    name: 'Abass',
    age: 45,
    school: 'Unilorin',
    accomodation: 'Tanke'
}
Object.defineProperty(object, 'hobby',{
    value: 'Coding'
})

//question1
let countPropertyEnumerable = (obj)=>{
    let lengthofEnumerable = Object.keys(obj).length
    return lengthofEnumerable
}
// console.log(countPropertyEnumerable(object))

//question2
let findLongestKey = (obj)=>{
    let maxLength = ''
    for(let key in obj){
        if(key.length > maxLength.length){
            maxLength = key
        }else{
            continue
        }
    }
    return maxLength
}
//console.log(findLongestKey(object))

//question3

let numericValuedObject = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5
}

let sumObjectValues = (obj)=>{
    let total = 0
    for(let num in obj){
        total += obj[num]
    }
    return total
}
//console.log(sumObjectValues(numericValuedObject))

//question4

let objectsTobeMerged = [
    {
        name: 'Sherifah',
        age: 24
    },
    {
        school: 'Unilorin',
        hobby: 'swimming'
    },
    {
        school: 'Unilag',
        marital_status: 'Single'
    },
    {
        hobby : 'newscasting',
        age: 23
    }
]

const mergeObjects = (arr)=>{
    Object.assign(...arr)
    return arr[0]
}
// console.log(mergeObjects(objectsTobeMerged))

//question5
const isSealed = function(obj){
    if(Object.isSealed(obj)){
        return true
    }else{
        return false
    }
}
// console.log(isSealed(object))
// //question6
// This number six showed me shege just because i didn't know the object passed into the object.create function is the prototype for the new object...this is painful sha but we move
const createCustomObject = (proto, properties)=>{
    let newObject = Object.create(proto)
    Object.assign(newObject, properties)
    return newObject
}

//question7
let arr = [2, 3, 4, 5]
let tar = 9
const returnIndex = (num, target) =>{
    for(let i in num){
        for(let j = i; j < num.length; j++){
            if(num[i] + num[j] == target){
                return [num.indexOf(num[i]), num.indexOf(num[j])].join(',')
            }else{
                continue
            }
        }
    }
}
console.log(returnIndex(arr, tar))