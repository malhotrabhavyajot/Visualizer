var audio = document.getElementById("audio");

$(audio).on({
  mouseenter: function () {
    video.setAttribute("controls", "controls");
  },
  mouseleave: function () {
    video.removeAttribute("controls");
  },
});
