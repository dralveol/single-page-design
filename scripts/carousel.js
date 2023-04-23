//Position index
let position = 0;
//Arrows selection
const right = document.querySelector("#right");
const left = document.querySelector("#left");
//Imgs selection
const imgs = Array.from(document.querySelectorAll(".work-section__slider img"));

//On click event
left.addEventListener("click", function(e){
	if(position<0) {
		position += 1
		imgs.forEach(function(element){
			let imageWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--image-width')) + 15;
			element.style.transform = `translateX(${position * imageWidth}px)`}) 
	}
});

right.addEventListener("click", function(e){
	if(position>-4) {
		position -= 1;
		imgs.forEach(function(element){
			let imageWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--image-width')) + 15;
			element.style.transform = `translateX(${position * imageWidth}px)`}) 
	}
});

