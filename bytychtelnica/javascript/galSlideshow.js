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
  if (currentIndex == 7){
    dotID = dotID.substr(0,4) + currentIndex;
    document.getElementById(dotID).style.backgroundColor = "#000";
    document.getElementById(dotID).style.opacity = "0.3";
    currentIndex = -1;
  }
  currentIndex++;
  document.getElementById('backgroundImage').src = images[currentIndex];
  dotID = dotID.substr(0,4) + currentIndex;
  document.getElementById(dotID).style.backgroundColor = "blue";
  document.getElementById(dotID).style.opacity = "1";
  currentIndex--;
  dotID = dotID.substr(0,4) + currentIndex;
  currentIndex++;
  if (currentIndex == 0){
    document.getElementById('gDot7').style.backgroundColor = "#000";
    document.getElementById('gDot7').style.opacity = "0.3";
  }
  else{
    document.getElementById(dotID).style.backgroundColor = "#000";
    document.getElementById(dotID).style.opacity = "0.3";
  }
  currentIndex++;
  document.getElementById('imgIndex').innerHTML = currentIndex;
  currentIndex--;
}
function prevBckImage() {
  if (currentIndex == 0){
    dotID = dotID.substr(0,4) + currentIndex;
    document.getElementById(dotID).style.backgroundColor = "#000";
    document.getElementById(dotID).style.opacity = "0.3";
    currentIndex = 8;
  }
  currentIndex--;
  document.getElementById('backgroundImage').src = images[currentIndex];
  dotID = dotID.substr(0,4) + currentIndex;
  document.getElementById(dotID).style.backgroundColor = "blue";
  document.getElementById(dotID).style.opacity = "1";
  currentIndex++;
  dotID = dotID.substr(0,4) + currentIndex;
  currentIndex--;
  if (currentIndex == 7){
    document.getElementById('gDot0').style.backgroundColor = "#000";
    document.getElementById('gDot0').style.opacity = "0.3";
  }
  else{
    document.getElementById(dotID).style.backgroundColor = "#000";
    document.getElementById(dotID).style.opacity = "0.3";
  }
  currentIndex++;
  document.getElementById('imgIndex').innerHTML = currentIndex;
  currentIndex--;
}

function setImage_at_Index(index){
  dotID = dotID.substr(0,4) + currentIndex;
  document.getElementById(dotID).style.backgroundColor = "#000";
  document.getElementById(dotID).style.opacity = "0.3";
  document.getElementById('backgroundImage').src = images[index];
  dotID = dotID.substr(0,4) + index;
  document.getElementById(dotID).style.backgroundColor = "blue";
  document.getElementById(dotID).style.opacity = "1";
  currentIndex = index;
}
setImage_at_Index(0);
