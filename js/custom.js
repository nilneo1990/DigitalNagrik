


// Loader JS
$(document).ready(function() {
    $('body').css('overflow-y' , 'hidden');
    // $('.loader-bg').delay(5000).hide();
    $('.loader-bg').delay(2000).fadeOut(500, function(){
       $('body').css('overflow-y' , 'auto');
    });


    $('.count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 5000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });




 });







