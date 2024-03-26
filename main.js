let surname  = 'Ibrahim';
let firstname = 'Abass';
let othername = 'Tunde';

console.log(`${surname.charAt(0)}.${firstname.charAt(0)} ${othername}`);

let str = 'Helloo world! how are you?';
let occ1 = str.indexOf('o');
let occ2 = str.indexOf('o', occ1 +1)
console.log(occ2)

let str1 = 'Sherifat';
let str2 = 'Oshoala';
let str3 = 'Ibrahim';

let others = str1.concat(' ', str2);
let result = others.concat(' ', str3)
console.log(result)

let sentence = 'The brown dog followed the black dog, while the white dog barked at the stray dog chasing the small dog';
console.log(sentence.length -1)

let lastIndex = sentence.lastIndexOf('dog')
console.log('last index',lastIndex)
let secondToLast = sentence.lastIndexOf('dog', lastIndex -1)
console.log('second to the last',secondToLast)
let thirdToLast = sentence.lastIndexOf('dog', secondToLast-1)
console.log('Third to the last', thirdToLast)