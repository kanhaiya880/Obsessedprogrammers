// sidebar
$(document).ready(function () {

    $(".open-btn").click(function () {
      $(".sidebar").css("left", "0");
      $(".open-btn").css("display", "none");
      $(".close-btn").css("display", "block");
      $("body").addClass("stop-scrolling");
  
  
    });
  
    $(".close-btn,.container").click(function () {
      $(".sidebar").css("left", "-250px");
      $(".close-btn").css("display", "none");
      $(".open-btn").css("display", "block");
      $("body").removeClass("stop-scrolling");
    });
  });