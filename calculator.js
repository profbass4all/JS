let result = document.getElementById('result')
let display = document.getElementById('display')
let arr = []
let simpli

function calc(num){
    if(result.value != ''){
        result.textContent = ''
        display.textContent = ''
         
    }
    display.textContent += num
    arr.push(num)
    simpli = arr.join('')
    console.log(simpli)
}
function reset(){
    display.textContent = ''
    result.textContent = ''
    arr.splice(0)
}
function calculate(){
    try{
        
        result.textContent = parseFloat(eval(simpli))
        
        display.textContent = result.textContent
        arr.splice(0)
    }catch(error){
        console.log(error.message)
        result.textContent = 'MathError'
    }  
}


