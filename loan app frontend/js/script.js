let styles = document.querySelector(".custom"); 



function setStyle(theme){
    styles.setAttribute("href", 
        theme);
        setTheme(theme); 
}
// Save theme
document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme') || 'style.css'; // Default to 'style.css'
    styles.setAttribute('href', savedTheme);
});

function setTheme(theme) {
    localStorage.setItem('theme', theme);
}


