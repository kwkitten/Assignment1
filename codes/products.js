var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

// closes the menu when clicked outside
window.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.style.display = 'none';
  }
});