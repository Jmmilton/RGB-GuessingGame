const colours = [
    "rgb(255, 0, 0)", 
    "rgb(255, 255, 0)", 
    "rgb(0, 255, 0)", 
    "rgb(0, 255, 255)", 
    "rgb(0, 0, 250)", 
    "rgb(255, 0, 255)"
]

const squares = document.querySelectorAll(".square");
const pickedColour = colours[3];
const colourDisplay = document.getElementById('colourDisplay')

colourDisplay.textContent = pickedColour

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colours[i]
}