let array1 = [2, 3, 4]


const product = array1.reduce((accumulator, currentValue)=>{
    return accumulator * currentValue
}, 1)

console.log(product)

const average = array1.reduce((accumulator, currentValue, currenIndex, arr)=>{
        let total = accumulator + currentValue
        
        return total/arr.length
}, 0)

console.log(average)