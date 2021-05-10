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


/* poke */
picDisplay = document.querySelectorAll('.picDisplay');
img = document.querySelectorAll('.picDisplay img');
span = document.querySelector('span');

picDisplay.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
        img[index].style.display = 'inline-block';
        span.style.display = 'none'
    })

});
picDisplay.forEach((element, index) => {
    element.addEventListener('mouseleave', () => {
        img[index].style.display = 'none';
        span.style.display = 'inline-block'
    })
});


/* games - chaser */
let chaser = document.querySelector('.chaser');
let box1 = document.querySelector(".box1");
let x = 0;
let y = 0;

box1.addEventListener('mousemove', mouseMoveCh, true);

function mouseMoveCh(e) {

    x = e.pageX;
    y = e.pageY;
    if (x <= 1160 && y <= 2390) {
        chaser.style.left = x + 'px';
        chaser.style.top = y + 'px';
    }
}


/* games -runner */
let runner = document.querySelector('.runner');
let box2 = document.querySelector(".box2");
let xr = 0;
let yr = 0;
let insideBox = false;

box2.addEventListener('mousemove', mouseMoveRun, true);
box2.addEventListener('mouseleave', () => {
    insideBox = false;
})

function mouseMoveRun(e) {
    insideBox = true;
    xr = e.pageX;
    yr = e.pageY;

    if (xr <= 1160 && yr <= 2900) {
        if (countDistance().x >= 25 && countDistance().x <= 50 && countDistance().y >= -50 && countDistance().y <= -25) {
            runner.style.left = (parseInt(getComputedStyle(runner).left) - 10) + 'px';
            runner.style.top = (parseInt(getComputedStyle(runner).top) + 10) + 'px';
        } else if (countDistance().x >= 0 && countDistance().x <= 50 && countDistance().y >= -25 && countDistance().y <= 25) {
            runner.style.left = (parseInt(getComputedStyle(runner).left) - 10) + 'px';
        } else if (countDistance().x >= 25 && countDistance().x <= 50 && countDistance().y >= 25 && countDistance().y <= 50) {
            runner.style.left = (parseInt(getComputedStyle(runner).left) - 10) + 'px';
            runner.style.top = (parseInt(getComputedStyle(runner).top) - 10) + 'px';
        } else if (countDistance().x >= -25 && countDistance().x <= 25 && countDistance().y >= 0 && countDistance().y <= 50) {
            runner.style.top = (parseInt(getComputedStyle(runner).top) - 10) + 'px';
        } else if (countDistance().x >= -50 && countDistance().x <= -25 && countDistance().y >= 25 && countDistance().y <= 50) {
            runner.style.left = (parseInt(getComputedStyle(runner).left) + 10) + 'px';
            runner.style.top = (parseInt(getComputedStyle(runner).top) - 10) + 'px';
        } else if (countDistance().x >= -50 && countDistance().x <= 0 && countDistance().y >= -25 && countDistance().y <= 25) {
            runner.style.left = (parseInt(getComputedStyle(runner).left) + 10) + 'px';
        } else if (countDistance().x >= -50 && countDistance().x <= -25 && countDistance().y >= -50 && countDistance().y <= -25) {
            runner.style.left = (parseInt(getComputedStyle(runner).left) + 10) + 'px';
            runner.style.top = (parseInt(getComputedStyle(runner).top) + 10) + 'px';
        } else if (countDistance().x >= -25 && countDistance().x <= 25 && countDistance().y >= -50 && countDistance().y <= 0) {
            runner.style.top = (parseInt(getComputedStyle(runner).top) + 10) + 'px';
        }
    }
}

function countDistance() {
    return {
        x: xr - parseInt(getComputedStyle(runner).left) - 25,
        y: yr - parseInt(getComputedStyle(runner).top) - 25
    };
}


/* games - chaser/ another solution */
// let chaser = document.querySelector('.chaser');
// let body = document.querySelector(".box1");
// let x = 0;
// let y = 0;
// body.addEventListener('mouseover', mouseMove);
// body.addEventListener('mouseleave', () => {
//     insideBox = false;
// })
// let insideBox = false;
//
// function mouseMove(e) {
//     insideBox = true;
//     console.log(insideBox);
// }
// document.onmousemove = trackMouse;
// function trackMouse(e){
//     if(insideBox){
//         chaser.style.left = e.pageX - 25 + 'px';
//         chaser.style.top = e.pageY - 25 + 'px';
//     }
// }

/* letters */


Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


let box = document.querySelector('.box');
let letters = document.querySelectorAll('.letter');
let newString = '';
box.addEventListener('keydown', removeCharacter);

function removeCharacter() {
    newString = box.replace('g', '');

    document.querySelector('.letter').textContent
        = newString;
}



