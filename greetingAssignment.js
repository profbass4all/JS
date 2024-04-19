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
console.log(greet('Abass'))

