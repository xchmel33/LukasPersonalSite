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
  "image/4nadpodlaz.jpg",
  "image/byty/b1.jpg",
  "image/byty/b2.jpg",
  "image/byty/b3.jpg",
  "image/byty/b4.jpg",
  "image/byty/pp1.jpg",
)
function show1podpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/1podpodlaz.jpg)";
  document.getElementById('pImg').src = "image/byty/pp1.jpg";
}

function show1nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/1nadpodlaz.jpg)";
  document.getElementById('pImg').src = "image/byty/b1.jpg";
}

function show2nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/2nadpodlaz.jpg)";
  document.getElementById('pImg').src = "image/byty/b2.jpg";
}

function show3nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/3nadpodlaz.jpg)";
  document.getElementById('pImg').src = "image/byty/b3.jpg";
}

function show4nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(image/4nadpodlaz.jpg)";
  document.getElementById('pImg').src = "image/byty/b4.jpg";
}
