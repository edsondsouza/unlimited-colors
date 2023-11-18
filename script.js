// generate random colors

const randomColors = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(Math.floor(Math.random() * 16))

let startInterval;
// console.log(startInterval)

// start
const startChangingColor = function() {
    if (!startInterval) {
        startInterval = setInterval(changeColor, 1000)
    }

    function changeColor() {
        document.querySelector('h1').style.color = '#fff'; // change font color to white
        document.body.style.backgroundColor = randomColors();
    }
}

document.querySelector("#start").addEventListener("click", startChangingColor)

// stop
const stopChangingColor = function() {
    clearInterval(startInterval)
    document.querySelector("h1").style.color = "#000" // change font color to black
    startInterval = null;
}

document.querySelector("#stop").addEventListener("click", stopChangingColor)