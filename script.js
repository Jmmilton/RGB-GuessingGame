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
            alert('Correct!')
        } else {
            alert('Wrong!!!!!!!!!')
        }
    })
}

