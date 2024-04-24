const toggleButton = document.getElementById('darkMode');
const body = document.body;
const icon = document.getElementById('iconMode');

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');  
  } else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});
