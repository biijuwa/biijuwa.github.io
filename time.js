function updateTime() {
  const options = {
    timeZone: 'Asia/Kathmandu',
    hour12: false, 
    hour: '2-digit',
    minute: '2-digit',
    month: 'short', 
    day: 'numeric', 
  };

  const now = new Date().toLocaleString('en-US', options);
  document.getElementById('time-display').innerText = now;
}

// Update time every second
setInterval(updateTime, 1000);

updateTime();