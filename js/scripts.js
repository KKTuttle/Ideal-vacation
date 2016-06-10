$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var type = $("#type").val();
    var fun = $("#fun").val();
    var preference = $("#preference").val();
    var location = $("#location").val();
    var cuisine = $("#cuisine").val();
    var sightseeing = $("#sightseeing").val();
    var budget = $("#budget").val();
    $(".resultWindow").remove();
    $(".velkost").remove();
    $(".popis").remove();
    if(type ==="A| Adventures" && sightseeing === "A| Visiting Castles and National Parks") {
      var result ="Slovakia";
      var meno ="bojnice";
    }
    else if(type ==="A| Adventures" && sightseeing === "B| Visiting Temples and Cathedrals") {
      var result ="Malta";
      var meno ="temples2";
    }
    else if(type ==="A| Adventures" && sightseeing === "C| Riding Gondola in Canals") {
      var result ="Italy";
      var meno ="gondola1";
    }
    else if( type === "B| Entertainment" && sightseeing === "A| Visiting Castles and National Parks") {
      var result ="Slovakia";
      var meno ="park";
    }
    else if( type === "B| Entertainment" && sightseeing === "B| Visiting Temples and Cathedrals") {
      var result ="Malta";
      var meno ="gozo1";
    }
    else if( type === "B| Entertainment" && sightseeing === "C| Riding Gondola in Canals") {
      var result ="Italy";
      var meno ="gondola";
    }
    else if( type === "C| Romance" && sightseeing === "A| Visiting Castles and National Parks") {
      var result ="Slovakia";
      var meno ="park-slovakia";
    }
    else if( type === "C| Romance" && sightseeing === "B| Visiting Temples and Cathedrals") {
      var result ="Malta";
      var meno ="valletta1";
    }
    else {
      var result ="Italy";
      var meno ="basilica";
    }
    $("#dovolenka").prepend("<div class='row resultWindow'><div class='col-sm-7 welcome'><h1 class='nadpis'>Your Dream Vacation is in "+ result +"!</h1></div></div><div class='row fotky'><div class='col-sm-12'><img src='img/"+ meno +".jpg' class='velkost' alt='Picture of '"+ result +"'><p class='popis'>Enjoy !!!!</p></div></div>");
    event.preventDefault();
  });
});
