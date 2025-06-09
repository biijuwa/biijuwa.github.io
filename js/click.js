document.addEventListener('DOMContentLoaded', () => {
    const redCircle = document.querySelector('.clickable-circle');
    redCircle.addEventListener('click', () => {
      alert('Red circle clicked!');
    });
  });
  