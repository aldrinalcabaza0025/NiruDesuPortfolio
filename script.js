
// =====================================
// 1. TYPING ANIMATION
// =====================================

const typingElement = document.getElementById("typing");

const words = [
    "I'm a BSIT Student",
    "I'm a Future IT Professional",
    "I'm a Future Web Developer",
    "I'm a Future Software Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    let currentWord = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingElement.textContent = currentWord.substring(0, letterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && letterIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    }

    else if (deleting && letterIndex === 0) {
        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();


// =====================================
// 2. DARK MODE / LIGHT MODE
// =====================================

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeButton.textContent = "🌙 Dark Mode";
        } else {
            themeButton.textContent = "☀️ Light Mode";
        }

    });

}


