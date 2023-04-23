// Código JQuery para menú en dispositivos pequeños

$(document).ready(function() {
  $('#burger').click(function() {
      $('#burger').toggleClass('abierto');
      $('.menu').toggleClass('abierto');
  })
})



