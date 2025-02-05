function updateNepaliTime() {
    const nepalTimeZone = 'Asia/Kathmandu';
    const now = new Date();

    const dateOptions = { 
        month: 'short',
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false,
        timeZone: nepalTimeZone
    };

    const nepaliTime = now.toLocaleString('en-US', dateOptions);
    console.log("Nepali Time:", nepaliTime); // Debugging Output

    const timeElement = document.getElementById("nepali-time");
    if (timeElement) {
        timeElement.textContent = nepaliTime;
    } else {
        console.error("❌ Element with ID 'nepali-time' not found!");
    }

    const hourOptions = { hour: '2-digit', hour12: false, timeZone: nepalTimeZone };
    const hour = parseInt(now.toLocaleString('en-US', hourOptions));

    const timeImage = document.querySelector(".time-img");
    if (timeImage) {
        if (hour >= 6 && hour < 18) {
            timeImage.src = "images/sun_icon_32_px.png";
            timeImage.alt = "Sun Image";
        } else {
            timeImage.src = "images/moon_icon_32_px.png";
            timeImage.alt = "Moon Image";
        }
    } else {
        console.error("❌ Element with class 'time-img' not found!");
    }
}

// Ensure the function runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateNepaliTime();
    setInterval(updateNepaliTime, 60000); // Update every minute
});
