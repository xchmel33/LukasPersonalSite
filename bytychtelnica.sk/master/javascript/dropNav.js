function showDropNav() {
  document.getElementById('hiddenHover').style.display = "block";
  document.getElementById('hidden').style.display = "block";
  document.getElementById('bNav').style.filter = "contrast(70%)";
}

function hideDropNav() {
  document.getElementById('hiddenHover').style.display = "none";
  document.getElementById('hidden').style.display = "none";
  document.getElementById('bNav').style.filter = "none";
}
