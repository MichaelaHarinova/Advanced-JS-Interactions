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
    setTimeout(showSlides, 2000);

}

showSlides();

const background = document.querySelector('.background');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if(scrollY !== 0) {
        background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
    } else {
        background.style.backgroundPosition = '';
    }
});
