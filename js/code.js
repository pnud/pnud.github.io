$(document).ready(function(e) {
	
  $(".directory").click(function(event) {
    event.stopPropagation();
    $(this).children('ul:first').toggle();
  });
});