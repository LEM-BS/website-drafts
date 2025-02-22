document.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => { document.getElementById('header-include').innerHTML = data; })
    .catch(error => console.error('Error loading header:', error));

  fetch('footer.html')
    .then(response => response.text())
    .then(data => { document.getElementById('footer-include').innerHTML = data; })
    .catch(error => console.error('Error loading footer:', error));
});