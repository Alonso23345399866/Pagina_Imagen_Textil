console.log("Dropdowns activos");

document.querySelectorAll(".dropdown").forEach(drop => {
    const btn = drop.querySelector(".dropbtn");
    const menu = drop.querySelector(".dropdown-content");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        // Cierra los otros
        document.querySelectorAll(".dropdown-content").forEach(other => {
            if (other !== menu) {
                other.style.display = "none";
            }
        });

        // Muestra / oculta el seleccionado
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

// Cerrar si se hace click fuera
document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.style.display = "none";
    });
});
