document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clouseau speaking on the pheaun"

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} from the left edge and ${wiindow.screenY} pixels from the top of the display`

let myWindow = document.querySelector(`#myWindow`).innerText = windowSizes + `\n` +| offset