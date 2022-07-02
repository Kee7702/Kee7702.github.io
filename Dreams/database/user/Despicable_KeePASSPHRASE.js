document.getElementById('audioImports').innerHTML = "Audio Imports";
      var clip = document.createElement('p');
      clip.style = "font-size:16px;margin:0";
      clip.textContent = "View All Imports"
      clip.href = "https://indreams.me/Despicable_Kee/creations"
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
