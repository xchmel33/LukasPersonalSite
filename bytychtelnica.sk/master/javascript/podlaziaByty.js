var images = [];

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "../../master/image/1podpodlaz.jpg",
  "../../master/image/1nadpodlaz.jpg",
  "../../master/image/2nadpodlaz.jpg",
  "../../master/image/3nadpodlaz.jpg",
  "../../master/image/4nadpodlaz.jpg",
  "../../master/image/byty/b1.jpg",
  "../../master/image/byty/b2.jpg",
  "../../master/image/byty/b3.jpg",
  "../../master/image/byty/b4.jpg",
  "../../master/image/byty/pp1.jpg",
)
function show1podpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/1podpodlaz.jpg)";
  document.getElementById('pImg').src = "../../master/image/byty/pp1.jpg";
}

function show1nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/1nadpodlaz.jpg)";
  document.getElementById('pImg').src = "../../master/image/byty/b1.jpg";
}

function show2nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/2nadpodlaz.jpg)";
  document.getElementById('pImg').src = "../../master/image/byty/b2.jpg";
}

function show3nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/3nadpodlaz.jpg)";
  document.getElementById('pImg').src = "../../master/image/byty/b3.jpg";
}

function show4nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/4nadpodlaz.jpg)";
  document.getElementById('pImg').src = "../../master/image/byty/b4.jpg";
}
