var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColors();
var colorDisplay = document.getElementById("colorDisplay");
var resultDisplay = document.getElementById("result");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("newColors")
var easyButton = document.getElementById("easy")
var hardButton = document.getElementById("hard")


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		// compare color to pickedColor
		if (clickedColor === pickedColor){
			resultDisplay.textContent = "Correct!";
			resetButton.textContent = "Play again?"
			changeColors(clickedColor);
			this.classList.add("correct");
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#282935";
			resultDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color 
		squares[i].style.backgroundColor = color;
	}
}

function pickColors(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// red 0 - 255
	var r = Math.floor(Math.random() * 256);
	// green
	var g = Math.floor(Math.random() * 256);
	// blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	h1.style.backgroundColor = "#2F3254";
	for(i = 0; i < squares.length; i++ ){
		squares[i].classList.remove("correct");
	}
	resultDisplay.textContent = " ";
	resetButton.textContent = "new colors";
}

resetButton.addEventListener("click", function(){
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColors();
	// change colorDisplay
	colorDisplay.textContent = pickedColor;
	// change colors of new squares
	for(i = 0; i < squares.length; i++ ){
		squares[i].style.backgroundColor = colors[i];
	};
	// remove class from correct square and h1
	reset();
})

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColors();
	for(i = 0; i < squares.length; i++ ){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	};
	reset()
})

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColors();
	for(i = 0; i < squares.length; i++ ){
		squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	};
	reset();
})














