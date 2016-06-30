// add event listener for when click event ocurs on window

window.addEventListener("click", function(event){
	var test = Math.floor(Math.random()*2);
	var output = document.getElementById("output-target");
	if (test === 1) {
	    output.innerHTML = '<img src="pics/left_arrow.png" class="left" alt= "left_arrow">';
	} else {
		output.innerHTML = '<img src="pics/right_arrow.png" class= "right" alt= "right_arrow">';
	}
});
// The expression "Math.floor(Math.random()*2)"  Returns a random number between 0 and 1.











