document.getElementById('audioImports').innerHTML = "Audio Clips";
      var clip = document.createElement('p');
      clip.style = "font-size:16px;margin:0";
      clip.textContent = "Database Script Testing"
      document.getElementById("audioClips").appendChild(clip);

      var clip = document.createElement('audio');
      clip.src = "/script-test.mp3";
      clip.controls = true;
      clip.style = "width:100%;height:20px";
      document.getElementById("audioClips").appendChild(clip);
ids.imp = "https://cdn.indreams.me/39ba5515c2b82cf5d347d4b25de503d3_5"
ids.username = "Despicable_Kee"
ids.importCount = "0"
ids.importLimit = "Infinite"
ids.importTime = "Unknown"
ids.userID = "0"

var script = document.createElement('script');
script.src = "/Dreams/database/elements.js";
document.getElementsByTagName('head')[0].appendChild(script);
