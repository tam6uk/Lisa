var link_feedback = document.querySelector(".feedback-btn");
var popup_feedback = document.querySelector(".popup");
var popup_close = document.querySelector(".popup-close");
var overlay = document.querySelector(".overlay");
var slides = document.querySelectorAll(".slider-item");
var slides_control = document.querySelectorAll(".radio-label");
var slide_index = 0;
var form_feedback = popup_feedback.querySelector("form");
var input_name = document.querySelector("[name=name]");
var input_e_mail = document.querySelector("[name=e-mail]");
var input_message = document.querySelector("[name=message]");

link_feedback.addEventListener("click", function(event) {
	event.preventDefault();
	popup_feedback.classList.add("popup-show");
	overlay.classList.add("popup-show");
	input_name.focus();
})

popup_close.addEventListener("click", function(event) {
	event.preventDefault();
	popup_feedback.classList.remove("popup-show");
	overlay.classList.remove("popup-show");
	popup_feedback.classList.remove("popup-error");
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		popup_feedback.classList.remove("popup-show");
		overlay.classList.remove("popup-show");
		popup_feedback.classList.remove("popup-error");
	}
})

overlay.onclick = function() {
	popup_feedback.classList.remove("popup-show");
	overlay.classList.remove("popup-show");
	popup_feedback.classList.remove("popup-error");
}

form_feedback.addEventListener("submit", function(event){
	if (!input_name.value || !input_e_mail.value || !input_message.value) {
		event.preventDefault();
		popup_feedback.classList.remove("popup-error");
        popup_feedback.offsetWidth = popup_feedback.offsetWidth;
		popup_feedback.classList.add("popup-error");
	}
})

var slide_def = 0;
slides[slide_def].style.display="block";

function currentSlide(n) {
	for (var i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
		console.log("success");
	}
	slides[n].style.display = "block";
	console.log(n);
}

// for (var i = 0; i < slides_control.length; i++ ) {
// 	console.log(i);
// 	slides_control[i].onclick = currentSlide(i) {
// 		slides[i].style.display = "block";
// 		console.log(i);
// 	}
// }

