document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')  // Cambia 'footer.html' a la ruta correcta si es necesario
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  });
  