document.addEventListener('DOMContentLoaded', function() {
    const toggleContactos = document.getElementById('toggleContactos');
    const contactosDropdown = document.getElementById('contactosDropdown');
  
    toggleContactos.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que el enlace siga su comportamiento por defecto
      contactosDropdown.style.display = contactosDropdown.style.display === 'block' ? 'none' : 'block';
    });
  
      // Cierra el dropdown al hacer clic fuera
      document.addEventListener('click', function(event) {
          if (!toggleContactos.contains(event.target) && !contactosDropdown.contains(event.target)) {
              contactosDropdown.style.display = 'none';
          }
      });
  });
  