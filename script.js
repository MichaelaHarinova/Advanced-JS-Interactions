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

    xr = e.pageX;
    yr = e.pageY;

    let endW = 1160;
    let startW = 50;
    let startH = 2625;
    let endH = 2950;

    /* right top -> left bottom */
    if (countDistance().x >= 25 && countDistance().x <= 50 && countDistance().y >= -50 && countDistance().y <= -25) {
        if (parseInt(getComputedStyle(runner).left) - 10 <= startW + 25) {
            runner.style.left = 75 + 'px';
        } else {
            runner.style.left = (parseInt(getComputedStyle(runner).left) - 10) + 'px';
        }
        if (parseInt(getComputedStyle(runner).top) + 10 >= endH - 25) {
            runner.style.top = 2925 + 'px';
        } else {
            runner.style.top = (parseInt(getComputedStyle(runner).top) + 10) + 'px';
        }
    }

    /* right middle -> left middle */
    else if (countDistance().x >= 0 && countDistance().x <= 50 && countDistance().y >= -25 && countDistance().y <= 25) {
        if (parseInt(getComputedStyle(runner).left) - 10 <= startW + 25) {
            runner.style.left = 75 + 'px';
        } else {
            runner.style.left = (parseInt(getComputedStyle(runner).left) - 10) + 'px';
        }
    }

    /* right bottom -> left top */
    else if (countDistance().x >= 25 && countDistance().x <= 50 && countDistance().y >= 25 && countDistance().y <= 50) {
        if (parseInt(getComputedStyle(runner).left) - 10 <= startW + 25) {
            runner.style.left = 75 + 'px';
        } else {
            runner.style.left = (parseInt(getComputedStyle(runner).left) - 10) + 'px';
        }
        if (parseInt(getComputedStyle(runner).top) + 10 <= startH + 25) {
            runner.style.top = 2650 + 'px';
        } else {
            runner.style.top = (parseInt(getComputedStyle(runner).top) - 10) + 'px';
        }
    }

    /* middle bottom -> middle top */
    else if (countDistance().x >= -25 && countDistance().x <= 25 && countDistance().y >= 0 && countDistance().y <= 50) {
        if (parseInt(getComputedStyle(runner).top) + 10 <= startH + 25) {
            runner.style.top = 2650 + 'px';
        } else {
            runner.style.top = (parseInt(getComputedStyle(runner).top) - 10) + 'px';
        }
    }

    /* left bottom -> right top */
    else if (countDistance().x >= -50 && countDistance().x <= -25 && countDistance().y >= 25 && countDistance().y <= 50) {
        if (parseInt(getComputedStyle(runner).left) - 10 >= endW - 25) {
            runner.style.left = 1135 + 'px';
        } else {
            runner.style.left = (parseInt(getComputedStyle(runner).left) + 10) + 'px';
        }
        if (parseInt(getComputedStyle(runner).top) + 10 <= startH + 25) {
            runner.style.top = 2650 + 'px';
        } else {
            runner.style.top = (parseInt(getComputedStyle(runner).top) - 10) + 'px';
        }
    }
    /* middle left -> middle right */
    else if (countDistance().x >= -50 && countDistance().x <= 0 && countDistance().y >= -25 && countDistance().y <= 25) {
        if (parseInt(getComputedStyle(runner).left) - 10 >= endW - 25) {
            runner.style.left = 1135 + 'px';
        } else {
            runner.style.left = (parseInt(getComputedStyle(runner).left) + 10) + 'px';
        }
    }

    /* left top -> right bottom */
    else if (countDistance().x >= -50 && countDistance().x <= -25 && countDistance().y >= -50 && countDistance().y <= -25) {
        if (parseInt(getComputedStyle(runner).left) - 10 >= endW - 25) {
            runner.style.left = 1135 + 'px';
        } else {
            runner.style.left = (parseInt(getComputedStyle(runner).left) + 10) + 'px';
        }
        if (parseInt(getComputedStyle(runner).top) + 10 >= endH - 25) {
            runner.style.top = 2925 + 'px';
        } else {
            runner.style.top = (parseInt(getComputedStyle(runner).top) + 10) + 'px';
        }
    }

    /* middle top -> middle bottom */
    else if (countDistance().x >= -25 && countDistance().x <= 25 && countDistance().y >= -50 && countDistance().y <= 0) {
        if (parseInt(getComputedStyle(runner).top) + 10 >= endH - 25) {
            runner.style.top = 2925 + 'px';
        } else {
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
    el.addEventListener('mouseenter', () => {
        el.style.transition = '0';
        el.style.transform = '';
        setTimeout(() => {
            el.style.transition = '1s';
            el.style.transform = 'rotateY(360deg) rotateX(360deg)';
            el.style.color = randomColor();
            el.style.fontSize = randomSize();
        }, 200);
    })
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function randomColor(){
    let value_1 = (Math.floor(Math.random() * 256));
    let value_2 = (Math.floor(Math.random() * 256));
    let value_3 = (Math.floor(Math.random() * 256));

    return 'rgb' + '(' + value_1 + " ," + value_2 + " ," + value_3 + ')';
}

function randomSize(){
    let size = (Math.floor(Math.random() * 50));

    return size + 'px';
}









