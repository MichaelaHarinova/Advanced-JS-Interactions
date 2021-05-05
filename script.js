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
    setTimeout(showSlides, 4000);

}

showSlides();

