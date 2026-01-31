const year = document.querySelector("#currentyear");

const today = new Date();

document.getElementById("lastModified").innerHTML = document.lastModified;

year.innerHTML = today.getFullYear();

const calculateWindChill = (t, s) => (t > 10 || s < 4.8) ? "N/A" : Math.round((13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)) * 100) / 100;

const currentTemp = 29;
const currentSpeed = 10;
const result = calculateWindChill(currentTemp, currentSpeed);

document.getElementById('windChillDisplay').innerText = result;
document.getElementById('temp').innerText = currentTemp;
document.getElementById('speed').innerText = currentSpeed;