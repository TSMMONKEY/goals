$(document).ready(function() {
    // Your code here
    $('.right-section nav .navbar-toggler-icon').on('click', function(){
        $('.left-section').fadeToggle(500);
        // alert('awe')
    });

    $('.hideToggler').on('click', function(){
        $('.left-section').fadeToggle(500);
        // alert('awe')
    });
  });