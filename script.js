const colours = generateRandomColours(6);

const squares = document.querySelectorAll(".square");
const pickedColour = pickColour();
const colourDisplay = document.getElementById('colourDisplay')
let messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1")

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
            h1.style.backgroundColor = pickedColour
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

function pickColour(){
    let random = Math.floor(Math.random() * colours.length); 
    return colours[random]
}

function generateRandomColours(num){
    //make array
    const arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random colour and push into array
        arr.push(randomColour())

    }
    // return that array
    return arr
}

function randomColour(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}