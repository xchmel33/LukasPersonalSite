var currentIndex = 0;
var imgDuration = 5000;
var images = ["image/vizualizacie/A_Photo - 1.jpg",
              "image/vizualizacie/A_Photo - 2.jpg",
              "image/vizualizacie/A_Photo - 3.jpg",
              "image/vizualizacie/A_Photo - 4.jpg",
              "image/vizualizacie/A_Photo - 5.jpg",
              "image/vizualizacie/A_Photo - 6.jpg",
              "image/vizualizacie/A_Photo - 9.jpg",
              "image/vizualizacie/A_Photo - 10.jpg"];
var dotID = "gDot0";

function nextBckImage() {
  currentIndex++;
  document.getElementById('backgroundImage').src = images[currentIndex];
  dotID = dotID.substr(0,4) + currentIndex;
  document.getElementById(dotID).style.backgroundColor = "blue";
  document.getElementById(dotID).style.opacity = "1";
  dotID = dotID.substr(0,4) + currentIndex;
  document.getElementById(dotID).style.backgroundColor = "#000";
  document.getElementById(dotID).style.opacity = "0.2";
  if (currentIndex == 7){
    currentIndex = 0;
  }
  console.log(currentIndex);
}
