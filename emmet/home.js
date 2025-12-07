let slideIndex = 1;
let slideTimer;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].className += " active";
    clearTimeout(slideTimer);
    slideTimer = setTimeout(function() { plusSlides(1); }, 4000); // Change image every 4 seconds
}

function sendMessage() {
    let msg = document.getElementById("msgInput").value;
    let messagesDiv = document.getElementById("messages");
    let newMsg = document.createElement("p");
    newMsg.textContent = "You: " + msg;
    messagesDiv.appendChild(newMsg);
    document.getElementById("msgInput").value = "";
}
