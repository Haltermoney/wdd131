const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

manuButton.addEventListener('click', () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const year = document.querySelector("#currentyear");
const today = new Date();
document.getElementById("lastModified").innerHTML = document.lastModified;
year.innerHTML = today.getFullYear();