document.getElementById("planetOptions").addEventListener("change", function() {
    var selectedPlanet = this.value;
    switch (selectedPlanet) {
        case "mercury":
            this.style.backgroundColor = "#d35400"; // Rust color
            break;
        case "venus":
            this.style.backgroundColor = "#e74c3c"; // Red color
            break;
        case "earth":
            this.style.backgroundColor = "#3498db"; // Blue color
            break;
        case "mars":
            this.style.backgroundColor = "#e67e22"; // Orange color
            break;
        case "jupiter":
            this.style.backgroundColor = "#f39c12"; // Yellow color
            break;
        case "saturn":
            this.style.backgroundColor = "#27ae60"; // Green color
            break;
        case "uranus":
            this.style.backgroundColor = "#2980b9"; // Dark blue color
            break;
        case "neptune":
            this.style.backgroundColor = "#8e44ad"; // Purple color
            break;
        case "pluto":
            this.style.backgroundColor = "#34495e"; // Dark gray color
            break;
        default:
            this.style.backgroundColor = "#3498db"; // Default blue color
    }
});
document.getElementById("planetOptions").addEventListener("change", function() {
    var selectedPlanet = this.value;
    
    // Redirect to the selected planet's page
    window.location.href = selectedPlanet + ".html";
});

function navigateToPlanet() {
    var dropdown = document.getElementById("planetOptions");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;

    if (selectedOption !== "Null") {
        window.location.href = selectedOption + ".html";
    }
}