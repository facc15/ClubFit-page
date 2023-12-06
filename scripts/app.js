document.addEventListener('DOMContentLoaded', function() {
    // Define la fecha de inicio
    var fechaInicio = new Date('2024-01-01T00:00:00');
  
    // Actualiza el contador cada segundo
    setInterval(function() {
      var ahora = new Date();
      var diferencia = fechaInicio - ahora;
  
      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
      // Actualiza los elementos HTML con los valores calculados
      document.getElementById('dias').textContent = dias;
      document.getElementById('horas').textContent = horas;
      document.getElementById('minutos').textContent = minutos;
      document.getElementById('segundos').textContent = segundos;
    }, 1000);


    const links = document.querySelectorAll('.faq-list a');
    const questionToggles = document.querySelectorAll('.question-toggle');
    const respuestas = document.querySelectorAll('.respuesta');
  

    questionToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
          event.preventDefault();
    
          const respuesta = this.nextElementSibling;
    
          if (respuesta.classList.contains('active')) {
            respuesta.classList.remove('active');
          } else {
            respuestas.forEach(function(respuesta) {
              respuesta.classList.remove('active');
            });
            respuesta.classList.add('active');
          }
    
          const icon = this.querySelector('.icon i');
          icon.classList.toggle('fa-chevron-right');
          icon.classList.toggle('fa-chevron-up');
        });
      });
    });

