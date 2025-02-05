// Search - Function
function search() {
    const query = document.getElementById('search-input').value.toLowerCase(); 

    const pageMap = {
        // General Pages
        'home': 'index.html',
        'main': 'index.html',
        'about': 'about.html',
        'info': 'about.html',
        'information': 'about.html',
        'contact': 'about.html',
        'reach us': 'about.html',
        'terms': 'termsOfUse.html',
        'terms of use': 'termsOfUse.html',
    
        // Media and Entertainment
        'liveinvader': 'dynamicChange.html?category=entertainment',
        'fame or shame': 'dynamicChange.html?category=entertainment',
        'vinewood': 'classicvinewood.html',
        'classic vinewood': 'classicvinewood.html',
        'classic': 'classicvinewood.html',
        'media': 'dynamicChange.html?category=entertainment',
        'entertainment': 'dynamicChange.html?category=entertainment',
        'film': 'dynamicChange.html?category=entertainment',
        'movies': 'dynamicChange.html?category=entertainment',
        'cinema': 'dynamicChange.html?category=entertainment',
        'tv': 'dynamicChange.html?category=entertainment',
        'music': 'dynamicChange.html?category=entertainment',
        'shows': 'dynamicChange.html?category=entertainment',

        // Food and Drinks
        'tacobomb': 'dynamicChange.html?category=food',
        'taco bomb': 'dynamicChange.html?category=food',
        'egochaser': 'dynamicChange.html?category=food',
        'mexican': 'dynamicChange.html?category=food',
        'food': 'dynamicChange.html?category=food',
        'drinks': 'dynamicChange.html?category=food',
        'drink': 'dynamicChange.html?category=food',
        'restaurant': 'dynamicChange.html?category=food',
        'cafe': 'dynamicChange.html?category=food',
        'bar': 'dynamicChange.html?category=food',
        'taco': 'dynamicChange.html?category=food',
        'snacks': 'dynamicChange.html?category=food',

        // Money Services
        'services': 'dynamicChange.html?category=money',
        'maze bank': 'dynamicChange.html?category=money',
        'lcn': 'dynamicChange.html?category=money',
        'lcn exchange': 'dynamicChange.html?category=money',
        'bawsaq': 'dynamicChange.html?category=money',
        'exchange': 'dynamicChange.html?category=money',
        'bank': 'dynamicChange.html?category=money',
        'investment': 'dynamicChange.html?category=money',
        'bank of liberty': 'dynamicChange.html?category=money',
        'krypto': 'dynamicChange.html?category=money',
        'service': 'dynamicChange.html?category=money',
        'money': 'dynamicChange.html?category=money',
        'finance': 'dynamicChange.html?category=money',
        'banking': 'dynamicChange.html?category=money',
        'investing': 'dynamicChange.html?category=money',
    
        // Travel and Transport
        'travel': 'dynamicChange.html?category=travel',
        'pandmcycles': 'dynamicChange.html?category=travel',
        'elitastravel': 'dynamicChange.html?category=travel',
        'docktease': 'dynamicChange.html?category=travel',
        'transport': 'dynamicChange.html?category=travel',
        'bike': 'dynamicChange.html?category=travel',
        'bicycle': 'dynamicChange.html?category=travel',
        'car': 'dynamicChange.html?category=travel',
        'cars': 'dynamicChange.html?category=travel',
        'rent': 'dynamicChange.html?category=travel',
        'trip': 'dynamicChange.html?category=travel',
        'flights': 'dynamicChange.html?category=travel',
        'vacation': 'dynamicChange.html?category=travel',
        'holidays': 'dynamicChange.html?category=travel',
        'journey': 'dynamicChange.html?category=travel',
        'ship': 'dynamicChange.html?category=travel',
        'harbour': 'dynamicChange.html?category=travel',
    
        // Log-In and Registration
        'login': 'logIn.html',
        'log in': 'logIn.html',
        'sign in': 'logIn.html',
        'signup': 'signUp.html',
        'sign up': 'signUp.html',
        'register': 'signUp.html',
        'registration': 'signUp.html',
    
        // anderes gewurschtel
        'menu': 'index.html',
        'search': 'index.html',
    };

    if (pageMap[query]) {
        window.location.href = pageMap[query];
    } else {
        window.location.href = 'nothingFound.html';
    }

    return false;
}
document.getElementById("random-button").addEventListener("click", function() {
    const subPages = [
        "index.html",
        "about.html",
        "termsOfUse.html",
        "classicvinewood.html",
        "dynamicChange.html?category=entertainment",
        "dynamicChange.html?category=food",
        "dynamicChange.html?category=money",
        "dynamicChange.html?category=travel",
        "dynamicSubsite.html?bg=demowebsite",
    ];
    const randomPage = subPages[Math.floor(Math.random() * subPages.length)];

    window.location.href = randomPage;
});
// Search - Suggestions - Function
const searchTerms = [
    "Liveinvader", "Fame or Shame", "Classic Vinewood", "Kung Fu Lazer Rainbow Force", "Entertainment", "Media", "TV", "Music", "Shows", "Cinema", "Movie",
    "Food", "Drinks", "Snacks", "Cafe", "Restaurant", "Taco Bomb", "Mexican Food", "Restaurant", "Egochaser", "The Grain of Truth", "Los Santos Freegans",     
    "Mazebank", "LCN Exchange", "Bank of Liberty", "Bawsaq", "Fleeca Bank", "Money", "Banking", "Investing", "Services", "Krypto", "finance", 
    "Elitas Travel", "Docktease", "Legendary Motorsport", "Souther San Andreas Super Autos", "Pandmcycles", "Flights", "Vacation", "Travel", "Car", "Journey", "Harbour", "Trip",
    "Home", "About", "Contact", "Terms of Use", "Log In", "Sign Up", "Registration", "Contact",
];
function showSuggestions() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");

    if (input === "") {
        suggestionsBox.innerHTML = "";
        suggestionsBox.style.display = "none";
        return;
    }
    const filtered = searchTerms.filter(term => term.toLowerCase().startsWith(input));
    if (filtered.length === 0) {
        suggestionsBox.innerHTML = "";
        suggestionsBox.style.display = "none";
        return;
    }
    suggestionsBox.innerHTML = filtered.map(term => `<div onclick="selectSuggestion('${term}')">${term}</div>`).join("");
    suggestionsBox.style.display = "block";
}
function selectSuggestion(value) {
    document.getElementById("search-input").value = value;
    document.getElementById("suggestions").innerHTML = "";
    document.getElementById("suggestions").style.display = "none";
}



