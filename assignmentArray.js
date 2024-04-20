let array1 = ['Sherifat', 'Asisat', 'Abass', 'Majeed']
                            // array       number
const returnNElement = (arrayName, numberOfElements)=>{
        let renewedArray = arrayName.slice(-numberOfElements)
        return renewedArray
}
console.log(returnNElement(array1, 2))