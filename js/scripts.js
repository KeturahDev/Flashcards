$(document).ready(function() {
  $("#js-title").click(function() {
    $("p").hide();
    $("#js").fadeToggle();
  }); 
  $("#operator").click(function() {
    $("p").hide();
    $("#operator-p").fadeToggle();
  }); 

});
