const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener('click', () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const year = document.querySelector("#currentyear");
const today = new Date();
document.getElementById("lastModified").innerHTML = document.lastModified;
year.innerHTML = today.getFullYear();