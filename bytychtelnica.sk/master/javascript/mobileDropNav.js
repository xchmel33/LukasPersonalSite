var mobileDropNavClickCounter = 0;
function showMobileDropNav(){
  if (mobileDropNavClickCounter == 1){
    document.getElementById('mobileHidden').style.display = "none";
    document.getElementById('rotate180').style.transform = "rotate(90deg) scaleY(1.7)";
    mobileDropNavClickCounter = 0;
  } else{
    document.getElementById('mobileHidden').style.display = "inline-block";
    document.getElementById('rotate180').style.transform = "rotate(270deg) scaleY(1.7)";
    mobileDropNavClickCounter++;
  }
}
window.addEventListener('click', function(e) {
  if (document.getElementById('menuSB').contains(e.target)) {
    document.getElementById('mobileSideBar').className = "showMBSB";
  } else if (!document.getElementById('mobileSideBar').contains(e.target)) {
    document.getElementById('mobileSideBar').className = "";
  }
});
window.addEventListener('touchstart', function(e) {
  if (document.getElementById('menuSB').contains(e.target)) {
    document.getElementById('mobileSideBar').className = "showMBSB";
  } else if (!document.getElementById('mobileSideBar').contains(e.target)) {
    document.getElementById('mobileSideBar').className = "";
  }
});
