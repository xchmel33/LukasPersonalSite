var images = [];

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "../master/image/1podpodlaz.jpg",
  "../master/image/1nadpodlaz.jpg",
  "../master/image/2nadpodlaz.jpg",
  "../master/image/3nadpodlaz.jpg",
  "../master/image/4nadpodlaz.jpg"
)
function show1podpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../master/image/1podpodlaz.jpg)";
}

function show1nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../master/image/1nadpodlaz.jpg)";
}

function show2nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../master/image/2nadpodlaz.jpg)";
}

function show3nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../master/image/3nadpodlaz.jpg)";
}

function show4nadpodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../master/image/4nadpodlaz.jpg)";
}

function showbasepodlaz() {
  document.getElementById('mainImg').style.backgroundImage = "url(../master/image/1nadpodlaz.jpg)";
}
