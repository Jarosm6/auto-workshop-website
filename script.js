//slideshow
let index = 0;
function changeSlide() {
    let slides = document.querySelectorAll('.slide');
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
setInterval(changeSlide, 3000);


document.addEventListener("DOMContentLoaded", function () {
    //modale
    let modalAbout = document.getElementById("modal-about");
    let modalContact = document.getElementById("modal-contact");

  
    let aboutLink = document.querySelector("nav ul li a[href='Onas.html']");
    let contactLink = document.querySelector("nav ul li a[href='Kontakt.html']");

 
    let closeBtns = document.querySelectorAll(".close");

    // Kliknięcie w "O nas" otwiera
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        modalAbout.style.display = "block";
    });

    // Kliknięcie w "Kontakt" otwiera
    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        modalContact.style.display = "block";
    });

    // Zamykanie modali po kliknięciu w "X"
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            modalAbout.style.display = "none";
            modalContact.style.display = "none";
        });
    });

    // Kliknięcie poza okienkiem zamyka modal
    window.addEventListener("click", function (event) {
        if (event.target === modalAbout) {
            modalAbout.style.display = "none";
        }
        if (event.target === modalContact) {
            modalContact.style.display = "none";
        }
    });
});
