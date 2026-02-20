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

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    localStorage.setItem('userName', nameValue);
    localStorage.setItem('userEmail', emailValue);
});

const storedName = localStorage.getItem('userName');
const storedEmail = localStorage.getItem('userEmail');

if (storedName) {
    document.getElementById('user-name').textContent = storedName;
}

if (storedEmail) {
    document.getElementById('user-email').textContent = storedEmail;
}

