$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
    	indicators: false,
    	interval: 2000,
    	duration: 2000
    });
    $('.tabs').tabs({
    	duration: 3000
    });
     $('.collapsible').collapsible();
     $('input.autocomplete').autocomplete({
      data: {
        "Diseño Web": null,
        "Redes de Datos": null,
      }
    });
 }); 


$(document).ready(function(){
    $('.carousel').carousel();
  });
      




      (function($){
  function floatLabel(inputType){
    $(inputType).each(function(){
      var $this = $(this);
      // on focus add cladd active to label
      $this.focus(function(){
        $this.next().addClass("active");
      });
      //on blur check field and remove class if needed
      $this.blur(function(){
        if($this.val() === '' || $this.val() === 'blank'){
          $this.next().removeClass();
        }
      });
    });
  }
  // just add a class of "floatLabel to the input field!"
  floatLabel(".floatLabel");
})(jQuery);