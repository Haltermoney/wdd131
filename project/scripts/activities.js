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

const hotelData = [
    {
        name: "The Nautical Beachfront Resort",
        address: "1000 McCulloch Blvd N, Lake Havasu City, Arizona, United States, 86403",
        website: "www.nauticalbeachfrontresort.com",
        url: "www.nauticalbeachfrontresort.com",
        description: "Conveniently located on the island; must cross over the famous London Bridge. This is the only beachfront property in the state of Arizona."
    },
    {
        name: "Havasu Landing Resort and Casino",
        address: "13145 Havasu Lake Rd, Havasu Lake, CA, 92363",
        website: "havasulandingresortcasino.com",
        url: "https://havasulandingresortcasino.com/",
        description: "Located on the California side of Lake Havasu; This hotel and casino is right on the water and just a short ferry ride into town."
    },
    {
        name: "London Bridge Resort",
        address: "2345 Main",
        website: "www.londonbridgeresort.com",
        url: "https://www.londonbridgeresort.com/",
        description: "Centrally located on the Bridgewater Channel adjacent to the London Bridge. Enjoy the amenities and the lake."
    }
];

const restaurantData = [
    {
        name: "Azul Agave",
        address: "1561 Palo Verde Blvd S, Lake Havasu City, AZ 86403",
        website: "azulagaveaz.com",
        url: "https://azulagaveaz.com/",
        description: "Azul Agave is a local, family-owned restaurant featuring authentic Mexican dishes crafted from our family’s cherished recipes."
    },
    {
        name: "Sam's Place",
        address: "362 London Bridge Rd, Lake Havasu City, AZ 86403",
        website: "samsplacehavasu.com",
        url: "samsplacehavasu.com",
        description: "Casual diner serving familiar eggs and steak, plus pancakes and biscuits and gravy."
    },
    {
        name: "Red Baron Wings and Pizza",
        address: "125 Paseo del Sol Ave, Lake Havasu City, AZ 86403",
        website: "redbaronwingspizza.com",
        url: "redbaronwingspizza.com",
        description: "Pizza, wings, and salads highlight the menu at this laid-back haunt."
    }
];

function displayCards(dataList, containerId, cardClass) {
    const container = document.querySelector(containerId);

    if (!container) return;

    container.innerHTML = "";

    dataList.forEach(item => {
        let card = document.createElement("section");
        card.classList.add(cardClass);

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Address:</strong> ${item.address}</p>
            <p><strong>Website:</strong> <a href="${item.url}" target="_blank">${item.website}</a></p>
            <p>${item.description}</p>
        `;

        container.appendChild(card);
    })
}

const container = document.querySelector("#hotels");

function displayHotels(hotelList) {
    container.innerHTML = "";

    hotelList.forEach(hotel => {

        let card = document.createElement("section");
        card.classList.add("hotel-card");

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Address:</strong> ${item.address}</p>
            <p><strong>Website:</strong> <a href="${item.url}" target="_blank">${item.website}</a></p>
            <p>${item.description}</p>
        `;

        container.appendChild(card);
    });
}

displayCards(hotelData, "#hotels", "hotel-card");
displayCards(restaurantData, "#restaurants", "restaurant-card");