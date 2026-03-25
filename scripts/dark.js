const mainNav = document.querySelector("nav.main-nav");

mainNav.addEventListener("click", function(ev) {
    const clicked = ev.target;

    if (clicked.tagName !== "A") {
        return;
    }

    ev.preventDefault();

    const value = clicked.textContent.toLowerCase();

    document.body.classList.remove("dark", "light");

    if (value.includes("light")) {
        document.body.classList.add("light");
    } else if (value.includes("dark")) {
        document.body.classList.add("dark");
    }
})