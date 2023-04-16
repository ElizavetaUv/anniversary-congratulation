$(document).ready(function () {
  for (var i = 0; i < 50; i++) {
    var heart = $("<div>").addClass("heart")
    heart.css({
      top: Math.random() * $(window).height() + "px",
      left: Math.random() * $(window).width() + "px",
      "animation-delay": Math.random() * 2 + "s",
    })
    $(".container").append(heart)
  }
})
