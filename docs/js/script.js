// SCROLL REVEAL ANIMATIONS
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        rows.forEach(row => {
            const elementTop = row.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                row.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// Sticky Navbar
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
});


//Back-to-Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


//Counter Stats Section
// Counter Animation
const counters = document.querySelectorAll(".count");
let started = false;

function startCounters() {
    if (started) return;

    if (window.scrollY + window.innerHeight >= document.querySelector(".stats").offsetTop) {
        counters.forEach(counter => {
            let target = +counter.dataset.target;
            let count = 0;
            let speed = target / 200;

            function update() {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            }
            update();
        });
        started = true;
    }
}

window.addEventListener("scroll", startCounters);


