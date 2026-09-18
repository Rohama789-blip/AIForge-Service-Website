document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE MENU */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            const isOpen = navLinks.classList.contains("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );
        });

        const links = navLinks.querySelectorAll("a");

        links.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });
    }


    /* CONTACT FORM */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !service || !message) {

                formMessage.textContent =
                    "⚠️ Please complete all fields.";

                return;
            }

            formMessage.textContent =
                "✓ Thank you! Your inquiry has been submitted successfully.";

            contactForm.reset();

        });

    }

});