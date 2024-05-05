//question1
const cloneArray = (givenArray)=>{
    let newArray = []
    for(let i = 0; i< givenArray.length; i++){
        newArray.push(givenArray[i])
    }
    return newArray
}



//console.log(cloneArray(foods))
//question2
const returnLastNElements =(givenArray, n)=>{
    let newArray = givenArray.slice(-n)
    return newArray
}

//console.log(returnLastNElements(foods, 3))
//question3
const insertDashes = (num)=>{
    let stringnum = String(num).split('')
    let renewedNUm = []
    for(let i = 0; i <stringnum.length; i++){
        if(stringnum[i] % 2 ==0 && stringnum[i+1] % 2 ==0 ){
            renewedNUm.push(stringnum[i], '-')
        }else{
            renewedNUm.push(stringnum[i])
        }
    }
    return renewedNUm.join('')
}
//console.log(insertDashes(246896864233))
//question4
const removeDuplicateItems = (arraydupliates)=>{
    let noDuplicates = []
    for(let i = 0; i < arraydupliates.length; i++){
        if(noDuplicates.indexOf(arraydupliates[i]) == -1){
            noDuplicates.push(arraydupliates[i])
        }else{
            continue
        }
    }
    return noDuplicates
}
let sampleArr = [2,2,3,4,3,6,6,5,5,4,3,4,5,6,7,8,8,8,8,9,9,9,9,8,7,6,4,3,2,1,2,]
//console.log(removeDuplicateItems(sampleArr))
//question5
const mostFrequentInAnarray = (sampleArray)=>{
    let max = 0
    let count = new Map()
    for(let i = 0; i < sampleArray.length; i++){
        if(count.has(sampleArray[i]) ){
            count.set(sampleArray[i], count.get(sampleArray[i]) +1)
        }else{
            count.set(sampleArray[i], 1)
        }
    }
    for(let [key, values] of count){
        if(values > max){
            max = key
        }
    }
    //console.log(count)
    return max
}

//New Solution
function getMax(arr){
    arr.sort()
    let count = 1
    let maxfrequency = 1
    let item = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1]){
            count++
            if(maxfrequency < count){
                maxfrequency = count
                item = arr[i]
            }
        }else{
            count = 1
        }
    }
    return item
}
//console.log(getMax([2,3,4,2,3,4,3]))

function maxfrequency(arr){
    let count = 0
    let freq = 1
    let item = ''
    for(let i = 0; i< arr.length; i++){
        for(let j = i; j< arr.length; j++){
            if(arr[i] == arr[j]){
                count++
                if(freq < count){
                    freq = count
                    item = arr[i]
                }
            }
        }
        count = 0 //this count shows me shege
        // ..It took me time to realize it must be outside the loop
    }
    return item
}
//console.log('last method: ', maxfrequency(sampleArr))

let myArray = ['Abass', 'Tunde', 'Sherifat', 'Oshoala', 3, 45]

const multiplyIndexbyLength = ()=>{
    const myResult = myArray.map((elem, index)=>{
        
        return String(elem).length * index
    })

    return myResult
}

//console.log(multiplyIndexbyLength())

let numsArray = [3, 2, 2, 3]
const removeElements = function(nums, val){
    let count = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums[i] = '_'
        }else{
            count++
            continue
        }
    }
    nums.sort()
    return [`Output K = ${count}`, nums]
}

//console.log(removeElements(numsArray, 3))

const removeVal = function(nums, val){
    let newAr = []
    let bin = []
    const newNums = nums.map((elem, index, nums)=>{
            if(elem == val){
                bin.push(val)
            }else{
                newAr.push(elem)
            }
    })
    let finalResult = [...newAr]
    for(let i = 0; i <bin.length; i++){
        newAr.push('_')
    }
    let sentence = `Output k = ${finalResult.length} nums = ${newAr}`
    return sentence
}
//console.log(removeVal(numsArray, 3))

let na = 'Abass'
if(na.includes('b')){
    console.log('true')
}else{
    console.log('false')
}