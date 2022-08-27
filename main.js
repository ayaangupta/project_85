//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

greencar_x = 5;
greencar_y = 225;

greencar_width = 75;
greencar_height = 100;

canvas_width = canvas.getAttribute("width");
canvas_height = canvas.getAttribute("height");
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas_width, canvas_height);

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0){
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x, "y =" + greencar_y)
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	console.log(greencar_y);
	if(greencar_y <= canvas_height){
		greencar_y = greencar_y + 10;
		console.log("When down arrow is pressed, x =" + greencar_x, "y =" + greencar_y)
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(greencar_x >= 0){
		greencar_x = greencar_x - 10;
		console.log("When left arrow is pressed, x =" + greencar_x, "y =" + greencar_y)
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
if (greencar_x <= canvas_width){
	greencar_x = greencar_x + 10;
	console.log("When right arrow is preesed, x =" +greencar_x, "y =" + greencar_y)
	uploadBackground();
	uploadGreenCar();
}
}