// Log - In - Function
function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userData = localStorage.getItem("user_" + username);

    if (userData) {
        const parsedUserData = JSON.parse(userData);

        if (parsedUserData.password === password) {
            console.log("Login successful for user:", username);
            localStorage.setItem("loggedInUser", username);
            alert("Login successful!");

            if (parsedUserData.role === "admin") {
                window.location.href = "admin.html";
            } else {
                window.location.href = "notifications.html";
            }
        } else {
            alert("Invalid username or password.");
        }
    } else {
        alert("Invalid username or password.");
    }
}

function checkAccess() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("You need to log in to access this page.");
        window.location.href = "logIn.html";
        return false;
    }
    return true;
}




// Sign - Up - Function
function handleSignUp(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const mailAddress = document.getElementById("mailAddress").value;
    const password = document.getElementById("password").value;

    const role = username.toLowerCase() === "raphael" ? "admin" : "user";

    const userData = {
        username: username,
        mailAddress: mailAddress,
        password: password,
        role: role
    };

    localStorage.setItem("user_" + username, JSON.stringify(userData));

    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    successMessage.textContent = `Account created successfully!`;

    document.getElementById("username").value = "";
    document.getElementById("mailAddress").value = "";
    document.getElementById("password").value = "";
    var delayInMilliseconds = 1500;
    setTimeout(function() {
        window.location.href = "logIn.html";
    }, delayInMilliseconds);
}

function updateAuthButton() {
    const authButton = document.getElementById("auth-button");
    if (!authButton) return;

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        authButton.href = "#";
        authButton.innerHTML = `<img src="./sources/Website-Logos/log-out.png" alt="Log Out Icon" class="login-icon">`;
        authButton.onclick = logout;
    } else {
        authButton.href = "signUp.html"; // geht nicht zurück auf logIn.html --> fixen 
        authButton.innerHTML = `<img src="./sources/Website-Logos/log-in.png" alt="Log In Icon" class="login-icon">`;
        authButton.onclick = null;
    }
}




// Logout 
function logout() {
    localStorage.removeItem("loggedInUser");
    console.log("User logged out.");
    alert("You have been logged out.");
    updateAuthButton();
    window.location.href = "logIn.html"
}
window.addEventListener("load", updateAuthButton);




// Notification - Icon - Function (geht überall)
function updateNotificationIcon() {
    const notificationIcon = document.querySelector(".notification-icon");
    if (!notificationIcon) return;

    const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    const hasNotifications = savedNotifications.length > 0;

    notificationIcon.src = hasNotifications ?
        "./sources/Website-Logos/new-notification-bell.png" :
        "./sources/Website-Logos/notification-bell.png";
}
document.addEventListener("DOMContentLoaded", updateNotificationIcon);




