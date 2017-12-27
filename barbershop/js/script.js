var link_log = document.querySelector(".login");
var link_map = document.querySelector(".js-map-open");
var link_log_close = document.querySelector("#js-poplog-close");
var link_map_close = document.querySelector("#js-popmap-close");
var popup_log = document.querySelector(".popup-log");
var popup_map = document.querySelector(".popup-map");
var overlay = document.querySelector(".overlay");
var form = popup_log.querySelector("form");
var input_log = form.querySelector("[name=login]");
var input_pass = form.querySelector("[name=password]");
var gallery = document.querySelectorAll(".gallery-content");
var gallery_prev = document.querySelector(".gallery-prev");
var gallery_next = document.querySelector(".gallery-next");
var gallery_img_index = 0;
var storage_log = localStorage.getItem("login");

link_log.addEventListener("click", function(event) {
    event.preventDefault();
    popup_log.classList.add("popup-show");
    overlay.classList.add("show");
    if (storage_log) {
        input_log.value = storage_log;
        input_pass.focus();
    } else {
        input_log.focus();
    }
      
})

link_log_close.addEventListener("click", function(event) {
    event.preventDefault();
    popup_log.classList.remove("popup-show");
    overlay.classList.remove("show");
     popup_log.classList.remove("popup-error");
})

window.addEventListener("keydown", function(event) {
    if ((event.keyCode === 27) && (popup_log.classList.contains("popup-show"))) {
        popup_log.classList.remove("popup-show");
        overlay.classList.remove("show");
        popup_log.classList.remove("popup-error");
    }
})

form.addEventListener("submit", function(event) {
    if (!input_log.value || !input_pass.value) {
        event.preventDefault();
        popup_log.classList.remove("popup-error");
        popup_log.offsetWidth = popup_log.offsetWidth;
        console.log("dhrgs");
        popup_log.classList.add("popup-error");
    } else {
        localStorage.setItem("login", input_log.value);
    }
})

overlay.onclick = function() {
    popup_log.classList.remove("popup-show");
    overlay.classList.remove("show");
    popup_map.classList.remove("show");
    popup_log.classList.remove("popup-error");
}

link_map.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.add("show");
    overlay.classList.add("show");
})

link_map_close.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.remove("show");
    overlay.classList.remove("show");
})

window.addEventListener("keydown", function(event) {
    if ((event.keyCode === 27) && (popup_map.classList.contains("popup-show"))) {
        popup_map.classList.remove("show");
        overlay.classList.remove("show");
    }               
})

gallery_next.onclick = function(event) {
    event.preventDefault();
    gallery[gallery_img_index].style.display = "none";
    gallery_img_index++;
    if (gallery_img_index >= gallery.length){
        gallery_img_index = 0;
    }
    gallery[gallery_img_index].style.display = "block";    
}

gallery_prev.onclick = function(event) {
    event.preventDefault();
    gallery[gallery_img_index].style.display = "none";
    gallery_img_index--;
    if (gallery_img_index < 0){
        gallery_img_index = (gallery.length - 1);
    }
    gallery[gallery_img_index].style.display = "block";    
}