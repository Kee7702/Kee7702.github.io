
(async () => {
  const res = await fetch(`https://raw.githubusercontent.com/Kee7702/Kee7702.github.io/published/app/mcversion.json`);
  const json = await res.json();
  versionlist = (json);
  version = null
   do {
version++
      var versionicon = document.createElement('i');
      versionicon.className = "material-icons";
      versionicon.textContent = "update"
      var versiontitle = document.createElement('a');
      versiontitle.textContent = versionlist[version].version_name
      var versionbeta = null
      var versionname = document.createElement('div');
      versionname.className = "nbt-filedownload";
      versionname.appendChild(versionicon);
      versionname.appendChild(versiontitle);
if (versionlist[version].beta) {
      var versionbeta = document.createElement('a');
      versionbeta.textContent = "Beta"
      versionbeta.style = "display:block"
      versionname.appendChild(versionbeta);
}
else {}
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
  version = null
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
if (versionlist[version].beta) {
      var versionbeta = document.createElement('a');
      versionbeta.textContent = "Beta"
      versionbeta.style = "display:block"
      versionname.appendChild(versionbeta);
}
else {}
      var versioncontainer = document.createElement('div');
      versioncontainer.className = "filedownload-container nbtcontainer";
      versioncontainer.appendChild(versionname);
      document.getElementById("tbversion").insertBefore(versioncontainer, (document.getElementById("tbversion").firstChild))
console.log = (versionlist[version])

}
while (versionlist[version+1]); 
})();

 
