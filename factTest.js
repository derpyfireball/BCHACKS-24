// Array of fun facts
const funFacts = [
    "Pluto is not considered a planet anymore.",
    "Pluto is the only dwarf planet with a moon named Charon.",
    // Add more fun facts as needed
];

// Function to perform the entire fade-in, stay visible, and fade-out process
function fadeInOut(text, callback) {
    const funFactContainer = document.getElementById('fun-fact-container');
    funFactContainer.textContent = text; // Set the text content before fade-in

    let opacity = 0;

    const intervalId = setInterval(() => {
        funFactContainer.style.opacity = opacity;
        opacity += 0.1;

        if (opacity > 1) {
            clearInterval(intervalId);
            setTimeout(() => {
                funFactContainer.style.backgroundColor = '#cf1f1f'; // Fade-out color
                setTimeout(() => {
                    funFactContainer.style.backgroundColor = ''; // Reset background color
                    fadeOut();
                }, 2000); // 2-second fade-out color (adjust as needed)
            }, 6000); // 6 seconds of no fade (adjust as needed)
        }
    }, 200); // 2-second fade-in (adjust as needed)

    function fadeOut() {
        let opacity = 1;
        const intervalId = setInterval(() => {
            funFactContainer.style.opacity = opacity;
            opacity -= 0.1;

            if (opacity < 0) {
                clearInterval(intervalId);
                callback(); // Call the callback to proceed to the next fun fact
            }
        }, 200); // 2-second fade-out (adjust as needed)
    }
}

// Function to update the fun fact with fade-in, fade-out, and fade-out color
function updateFunFact() {
    let index = 0;

    function updateNextFunFact() {
        index = (index + 1) % funFacts.length;
        const nextText = funFacts[index];

        // Use fadeInOut function to seamlessly transition to the next fun fact
        fadeInOut(nextText, updateNextFunFact);
    }

    // Initial display
    fadeInOut(funFacts[index], updateNextFunFact);
}

// Call the function to start the fun fact loop
updateFunFact();