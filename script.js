var css = document.querySelector("h3")
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient")
var button = document.querySelector("button")


function setColor() {
	body.style.background= "linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";


}
function generateColors() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
color1.addEventListener("input", setColor)

color2.addEventListener("input", setColor)
	
button.addEventListener("click", function(){
	body.style.background= "linear-gradient(to right, "
	+generateColors()
	+", "
	+generateColors()
	+")";
	css.textContent = body.style.background + ";";
	
})

