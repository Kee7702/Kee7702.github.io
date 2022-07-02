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
var script = document.createElement('script');
script.src = "/Dreams/database/removescript.js";
document.getElementsByTagName('head')[0].appendChild(script);
