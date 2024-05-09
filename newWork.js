//get all the prime numbers between the zero and the number given
//checks..
//prime number can't be negative
//0 and 1 are not prime number
//prime number are only divisible by one and itself
const checkPrime = (elem)=>{
        let isprime = true
        if(elem <= 1){
            isprime = false
        }
        else if(elem > 1){
            for( let i = 2; i < elem; i++){
                if(elem % i == 0){
                    isprime = false
                }
            }
        }
    return isprime
}
const isPrime = (arr)=>{
    const primeNumbers = arr.filter((elem)=>{
        return checkPrime(elem)
    })
    return primeNumbers
}
function outPutPrimeNumbers(num){
    let formedArray = []
    for(let i =0; i<= num; i++){
        formedArray.push(i)
    }
    return isPrime(formedArray)
}

console.log(outPutPrimeNumbers(10))
