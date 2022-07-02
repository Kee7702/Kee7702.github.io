document.getElementById('audioImports').innerHTML = "Audio Imports";
      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc";
      clipname.className = "global-post-label";
      clipname.textContent = "View All Imports"
      clipname.href = "https://indreams.me/Despicable_Kee"
      var clipstatus = document.createElement('a');
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "open_in_new"
      var clipdesc = document.createElement('a');
      clipdesc.className = "global-post-details";
      clipdesc.textContent = "Audio Import Service"
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipstatus);
      clipdiv.appendChild(clipdesc);
      document.getElementById("audioClips").appendChild(clipdiv);
ids.imp = "https://cdn.indreams.me/39ba5515c2b82cf5d347d4b25de503d3_5"
ids.username = "Despicable_Kee"
ids.importCount = "0"
ids.importLimit = "Infinite"
ids.importTime = "Unknown"
ids.userID = "0"
var script = document.createElement('script');
script.src = "/Dreams/database/elements.js";
document.getElementsByTagName('head')[0].appendChild(script);
