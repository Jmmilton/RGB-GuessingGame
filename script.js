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
let messageDisplay = document.querySelector("#message");

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
    //add initial colours to squares
    squares[i].style.backgroundColor = colours[i]

    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //get colour of clicked square
        const clickedColour = this.style.backgroundColor;
        //compare colour to pickedColour
        if(clickedColour === pickedColour){
            changeColours(clickedColour)
            messageDisplay.textContent = "Correct!!"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = 'Try Again!'
        }
    })
}

function changeColours(colour){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour; 
    }
    //change each colour to math given colour
}