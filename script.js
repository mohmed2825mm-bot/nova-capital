// =========================
// NAVBAR
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =========================
// CONTACT FORM → WHATSAPP
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please complete all fields.";

        return;
    }


    // WhatsApp number
    const whatsappNumber = "201271435736";


    // Message sent to WhatsApp
    const whatsappMessage =
        "Hello NOVA Capital,%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A%0A" +
        "Project Details:%0A" +
        encodeURIComponent(message);


    // WhatsApp URL
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;


    // Open WhatsApp
    window.open(
        whatsappURL,
        "_blank"
    );


    // Success message
    formMessage.textContent =
        "Opening WhatsApp...";


    // Clear form
    contactForm.reset();

});


// =========================
// REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach(section => {

    observer.observe(section);

});
