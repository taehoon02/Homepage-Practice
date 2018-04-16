$(document).ready(function() {
  initActive();
  // initBar();
  sliderFunc();
});

// $(window).resize(function() {
//   initBar();
// })
//
// function initBar() {
//   var barWidth = $(".active").css('width');
//   var barOffset = $(".active").offset().left;
//   $(".bar").css('width', barWidth);
//   $(".bar").css('left', barOffset);
// };

function initActive() {
  $(".info").addClass("active");
  $("#section").load("./components/info/info.html");
};

function sliderFunc() {
  $(".info").click(function() {
    var a = $(this).hasClass("active");
    if (a == false) {
      $("#section").load("./components/info/info.html");
    }
  });

  $(".skills").click(function() {
    var a = $(this).hasClass("active");
    if (a == false) {
      $("#section").load("./components/skills/skills.html");
    }
  });

  $(".slide-item").click(function(){
        var a = $(".slide-item").hasClass("active");
         if( a ){
             $(".slide-item").removeClass("active");
             $(this).addClass("active");
         }
         initBar();
    });
}
