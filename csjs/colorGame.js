var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var  i =0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var  i =0; i<squares.length; i++)
	{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){
	// generate new colors
	colors = generateRandomColors(numberOfSquares);
	// pick new colors
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of square
	this.textContent = "New Colors";
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++)
{
	// add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click",function(){
		// grab color of clicked color
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}
function changeColors(color)
{
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
	
}
function pickColor()
{
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
}
function generateRandomColors(num)
{
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i<num; i++)
	{
		arr.push(randomColor());
		// get random color and push into arr
	}
	// return that array
	return arr;
}
function randomColor()
{
	// pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}