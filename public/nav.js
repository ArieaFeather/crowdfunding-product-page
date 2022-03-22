// HAMBURGER MENU
let navigation = document.querySelector(".nav-bar");
let bars = document.querySelectorAll("b");
let burgerButton = document.getElementById("hamburg-menu");

burgerButton.onclick = () => {
    for (let i = 0; i < bars.length; i++) {
        if (bars[i].classList.contains("burger-active")) {
            bars[i].classList.remove("burger-active");
            navigation.classList.remove("dropdown");
        } else {
            bars[i].classList.add("burger-active");
            navigation.classList.add("dropdown");
        }
    }
};
