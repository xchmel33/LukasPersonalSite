var currentIndex = 0;
var imgDuration = 5000;
var stop;

function slideShow() {
  currentIndex++;
  document.getElementById('backgroundImage').className += "fadeOut";
  setTimeout(function() {
    if (currentIndex == 0) {
      document.getElementById('backgroundImage').src = "image/bytyBcg1.jpg";
      document.getElementById('backgroundImage').className = "";
      document.getElementById('dot1').style.backgroundColor = "blue";
      document.getElementById('dot2').style.backgroundColor = "#bbb";
    } else {
      document.getElementById('backgroundImage').src = "image/bytyBcg2.jpg";
      document.getElementById('backgroundImage').className = "";
      document.getElementById('dot1').style.backgroundColor = "#bbb";
      document.getElementById('dot2').style.backgroundColor = "blue";
      currentIndex = -1;
    }
  }, 1000);
  stop = setTimeout(slideShow, imgDuration);
}
slideShow();

function nextBckImage() {
  clearTimeout(stop);
  slideShow();
}
