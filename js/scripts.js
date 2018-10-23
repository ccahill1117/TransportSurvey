$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    var userResponses = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);
      console.log(userResponses);
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportationMode = $(this).val();
      var capitalFunTransportationMode = funTransportationMode.toUpperCase();
      $("#fun-responses").append(capitalFunTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
    $("#commuteHours").show();
  });
  $("form#commuteHours").submit(function(event){
    event.preventDefault();
    $("#commute-response").show();
    var userTimeResponsesArray = [];
    $("input:checkbox[name=commute-time]:checked").each(function() {
      var userTimeResponses = $(this).val();
      userTimeResponsesArray.push(userTimeResponses);
      $("#commute-response").append(userTimeResponses + "<br>");
      $("#commute-response").show();
      $("#commuteHours").hide();
      $("#work-responses").hide();
      $("#fun-responses").hide();
    });
  });
});
