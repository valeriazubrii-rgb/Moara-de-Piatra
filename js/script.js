function mobileMenu() {
    var x = document.getElementsByTagName("navbar") [0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

function toggleDark() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('dark-toggle');
    if (document.body.classList.contains('dark')) {
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Aplică tema salvată la încărcarea paginii
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('dark-toggle').textContent = '☀️';
    }
});

let images = [
        "../images/slide1.jpg", 
        "../images/slide2.jpg",
        "../images/slide3.jpg",
    ];
let index = 0;

function showSlide() {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

// SWIPE (telefon)
let startX = 0;
const slideImg = document.getElementById("slide");

slideImg.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

slideImg.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;

    if (startX > endX + 50) nextSlide(); // swipe stânga
    if (startX < endX - 50) prevSlide(); // swipe dreapta
});

let autoSlide = setInterval(nextSlide, 3000);
