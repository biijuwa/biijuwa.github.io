function updateTime() {
  const options = {
    timeZone: 'Asia/Kathmandu',
    hour12: false,
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const now = new Date().toLocaleString('en-US', options);
  const currentHour = parseInt(now.substring(now.indexOf(",") + 2, now.indexOf(":")));
  const timeDisplay = document.getElementById('time-display');
  const timeIcon = document.querySelector('.time-icon');
  const timeContainer = document.querySelector('.time-container');

  timeDisplay.innerText = now;

  if (currentHour >= 18 || currentHour < 6) {
    timeIcon.src = 'images/icons/moon_night_icon.png';
    timeContainer.style.backgroundColor = '#16404D';
    timeDisplay.style.color = '#ffffff';
  } else {
    timeIcon.src = 'images/icons/sun_icon.png';
    timeContainer.style.backgroundColor = '#ffffff';
    timeDisplay.style.color = '#333333';
  }

  timeContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
}

setInterval(updateTime, 1000);
updateTime();
