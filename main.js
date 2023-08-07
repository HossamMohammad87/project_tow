const myToggelMenu = document.getElementById("toggle-menu");
const humbergarMenu = document.getElementById("menu");
let humbergarStatus = false;

myToggelMenu.addEventListener("click", () => {
    if (!humbergarStatus) {
        humbergarMenu.style.transform = "translateX(0)";
        humbergarStatus = true;
        myToggelMenu.classList.add("close-menu");
    } else {
        humbergarMenu.style.transform = "translateX(100%)";
        humbergarStatus = false;
        myToggelMenu.classList.remove("close-menu");
    }
});

const myNavLinks = document.querySelectorAll(".home ul#menu li");

myNavLinks.forEach((link) => {
    const myHash = link.querySelector("a").hash;
    link.addEventListener("click", () => {
        myToggelMenu.classList.remove("close-menu");
        humbergarMenu.style.transform = "translateX(100%)";
        window.location.hash = myHash;
    });
});