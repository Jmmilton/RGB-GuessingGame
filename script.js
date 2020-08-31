let numSquares = 6;
let colours = [];
let pickedColour;
const squares = document.querySelectorAll(".square");
const colourDisplay = document.getElementById('colourDisplay')
let messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1")
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener('click', function(){
            //get colour of clicked square
            const clickedColour = this.style.backgroundColor;
            //compare colour to pickedColour
            if(clickedColour === pickedColour){
                changeColours(clickedColour)
                messageDisplay.textContent = "Correct!!"
                resetButton.textContent = "Play Again?"
                h1.style.backgroundColor = pickedColour
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = 'Try Again!'
            }
        });
    }
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
            reset();
        });
    } 
}

function reset(){
    //generate all new colours
    colours = generateRandomColours(numSquares);
    //pick new random colur from array
    pickedColour = pickColour();
    //change colourDisplay to match picked colour
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours"
    messageDisplay.textContent = "";
    //change colours of squares
    for(var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
            } else {
                squares[i].style.display = 'none';
            }
        }
        h1.style.backgroundColor = "steelblue";
    }

resetButton.addEventListener("click", function(){
    reset();
});
 
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