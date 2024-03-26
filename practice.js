let question1 = " The morning is upon us ";
let a = question1.trim().slice(2,11)

let question2 = 'The quick brown fox jumps over the lazy dog'
let b = question2.indexOf('jumps')
let c = question2.slice(0, b).trim()
let d = question2.slice(b)
let e = `${d}, ${c}`;

let question3 = ' The brown fox ' 
let f = question3.trim().includes('o')

let question4 = 'abcdefg';
let g = '';
for(let x of question4){
    if (question4.indexOf(x) % 2 == 0){
        g += x
    }
}

let question5 = 'example example example';
let h1 = question5.indexOf('example')
let h2 = 'example'.length
let h3 = question5.slice(0, h2)
let h4 = question5.slice(h2 +1).replace('example', 'lamp')
let h5 = `${h3} ${h4}`
console.log(h5)


let question6 = ' Hello, World! ';
let i = question6.trim().length -1

let question7 = 'Hello World!';
let j = question7.slice(question7.indexOf('World'), str.length -1)

let question8 = 'Hello World';
let k = question8.split(' ').slice(-1).join('').length

console.log(k)
let question9 = 'Javascript is Cool';
let l = question9.toLocaleLowerCase()
let m = l.replaceAll('a', 4).replaceAll('e', 3).replaceAll('i', 1).replaceAll('o', 0).replaceAll('s', 5);




 