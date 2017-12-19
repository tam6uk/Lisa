var link_feedback = document.querySelector(".feedback-btn");
var popup_feedback = document.querySelector(".popup");
var popup_close = document.querySelector(".popup-close");
var overlay = document.querySelector(".overlay")

link_feedback.addEventListener("click", function(event) {
	event.preventDefault();
	popup_feedback.classList.add("popup-show");
	overlay.classList.add("popup-show");
})

popup_close.addEventListener("click", function(event) {
	event.preventDefault();
	popup_feedback.classList.remove("popup-show");
	overlay.classList.remove("popup-show");
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		popup_feedback.classList.remove("popup-show");
		overlay.classList.remove("popup-show");
	}
})