// Weather - Function
const apiKey = '7716dcaba5bb54a5916ce9f71fee2cdc';
const city = 'Los Angeles';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const description = data.weather[0].description;
        const formattedDescription = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById('weather-description').textContent = formattedDescription;
        document.getElementById('weather-temp').textContent = data.main.temp.toFixed(1);
        document.getElementById('weather-feels-like').textContent = data.main.feels_like.toFixed(1);
        document.getElementById('weather-humidity').textContent = data.main.humidity;

        const iconCode = data.weather[0].icon;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    } catch (error) {
        console.error('Error retrieving weather data:', error);
    }
}
window.onload = fetchWeather;




// Darkmode - Function
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkmode-toggle");
    const body = document.body;
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        nav.classList.add("dark-mode");
        main.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }
    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            nav.classList.remove("dark-mode");
            main.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        } else {
            body.classList.add("dark-mode");
            nav.classList.add("dark-mode");
            main.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        }
    });
});




// Navigation - Menue - Function ... oder so
const content = {
    entertainment: [{
            img: "sources/Website-Logos/liveinvader.png",
            title: "www.liveinvader.com",
            description: "Publish the private - although nobody cares.",
            link: "./liveInvader.html",
        },
        {
            img: "sources/Website-Logos/classicvinevood.png",
            title: "www.classicvinewood.com",
            description: "Sequels, remakes, superheroes, CGI nonsense and one-dimensional androgynous vampires.",
            link: "./classicvinewood.html",
        },
        {
            img: "sources/Website-Logos/fameorshame.png",
            title: "www.fameorshame.net",
            description: "The casting show that America deserves.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/kungfurainbowlazerforce.png",
            title: "www.kungfurainbowlazerforce.net",
            description: "The fourth best show from Japan is back.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
    ],
    food: [{
            img: "sources/Website-Logos/tacobomb.png",
            title: "www.tacobomb.com",
            description: "Taco Bomb is Mexican food, prepared the right way: the American way.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/egochaser.png",
            title: "www.egochaser.com",
            description: "The EgoChaser is the result of weeks of intensive research into sports nutrition.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/thegrainoftruth.png",
            title: "www.thegrainoftruth.com",
            description: "Organic food market with harmful pesticides.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/loassantosfreegans.png",
            title: "www.loassantosfreegans.com",
            description: "America throws away 500 billion tons of edible food every day. We plan to eat it all!",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
    ],
    money: [{
            img: "sources/Website-Logos/mazebank.png",
            title: "www.mazebank.com",
            description: "Maze Bank of Los Santos",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/libertycitynational.png",
            title: "www.lcn-exchange.com",
            description: "The stock market main of Liberty City.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/bankofliberty.png",
            title: "www.bankofliberty.com",
            description: "The bank of liberty.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/bawsaq.png",
            title: "www.bawsaq.com",
            description: "The ups and downs of life - our commodity.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/fleecabank.png",
            title: "www.fleecabank.com",
            description: "We can help you have less of your money.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
    ],
    travel: [{
            img: "sources/Website-Logos/elitastravel.png",
            title: "www.elitastravel.com",
            description: "Take a look at our range of new and used aircraft.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/docktease.png",
            title: "www.docktease.com",
            description: "Simply buy a boat today!",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/legendarymotorsport.png",
            title: "www.legendarymotorsport.com",
            description: "We sell exotic, pretentious high-performance cars to exotic, pretentious high-performance people.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/southersanandreassuperautos.png",
            title: "www.southersanandreassuperautos.com",
            description: "Sammy Keller and the entire Southern San Andreas Super Autos team are ready to satisfy your automotive needs.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
        {
            img: "sources/Website-Logos/pandmcycles.png",
            title: "www.pandmcycles.com",
            description: "The premium bike store for bike enthusiasts in San Andreas.",
            link: "./dynamicSubsite.html?bg=demowebsite",
        },
    ],
};

const categoryTitles = {
    entertainment: "Media & Entertainment",
    food: "Food & Drink",
    money: "Money & Services",
    travel: "Travel & Transport",
};

function loadContent(category) {
    const container = document.getElementById("tile-container");
    const titleElement = document.getElementById("category-title");

    const newUrl = `?category=${category}`;
    window.history.pushState({}, "", newUrl);

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
    });

    const activeLink = document.querySelector(`.nav-links a[onclick="loadContent('${category}')"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }

    if (categoryTitles[category]) {
        titleElement.textContent = `Results for: ${categoryTitles[category]}`;
    }
    container.innerHTML = "";

    content[category].forEach(item => {
        const tile = document.createElement("a");
        tile.className = "tile";
        if (item.link === "./liveInvader.html") {
            tile.setAttribute("onclick", "return checkAccess()");
        }
        tile.href = item.link;
        tile.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="tile-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        container.appendChild(tile);
    });
}
const category = new URLSearchParams(window.location.search).get("category") || "entertainment";
loadContent(category);
