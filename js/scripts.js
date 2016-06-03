$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var type = $("#type").val();
    console.log(type);
    var preference = $("#preference").val();
    console.log(preference);
    event.preventDefault();
  });
});
