let numSquares = 6;
let colours = generateRandomColours(numSquares);
const squares = document.querySelectorAll(".square");
let pickedColour = pickColour();
const colourDisplay = document.getElementById('colourDisplay')
let messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1")
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for(var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
})
hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colours[i];
            squares[i].style.display = 'block';
        }
})

resetButton.addEventListener("click", function(){
    //generate all new colours
    colours = generateRandomColours(numSquares);
    //pick new random colur from array
    pickedColour = pickColour();
    //change colourDisplay to match picked colour
    colourDisplay.textContent = pickedColour;
    //change colours of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "#232323"
})

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
            resetButton.textContent = "Play Again?"
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