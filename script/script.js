document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Open of sluit het menu wanneer op het icoon wordt geklikt
    hamburger.addEventListener('click', (event) => {
        menu.classList.toggle('open');
        event.stopPropagation(); // Voorkomt dat de klik ook het document-event triggert
    });

    // Sluit het menu wanneer ergens buiten het menu wordt geklikt
    document.addEventListener('click', (event) => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});