document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')  // Cambia 'header.html' a la ruta correcta si es necesario
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });
  });
  