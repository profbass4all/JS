// let a = 'javascript is cool, programming is fun'
// console.log(a.length)
// console.log(a.startsWith('is', 11))
// console.log(a.endsWith('fun', 38))
// console.log(a.repeat(3))
    
let java = 'javascript javascripts javascript'.trim()
let fOccurrence = java.indexOf(' ')
let sOccurrence = java.indexOf(' ', fOccurrence + 1)
let secondStr = java.slice(fOccurrence, sOccurrence)
console.log(secondStr)
let res1 = java.indexOf('javascript', 1) 
console.log(res1)



