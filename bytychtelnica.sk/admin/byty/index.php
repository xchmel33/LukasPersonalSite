<?php
$b1 = new DOMDocument();
$b1->loadHTML(file_get_contents(substr(dirname(__FILE__),0,-10)."byty/1-nadzemne-podlazie/index.html"));
$b2 = new DOMDocument();
$b2->loadHTML(file_get_contents(substr(dirname(__FILE__),0,-10)."byty/2-nadzemne-podlazie/index.html"));
$b3 = new DOMDocument();
$b3->loadHTML(file_get_contents(substr(dirname(__FILE__),0,-10)."byty/3-nadzemne-podlazie/index.html"));
$b4 = new DOMDocument();
$b4->loadHTML(file_get_contents(substr(dirname(__FILE__),0,-10)."byty/4-nadzemne-podlazie/index.html"));
$p1 = new DOMDocument();
$p1->loadHTML(file_get_contents(substr(dirname(__FILE__),0,-10)."byty/1-podzemne-podlazie/index.html"));
 ?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">

 <head>
   <meta charset="utf-8">
   <title>byty - bytychtelnica.sk</title>
   <link rel="stylesheet" href="../../master/css/master.css">
   <link rel="stylesheet" href="../../master/css/byty.css">
   <style media="screen">
   .podlazTableBackground{
     background-color: #B69D74;
     margin-top: 20px;
   }
   .podlazTable{
     margin-left: auto;
     margin-right: auto;
     font-size: 16px !important;
     color: white !important;
     width: 680px;
     display: flex;
     justify-content: space-between;
     padding-bottom: 35px;
   }
   .podlazTable table{
     margin-left: auto;
     margin-right: auto;
     border-collapse: collapse;
   }
   .podlazTable tr{
     border-bottom: 2px solid rgba(255, 255, 255, 0.3);
   }
   .podlazTable tr:last-child{
     border: none;
   }
   thead{
     font-weight: bold;
   }
   td{
     height: 30px;
     padding: 5px 20px;
   }
   .podlazTable thead tr{
     border: none;
     background-color: #1F2839;
   }
   .podlazTableBackground p{
     text-align: center;
     color: white;
     font-weight: bold;
     font-family: "Intro Light Alt", Sans-serif;
     font-size: 48px;
     padding: 40px 0;
     margin: 0;
   }
   </style>
 </head>

 <body>
   <div class="mobile-wrapper">
     <div id="header">
       <div class="content">
         <a href="../../">
           <img class="navlogo" src="../../master/image/logo.jpg" alt="logo">
         </a>
         <p style="font-size: 64px; color: white;">Admin - byty</p>
       </div>
     </div>

     <!-- Mobile site -->
     <div id="mobileHeader">
       <div class="content">
         <a href="index.html">
           <img class="navlogo" src="../../master/image/logo.jpg" alt="logo">
         </a>
         <img id="menuSB" class="menuSideBar" src="../../master/icon/dropDown.jpg" alt="side menu">
       </div>
     </div>
     <div id="mobileSideBar">
       <ul>
         <li>
           <a href="../../o-projekte/">O PROJEKTE</a>
         </li>
         <li>
           <a href="../../">BYTY</a> <a href="#" id="rotate180" class="rotate90" onclick="showMobileDropNav()">></a>
         </li>
         <ul id="mobileHidden">
           <li><a href="../../1-podzemne-podlazie/">1. podzemné podlažie</a></li>
           <li><a href="../../1-nadzemne-podlazie/">1. nadzemné podlažie</a></li>
           <li><a href="../../2-nadzemne-podlazie/">2. nadzemné podlažie</a></li>
           <li><a href="../../3-nadzemne-podlazie/">3. nadzemné podlažie</a></li>
           <li><a href="../../4-nadzemne-podlazie/">4. nadzemné podlažie</a></li>
         </ul>
         <li>
           <a href="../../galeria/">GALERIA</a>
         </li>
         <li>
           <a href="../../kontakt/">KONTAKT</a>
         </li>
       </ul>
     </div>
     <!-- Mobile site -->

     <div class="podlazByt" >
       <div id="mainImg" class="mainImg">
         <div class="hoverArea" id="HA0" onclick="show1podpodlaz();"></div>
         <div class="hoverArea" id="HA1" onclick="show1nadpodlaz();"></div>
         <div class="hoverArea" id="HA2" onclick="show2nadpodlaz();"></div>
         <div class="hoverArea" id="HA3" onclick="show3nadpodlaz();"></div>
         <div class="hoverArea" id="HA4" onclick="show4nadpodlaz();"></div>
       </div>
     </div>
     <div class="podlazTableBackground" id="pTab">
       <p>Dostupnosť</p>
       <?php
       echo $b1->saveHTML($b1->getElementById('pT'));
        ?>
     </div>


   </div>
   <script type="text/javascript"></script>
   <script src="../../master/javascript/dropNav.js" type="text/javascript"></script>
   <script src="../../master/javascript/mobileDropNav.js" type="text/javascript"></script>
   <script type="text/javascript">
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
     "../../master/image/4nadpodlaz.jpg"
   );
   function show1podpodlaz() {
     document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/1podpodlaz.jpg)";
     document.getElementById('pTab').innerHTML = "<p>Dostupnosť</p>";
     // <?php
     // echo $p1->saveHTML($p1->getElementById('pT'));
     //  ?>"
   }

   function show1nadpodlaz() {
     document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/1nadpodlaz.jpg)";
     document.getElementById('pTab').innerHTML = "<p>Dostupnosť</p>";
     // <?php
     // echo $b1->saveHTML($b1->getElementById('pT'));
     //  ?>"
   }

   function show2nadpodlaz() {
     document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/2nadpodlaz.jpg)";
     document.getElementById('pTab').innerHTML = "<p>Dostupnosť</p>";
     // <?php
     // echo $b2->saveHTML($b2->getElementById('pT'));
     //  ?>";
   }

   function show3nadpodlaz() {
     document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/3nadpodlaz.jpg)";
     document.getElementById('pTab').innerHTML = "<p>Dostupnosť</p>";
     // <?php
     // echo $b3->saveHTML($b3->getElementById('pT'));
     //  ?>";
   }

   function show4nadpodlaz() {
     document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/4nadpodlaz.jpg)";
     document.getElementById('pTab').innerHTML = "<p>Dostupnosť</p>";
     // <?php
     // echo $b4->saveHTML($b4->getElementById('pT4'));
     //  ?>";
   }

   function showbasepodlaz() {
     document.getElementById('mainImg').style.backgroundImage = "url(../../master/image/1nadpodlaz.jpg)";
     document.getElementById('pTab').innerHTML = "<p>Dostupnosť</p>";
     // <?php
     // echo $b1->saveHTML($b1->getElementById('pT'));
     //  ?>";
   }
   </script>
 </body>

 </html>
