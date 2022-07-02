      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc";
      clipname.className = "global-post-label";
      clipname.textContent = "Among Us - Sabotage Alarn"
      clipname.href = "https://indreams.me/element/oQXUZgXLUVp"
      var clipstatus = document.createElement('a');
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "check"
      var clipdesc = document.createElement('a');
      clipdesc.className = "global-post-details";
      clipdesc.textContent = "Completed on September 27th, 2020"
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipstatus);
      clipdiv.appendChild(clipdesc);
      document.getElementById("audioClips").appendChild(clipdiv);
var script = document.createElement('script');
script.src = "/Dreams/database/removescript.js";
document.getElementsByTagName('head')[0].appendChild(script);
