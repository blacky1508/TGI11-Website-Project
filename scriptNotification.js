// Notification Function
const NotificationSystem = (() => {
    const container = document.getElementById("notification-container");

    // Alle möglichen Benachrichtigungen mit Links 
    const notifications = [
        { message: "Learn how to display EyeFind.info correctly!", img: "./sources/Website-Logos/eyefind-logo.png", link: "./about.html", id: "firstNotification" },
        { message: "Check out our new feature!", img: "./sources/Website-Logos/eyefind-logo.png", link: "./index.html" },
        { message: "You have a 20% discount waiting for you!", img: "./sources/Website-Logos/tacobomb.png", link: "./dynamicSubsite.html?bg=demowebsite" },
        { message: "New blog post published by Tanisha Jackson!", img: "./sources/Website-Logos/liveinvader.png", link: "./liveInvader.html" },
        { message: "New blog post published by Lamar Davis!", img: "./sources/Website-Logos/liveinvader.png", link: "./liveInvader.html" },
        { message: "Special offer just for you!", img: "./sources/Website-Logos/legendarymotorsport.png", link: "./dynamicSubsite.html?bg=demowebsite" },
    ];

    let sentNotifications = [];

    function add(notification) {
        if (sentNotifications.some(n => n.message === notification.message)) {
            console.log("Benachrichtigung wurde bereits gesendet:", notification.message);
            return;
        }

        console.log("Sende Benachrichtigung:", notification);

        const element = document.createElement("div");
        element.className = "notification";
        element.innerHTML = `
            <a href="${notification.link}" class="notification-link">
                <img src="${notification.img}" alt="Notification Image">
                <p>${notification.message}</p>
            </a>
            <button class="close-btn" onclick="NotificationSystem.remove(this, '${notification.message}')">X</button>
        `;

        container.appendChild(element);
        saveNotification(notification);
        updateIcon();

        sentNotifications.push(notification);
    }

    function remove(button, message) {
        const element = button.parentElement;
        element.remove();

        removeNotificationFromStorage(message);

        console.log("Benachrichtigung entfernt:", message);

        if (container.children.length === 0) {
            document.getElementById("no-notifications").style.display = "block";
        }

        updateIcon();
    }

    function updateIcon() {
        const icon = document.querySelector(".notification-icon");
        icon.src =
            container.children.length > 0
                ? "./sources/Website-Logos/new-notification-bell.png"
                : "./sources/Website-Logos/notification-bell.png";
    }

    function start() {
        console.log("Benachrichtigungen werden gestartet...");

        // Überprüfen, ob die erste Nachricht bereits gesendet wurde
        const firstNotificationSent = localStorage.getItem("firstNotificationSent");
        
        if (!firstNotificationSent) {
            setTimeout(() => {
                add(notifications[0]); // "Learn how to display EyeFind.info correctly!"
                localStorage.setItem("firstNotificationSent", "true");
            }, 500);
        }

        // Danach normale zufällige Benachrichtigungen in kürzeren Abständen (3-7 Sekunden)
        setTimeout(() => {
            const interval = setInterval(() => {
                const remainingNotifications = notifications.slice(1).filter(
                    (notification) => !sentNotifications.includes(notification)
                );

                if (remainingNotifications.length === 0) {
                    console.log("Alle Benachrichtigungen wurden gesendet.");
                    clearInterval(interval);
                    return;
                }

                const randomIndex = Math.floor(Math.random() * remainingNotifications.length);
                add(remainingNotifications[randomIndex]);
            }, Math.random() * (7000 - 3000) + 3000); // 3-7 Sekunden zufällig
        }, 1500);
    }

    function saveNotification(notification) {
        const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
        savedNotifications.push(notification);
        localStorage.setItem("notifications", JSON.stringify(savedNotifications));
    }

    function removeNotificationFromStorage(message) {
        const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
        const updatedNotifications = savedNotifications.filter(
            (notification) => notification.message !== message
        );
        localStorage.setItem("notifications", JSON.stringify(updatedNotifications));

        // Falls die erste Nachricht gelöscht wurde, erneut senden, wenn die Seite aktualisiert wird
        if (message === "Learn how to display EyeFind.info correctly!") {
            localStorage.removeItem("firstNotificationSent");
        }
    }

    function loadNotifications() {
        const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
        savedNotifications.forEach((notification) => {
            add(notification);
        });

        if (savedNotifications.length === 0) {
            document.getElementById("no-notifications").style.display = "block";
        } else {
            document.getElementById("no-notifications").style.display = "none";
        }

        updateIcon();
    }

    return { start, remove, loadNotifications };
})();

document.addEventListener("DOMContentLoaded", () => {
    NotificationSystem.loadNotifications();
    NotificationSystem.start();
});
