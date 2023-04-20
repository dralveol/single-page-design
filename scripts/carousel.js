//Position index
let position = -2;
//Arrows selection
const right = document.querySelector("#right");
const left = document.querySelector("#left");
//Imgs selection
const imgs = Array.from(document.querySelectorAll(".work-section__slider img"));

//On click event
left.addEventListener("click", function(e){
	if(position<2) {
		position += 1
		imgs.forEach(function(element){
			element.style.transform = `translateX(${position * 65}vw)`}) 
	}
});

right.addEventListener("click", function(e){
	if(position>-2) {
		position -= 1
		imgs.forEach(function(element){
			element.style.transform = `translateX(${position * 65}vw)`}) 
	}
});

