// runs callback when DOM is ready to be manipulated with jQuery
$(document).ready(function() {
 
  $("#tweet-text").on("input", function() {
    $(this)
      .parent()
      .find(".counter")
      .text(140 - this.value.length)
      .toggleClass("over-limit", 140 - this.value.length < 0);
  });

});