var images = [];

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "image/1podpodlaz.jpg",
  "image/1nadpodlaz.jpg",
  "image/2nadpodlaz.jpg",
  "image/3nadpodlaz.jpg",
  "image/4nadpodlaz.jpg"
)
function show1podpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/1podpodlaz.jpg)";
}

function show1nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/1nadpodlaz.jpg)";
}

function show2nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/2nadpodlaz.jpg)";
}

function show3nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/3nadpodlaz.jpg)";
}

function show4nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/4nadpodlaz.jpg)";
}

function showbasepodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/1nadpodlaz.jpg)";
}
