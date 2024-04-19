function greet(name){
    let time = Date()
    let hour = Number(time.split(' ')[4].split(':')[0])
    let message= ''

    if(hour >= 0 && hour < 12){
        message = `Good morning, ${name}`
    }else if (hour >= 12 && hour < 16){
        message = `Good afternoon ${name}`
    }else{
        message = `Good evening ${name}`
    }
    return message
}

const neededDisplay = (userInput, count, message)=>{
            console.log(message)
            let guessing = 5 - count ==1 ? 'guess': 'guesses'
            let alertRemainingGuess = `You've ${5 - count} ${guessing} remaining`
            if(count < 5){
                console.log(alertRemainingGuess)
            }
}


function guessingGame(){
    let secretNumber = Math.ceil(Math.random() * 15)
    
    let count = 0
    let message = '' 
            while (count < 5){
                let userInput = prompt('Enter a number between 0 and 15: ')
                if(userInput == ''){
                    message = `The value of '' is not a recognizable input`
                    neededDisplay(userInput, count, message)
                }
                else if(Number(userInput) > 15){
                    message = `The value of ${userInput} is greater than the expected number.`
                    neededDisplay(userInput, count, message)
                }
                else if(Number(userInput) > secretNumber){
                    count++
                    message = `The value of ${userInput} is greater than the number.`
                    neededDisplay(userInput, count, message)
                }
                else if(Number(userInput) < secretNumber){
                    count++
                    message = `The value of ${userInput} is less than the number.`
                    neededDisplay(userInput, count, message)
                }else if(Number(userInput) == secretNumber){
                    message = `Hurray!! You guessed right`
                    console.log(message)
                    break
                }else{
                    message = `The value of ${userInput} is not a valid guess`
                    neededDisplay(userInput, count, message)
                }
            }
            if (count === 5){
                message = `You've exhausted your guesses`
                console.log(message)
            }
            let userDecision = ''
            while (userDecision != 'yes' && userDecision != 'no'){
                userDecision = prompt('Will you like to play again?').toLowerCase()
                if(userDecision == 'yes'){
                    count = 0
                    guessingGame()
                }else if(userDecision == 'no'){
                    message = 'It was nice playing with you...Bye'
                    break
                }else{
                    console.log('Enter a response between yes or no')
                }
            }
        return message
}
        
console.log(guessingGame())









