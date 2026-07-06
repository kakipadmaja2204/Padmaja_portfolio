// =============================
// Sticky Header
// =============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// =============================
// Active Navigation
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =============================
// Typing Animation
// =============================
const text = [
    "Software Engineer",
    "Python Developer",
    "Web Developer",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;
            type();

        }, 1500);

    } else {

        setTimeout(type, 120);

    }

})();

// =============================
// Reveal Animation
// =============================
const reveals = document.querySelectorAll(".card,.box,.project,.about-box,.skill");

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            item.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// =============================
// Animate Skill Bars
// =============================
const skills = document.querySelectorAll(".bar span");

window.addEventListener("scroll", () => {

    const skillSection = document.querySelector("#skills");

    if (!skillSection) return;

    const position = skillSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        skills.forEach(skill => {

            skill.style.width = skill.getAttribute("style").split(":")[1];

        });

    }

});

// =============================
// Scroll To Top Button
// =============================
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =============================
// Fade-in Home
// =============================
window.addEventListener("load", () => {

    document.querySelector(".home").classList.add("loaded");

});
