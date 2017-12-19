var link_log = document.querySelector(".login");
var link_map = document.querySelector(".map-open");
var link_log_close = document.querySelector("#js-poplog-close");
var link_map_close = document.querySelector("#js-popmap-close");
var popup_log = document.querySelector(".popup-log");
var popup_map = document.querySelector(".popup-map");
var overlay = document.querySelector(".overlay")

link_log.addEventListener("click", function(event) {
    event.preventDefault();
    popup_log.classList.add("popup-show");
    overlay.classList.add("popup-show")
});

link_log_close.addEventListener("click", function(event) {
    event.preventDefault();
    popup_log.classList.remove("popup-show");
    overlay.classList.remove("popup-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        popup_log.classList.remove("popup-show");
        overlay.classList.remove("popup-show");
    }
});

link_map.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.add("popup-show");
    overlay.classList.add("popup-show");
});

link_map_close.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.remove("popup-show");
    overlay.classList.remove("popup-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        popup_map.classList.remove("popup-show");
        overlay.classList.remove("popup-show");
    }               
})