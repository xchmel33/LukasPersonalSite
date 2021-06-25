function mfrmAction() {
  var subject1 = document.getElementById("subj1").value;
  var subject2 = document.getElementById("subj2").value;
  var body = document.getElementById("mess").value;
  var ok = true;
  if (subject1 == "" || subject1 == "POLE JE POVINNÉ!") {
    document.getElementById('subj1').value = "POLE JE POVINNÉ!";
    document.getElementById('subj1').style.color = "red";
    ok = false;
  }
  if (subject2 == "" || subject2 == "POLE JE POVINNÉ!") {
    document.getElementById('subj2').value = "POLE JE POVINNÉ!";
    document.getElementById('subj2').style.color = "red";
    ok = false;
  }
  if (body == "" || body == "POLE JE POVINNÉ!") {
    document.getElementById('mess').value = "POLE JE POVINNÉ!";
    document.getElementById('mess').style.color = "red";
    ok = false;
  }
  if (ok == true) {
    var subject = subject1 + " - " + subject2;
    window.location.href = "mailto:chmelolukas@gmail.com?subject=" + subject + "&body=" + body;
    document.getElementById('result').innerHTML = "Ďakujeme, Vaša správa bola odoslaná."
    subject1.value = "";
    subject2.value = "";
    subject1.style.color = "#1F2839";
    subject2.style.color = "#1F2839";
  } else {
    document.getElementById('result').innerHTML = " Vaša správa obsahuje chyby!"
  }
}
