Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


/* dark mode switch */
document.querySelector(".mode").addEventListener("click", switchToDark);

function switchToDark() {
    let element = document.body;
    element.classList.toggle("darkMode");
}

/* automatic carousel */
let slideIndex = 0;

function showSlides() {

    let slides = document.querySelectorAll(".images");


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);

}

showSlides();

/* cards collage */
let cardImgDisplay = document.querySelector(".cardImgDisplay");
let cardImgLarge = document.querySelector(".cardImgLarge");
let imgDescription = document.getElementById("imgDescription");

document.querySelectorAll(".card").forEach(element => {
    element.addEventListener("click", event => {
        cardImgDisplay.style.display = "block";
        cardImgLarge.src = event.target.src;
        imgDescription.innerHTML = event.target.alt;
    });
});
document.querySelector(".close").addEventListener("click", () => {
    cardImgDisplay.style.display = "none";
});

/* games - chaser */
let chaser = document.querySelector('.chaser');
let body = document.querySelector(".box");
let x = 0;
let y = 0;

body.addEventListener('mousemove', mouseMove, false);

function mouseMove(e) {

    x = e.pageX;
    y = e.pageY;
    //  body.animate({left: x, top: y}, 1);
    chaser.style.left = x + 'px';
    chaser.style.top = y + 'px';

}
