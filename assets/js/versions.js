(async()=>{let k=await fetch("https://raw.githubusercontent.com/Kee7702/Kee7702.github.io/database/app/mcversion.json"),l=await k.json();versionlist=l,version=-1;do{version++;var g=document.createElement("i");g.className="material-icons",g.textContent="update";var j=document.createElement("a");j.textContent=versionlist[version].version_name;var f=null,b=null,c=null,d=null,e=null,a=document.createElement("div");a.className="nbt-filedownload",a.appendChild(g),a.appendChild(j);var h=document.createElement("a");if(h.textContent="Version Codes",h.style="display:block;font-size:18px;line-height:22px",a.appendChild(h),versionlist[version].codes["armeabi-v7a"]){var b=document.createElement("a");b.textContent="armeabi-v7a: "+versionlist[version].codes["armeabi-v7a"],b.style="display:block;font-size:14px;font-weight:100;line-height:18px",versionlist[version].files[versionlist[version].codes["armeabi-v7a"]]&&(b.href="https://drive.google.com/uc?confirm=t&id="+versionlist[version].files[versionlist[version].codes["armeabi-v7a"]]),a.appendChild(b)}if(versionlist[version].codes.x86){var c=document.createElement("a");c.textContent="x86: "+versionlist[version].codes.x86,c.style="display:block;font-size:14px;font-weight:100;line-height:18px",versionlist[version].files[versionlist[version].codes.x86]&&(c.href="https://drive.google.com/uc?confirm=t&id="+versionlist[version].files[versionlist[version].codes.x86]),a.appendChild(c)}if(versionlist[version].codes["arm64-v8a"]){var d=document.createElement("a");d.textContent="arm64-v8a: "+versionlist[version].codes["arm64-v8a"],d.style="display:block;font-size:14px;font-weight:100;line-height:18px",versionlist[version].files[versionlist[version].codes["arm64-v8a"]]&&(d.href="https://drive.google.com/uc?confirm=t&id="+versionlist[version].files[versionlist[version].codes["arm64-v8a"]]),a.appendChild(d)}if(versionlist[version].codes.x86_64){var e=document.createElement("a");e.textContent="x86_64: "+versionlist[version].codes.x86_64,e.style="display:block;font-size:14px;font-weight:100;line-height:18px",versionlist[version].files[versionlist[version].codes.x86_64]&&(e.href="https://drive.google.com/uc?confirm=t&id="+versionlist[version].files[versionlist[version].codes.x86_64]),a.appendChild(e)}if(versionlist[version].beta){var f=document.createElement("a");f.textContent="Beta",f.style="display:block",a.appendChild(f)}var i=document.createElement("div");i.className="filedownload-container nbtcontainer",i.appendChild(a),document.getElementById("mcversion").insertBefore(i,document.getElementById("mcversion").firstChild),console.log=versionlist[version]}while(versionlist[version+1])})()
