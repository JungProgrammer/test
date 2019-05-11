$(document).ready(function() {
   $('#btn').click(function () { 
      $('.img').animate({
         opacity: 'toggle',
         height: 'toggle'
      }, 2000);
   });
});

