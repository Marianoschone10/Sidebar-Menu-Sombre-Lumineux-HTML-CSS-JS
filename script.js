const sidebar = document.querySelector(".sidebar");
const sidebarbasculeBtn = document.querySelectorAll(".sidebar-masquer");
const themeToggleBtn = document.querySelector(".theme-masquer");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");
const searchForm = document.querySelector(".search-form");


// Appliquer le drak theme selon le theme de votre system
const sauvertheme = localStorage.getItem("theme");
const systemPreferesDark = window.matchMedia("(prefers-color-scheme : dark").matches;
const shouldUseDarkTheme = sauvertheme ==="dark" || (!sauvertheme && systemPreferesDark);


const mettreajourIcon = () => {
    const isDark = document.body.classList.contains("dark-theme");
    themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode": "dark_mode") : "dark_mode"; 
}

document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
mettreajourIcon();

// Masquer la barre latérale en cliquant sur le bouton
sidebarbasculeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    mettreajourIcon();
    });
});


searchForm.addEventListener("click", () => {
   if(sidebar.classList.contains("collapsed")){
    sidebar.classList.remove("collapsed");
    searchForm.querySelector("input").focus(); 
    }
});

// changer de theme en cliquand sur le bouton dark
themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme",isDark ? "dark" : "ligth" );
    mettreajourIcon();
});

