//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"
document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best B&B in town!"

let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", Welcome to the best lodging in town! "

let messsge = `Hello ${userName}, welcome to the state of the art lodging in town!`

document.querySelector('#greeting').innerText = message