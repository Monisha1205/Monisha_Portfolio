
document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile navigation
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        const menuButton = document.createElement("button");

        menuButton.className = "menu-toggle";
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Toggle navigation");
        menuButton.setAttribute("aria-expanded", "false");

        navbar.appendChild(menuButton);

        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");
            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.innerHTML = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuButton.innerHTML = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. Automatic footer year
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML =
            `© ${new Date().getFullYear()} Monisha S | Data Analyst Portfolio`;
    }

    // 3. Scroll-to-top button
    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";
    topButton.className = "scroll-top";
    topButton.setAttribute("aria-label", "Scroll to top");

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 4. Section reveal animation
    const sections = document.querySelectorAll(".section");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        sections.forEach(function (section) {
            section.classList.add("reveal");
            observer.observe(section);
        });
    } else {
        sections.forEach(function (section) {
            section.classList.add("visible");
        });
    }

});
