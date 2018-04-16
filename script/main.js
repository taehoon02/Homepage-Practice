$(document).ready(function(){
    $('#contanier').load('./components/contanier.html');
});

$(document).ready(function() {
  $('.move').click(function() {
    if ($(this).attr('href').startsWith('#')) {
      $('html, body').animate({
        scrollTop: ($($(this).attr('href')).offset().top)
      }, 1000);
    }
  });
});

var x = setInterval(function() {
  var week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  var days = new Date().getDay();
  var daysLabel = week[days];
  var hours = new Date().getHours();
  var formatHours = ("0" + hours).slice(-2);
  var minutes = new Date().getMinutes();
  var formatMinutes = ("0" + minutes).slice(-2);
  var seconds = new Date().getSeconds();
  var formatSeconds = ("0" + seconds).slice(-2);

  document.getElementById("date").innerHTML = daysLabel + " : " + formatHours + " : " + formatMinutes + " : " + formatSeconds;
}, 1000);
