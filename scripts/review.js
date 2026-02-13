const year = document.querySelector("#currentyear");
const today = new Date();
document.getElementById("lastModified").innerHTML = document.lastModified;
year.innerHTML = today.getFullYear();

const reviewsDisplay = document.querySelector(".reviews");
let numReviews = Number(window.localStorage.getItem("reviews-ls")) || 0;
numReviews++;
reviewsDisplay.textContent = numReviews;
localStorage.setItem("reviews-ls", numReviews);