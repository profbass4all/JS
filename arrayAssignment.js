//question1
const cloneArray = (givenArray)=>{
    let newArray = []
    for(let i = 0; i< givenArray.length; i++){
        newArray.push(givenArray[i])
    }
    return newArray
}

let foods = ['rice', 'beans', 'potato', 'bokku', 'bokku', 'rice']

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
//console.log(removeDuplicateItems([2,2,3,4,3,6,6,5,5,4,3,4,5,6,7,8,8,8,8,9,9,9,9,8,7,6,4,3,2,1,2,]))
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
    console.log(count)
    return max
}
console.log(mostFrequentInAnarray([2,2,2,3,4]))