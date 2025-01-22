function updateTime() {
  const options = {
    timeZone: 'Asia/Kathmandu',
    hour12: false, 
    hour: '2-digit',
  };

  const now = new Date().toLocaleString('en-US', options);
  const currentHour = parseInt(now.substring(0, 2)); 

  document.getElementById('time-display').innerText = now;

  if (currentHour >= 18) {
    document.body.style.backgroundColor = 'black';
  } else {
    document.body.style.backgroundColor = 'white'; // or your preferred default color
  }
}

// Update time every second
setInterval(updateTime, 1000);

updateTime();