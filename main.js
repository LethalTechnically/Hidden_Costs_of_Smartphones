function showMessage() {
    alert("Thank you for learning about ethical consumption. Responsible choices can help create positive change.");
}

// Highlight active navigation link
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Auto update footer year
const footerText = document.querySelector("footer p");

if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML += " | © " + year;
}
