## Application Version Switcher
<div class="filedownload-container"><div class="version-container"><img src="https://cdn.discordapp.com/attachments/934253378459037717/989776006921461800/IMG_20220621_005608.png"><a>Minecraft Versions</a></div><div id="mcversion"></div></div><div class="filedownload-container"><div class="version-container"><img src="https://cdn.discordapp.com/attachments/934253378459037717/989776006921461800/IMG_20220621_005608.png"><a>Toolbox Versions</a></div><div id="tbversion"></div></div>
<script>(async () => {
  const res = await fetch(`https://raw.githubusercontent.com/Kee7702/Kee7702.github.io/published/app/mcversion.json`);
  const json = await res.json();
  versionlist = (json);
  version=null
   do {
version++
               var versionicon = document.createElement('i');
      versionicon.className = "material-icons";
      versionicon.textContent = "update"
      var versiontitle = document.createElement('a');
      versiontitle.textContent = versionlist[version].version_name
      var versionname = document.createElement('div');
      versionname.className = "nbt-filedownload";
      versionname.appendChild(versionicon);
      versionname.appendChild(versiontitle);
      var versioncontainer = document.createElement('div');
      versioncontainer.className = "filedownload-container nbtcontainer";
      versioncontainer.appendChild(versionname);
      document.getElementById("mcversion").insertBefore(versioncontainer, (document.getElementById("mcversion").firstChild))
console.log = (versionlist[version])

}
while (versionlist[version+1]); 
})();

    
(async () => {
  const res = await fetch(`https://raw.githubusercontent.com/Kee7702/Kee7702.github.io/published/app/tbversion.json`);
  const json = await res.json();
  versionlist = (json);
  version=null
   do {
version++
               var versionicon = document.createElement('i');
      versionicon.className = "material-icons";
      versionicon.textContent = "update"
      var versiontitle = document.createElement('a');
      versiontitle.textContent = versionlist[version].version_name
      var versionname = document.createElement('div');
      versionname.className = "nbt-filedownload";
      versionname.appendChild(versionicon);
      versionname.appendChild(versiontitle);
      var versioncontainer = document.createElement('div');
      versioncontainer.className = "filedownload-container nbtcontainer";
      versioncontainer.appendChild(versionname);
      document.getElementById("tbversion").insertBefore(versioncontainer, (document.getElementById("tbversion").firstChild))
console.log = (versionlist[version])

}
while (versionlist[version+1]); 
})();

</script>
