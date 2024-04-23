const toggleButton = document.getElementById('darkMode');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});
