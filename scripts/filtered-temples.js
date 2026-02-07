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

const temple = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Deseret Peak Utah",
        location: "Tooele, Utah",
        dedicated: "2024, November, 10",
        area: 71998,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/deseret-peak-utah-temple/deseret-peak-utah-temple-54400-main.jpg"
    },
    {
        templeName: "Palmyra New York",
        location: "Palmyra, New York",
        dedicated: "2000, April, 6",
        area: 10900,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg"
    },
    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "2022, October, 16",
        area: 45251,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg"
    },
    {
        templeName: "Kona Hawaii",
        location: "Kailua Kona, Hawaii",
        dedicated: "2000, January, 24",
        area: 12325,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 24",
        area: 382207,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    }

];

const container = document.querySelector("#photo-album");

function displayTemples(templeList) {
    container.innerHTML = "";

    templeList.forEach(temple => {

        let card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

displayTemples(temple);

document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temple.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temple.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temple.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temple.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

document.querySelector("#all").addEventListener("click", () => {
    displayTemples(temple);
});