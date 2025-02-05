// Website of the Minute (WOTM) 
const wotmWebsites = [
    {
        img: "./sources/Website-Logos/egochaser.png",
        description1: "Get <span style='font-weight:bold; font-size: 20px;'>BIG</span> muscles like Schwarzenegger...",
        description2: "So visit Ego Chaser right now!",
        link: "../dynamicSubsite.html?bg=demowebsite",
    },
    {
        img: "./sources/Website-Logos/fameorshame.png",
        description1: "The ultimate talent show - will you be famous or <span style='font-weight:bold; font-size: 18px;'>shamed</span>?",
        description2: "So visit Fame or Shame right now!",
        link: "../dynamicSubsite.html?bg=demowebsite",
    },
    {
        img: "./sources/Website-Logos/liveinvader.png",
        description1: "Share your private life online with the world, <span style='font-weight:bold; font-size: 18px;'>nobody</span> cares.",
        description2: "So visit Liveinvader right now!",
        link: "../liveinvader.html",
    },
    {
        img: "./sources/Website-Logos/docktease.png",
        description1: "Sail away with our boats — the ocean keeps no secrets!",
        description2: "So visit Docktease right now!",
        link: "../dynamicSubsite.html?bg=demowebsite",
    },
    {
        img: "./sources/Website-Logos/mazebank.png",
        description1: "Banking for the corrupt and the rich.",
        description2: "So visit Mazebank now!",
        link: "../dynamicSubsite.html?bg=demowebsite",
    }
];
const randomIndex = Math.floor(Math.random() * wotmWebsites.length);
const randomWebsite = wotmWebsites[randomIndex];

document.getElementById("wotm-img").src = randomWebsite.img;
document.getElementById("wotm-description1").innerHTML = randomWebsite.description1;
document.getElementById("wotm-description2").innerHTML = randomWebsite.description2;
const wotmLink = document.getElementById("wotm-link");

if (randomWebsite.link === "../liveinvader.html") {
    wotmLink.setAttribute("onclick", "return checkAccess()");
}
wotmLink.href = randomWebsite.link;
