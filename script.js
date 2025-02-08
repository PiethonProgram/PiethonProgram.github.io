function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => console.error("Error loading page:", error));
}

// Load home page by default
document.addEventListener("DOMContentLoaded", () => {
    loadPage("about");
});