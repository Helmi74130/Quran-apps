<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <meta name="description" content="Ecouter le saint coran d'ou vous souhaitez en un simple clique">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/a501fe9880.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Roboto&family=Satisfy&family=Shadows+Into+Light&display=swap" rel="stylesheet">
  <title>Quran</title>
</head>
<body>

  <main>
    <h1>Quran</h1>
    <div id="loading" class="lds-dual-ring"></div>
    <audio id="audio" autoplay src=""></audio>
    <div class="audio-div"> 
      <img class="logo" height="90px" src="https://i.pinimg.com/736x/5a/1e/1d/5a1e1d714636b158b554e8181ecda347.jpg" alt="" srcset="">
      <div class="btn-group">
        <div class="btn-duo-play">
          <button class="btn-audio" onclick="document.getElementById('audio').play()"><i class="fa-solid fa-play fa-3x"></i></button> 
          <button class="btn-audio" onclick="document.getElementById('audio').pause()"><i class="fa-solid fa-pause fa-3x"></i></button> 
        </div>
        <div class="btn-duo-sound">
          <button class="btn-audio" onclick="document.getElementById('audio').volume -= 0.1"><i class="fa-solid fa-volume-low fa-3x"></i></button> 
          <button class="btn-audio" onclick="document.getElementById('audio').volume += 0.1"><i class="fa-solid fa-volume-high fa-3x"></i></button> 
        </div>
      </div>
    </div>
    
    <p id="number"></p>
    <div id="versets">
    </div>
    <div id="container">
    </div>
    <div id="connexion" class="connect">
      <h1>Connexion impossible</h1>
      <p>Vérifier votre connexion</p>
    </div>
  </main>
    
    
    <script src="jquery\jquery.js"></script>
    <script src="script.js"></script>
</body>
</html>