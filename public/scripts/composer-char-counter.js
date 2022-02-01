// runs callback when DOM is ready to be manipulated with jQuery
$(document).ready(function() {
 
  $("#tweet-text").keyup(function() {
    const charCount = $(this).val().length;
    
    let remaining = (140 - charCount);


    $(".counter").html(remaining);// -> bad practice, find a way to do without counter

    if (remaining < 0) {
      // if less than 0, the color of the counter will change to red
      $(".counter").css("color", "#FF0000");
   
    // otherwise, stay normal color
    } else {
      $(".counter").css("color", "inherit");
    }
    
    

  });

});