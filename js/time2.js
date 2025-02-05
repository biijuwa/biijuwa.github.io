function updateNepaliTime() {
    const nepalTimeZone = 'Asia/Kathmandu';
    const options = { 
        month: 'short',
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
    };

    const now = new Date();
    const nepaliTime = now.toLocaleString('en-US', { timeZone: nepalTimeZone, ...options });
    document.getElementById("nepali-time").textContent = nepaliTime;

    const hour = parseInt(now.toLocaleString('en-US', { timeZone: nepalTimeZone, hour: '2-digit', hour12: false }));

    const timeImage = document.querySelector(".time-img");
    if (hour >= 6 && hour < 18) {
        timeImage.src = "../images/sun_icon_32_px.png";
        timeImage.alt = "Sun Image";
    } else {
        timeImage.src = "../images/moon_icon_32_px.png";  
        timeImage.alt = "Moon Image";
    }
}

updateNepaliTime();
setInterval(updateNepaliTime, 60000);  // Update every minute instead of every second
