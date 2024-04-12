let age = 17;

if(age > 0 && age < 18){
    console.log(`I am a child`)
}else if ( age>= 18 && age <= 64){
    console.log(`I am an adult`)
}else {
    console.log(`I am an older geezer`)
}

let studentScore;

if (studentScore > 50){
    console.log(`Bro, passed!!`)
    if(studentScore >= 50 && studentScore < 60){
        console.log(`You've a C`)
    }else if( studentScore >=60 && studentScore <70 ){
        console.log(`You've a B`)
    }else{
        console.log(`You've an A`)
    }
}else{
    console.log(`You've failed`)
}