function getCountry(e){
    e.preventDefault()
    let country = document.getElementById('country').value.toLowerCase()
    let result = document.getElementById('result')
    result.innerHTML = ''

    fetch('example.json')
    .then(response => response.json())
    .then( data => {
        const favCount = data.countries.find(item => item.name.toLowerCase() == country)

        if(favCount){
            result.innerHTML += `<h4>The name of this country is ${favCount.name}</h4>`
            result.innerHTML += `<p>This country has ${favCount.cities.length} cities`

            let ul = document.createElement('ul')
            let li = document.createElement('li')
            
            ul.innerHTML = favCount.cities.map(item => {
                return `<li>${item.name}</li> <br> <p>${item.description}</p>`
            })
            console.log(li)

            result.appendChild(ul)

        }
    }
    
    ).catch(error => {
        console.log('there is an error', error.message)
        result.innerHTML = `An error occured`
    })
}

// function reset(){
//     document.getElementById('result').value = ''
//     document.getElementById('country').value = ''
// }
let form = document.querySelector('form')
form.addEventListener('submit', getCountry)