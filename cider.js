document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#fff";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#ffcc00";
    });
});
