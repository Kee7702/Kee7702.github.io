(async()=>{let a=await fetch("https://raw.githubusercontent.com/minecraft-linux/mcpelauncher-versiondb/master/versions.json"),b=await a.json();mrarmlist=b,(async()=>{let k=await fetch("https://raw.githubusercontent.com/Kee7702/Kee7702.github.io/database/app/mcversion.json"),l=await k.json();versionlist=l,version=-1;do{version++;var g=document.createElement("i");g.className="material-icons",g.textContent="update";var j=document.createElement("a");j.textContent=versionlist[version].version_name;var c=null,b=null,d=null,e=null,f=null,a=document.createElement("div");a.className="nbt-filedownload",a.appendChild(g),a.appendChild(j);var h=document.createElement("a");if(h.textContent="Version Codes",h.style="display:block;font-size:18px;line-height:22px",a.appendChild(h),versionlist[version].codes["armeabi-v7a"]){var b=document.createElement("a");b.textContent="armeabi-v7a: "+versionlist[version].codes["armeabi-v7a"],versionlist[version].files&&versionlist[version].files[versionlist[version].codes["armeabi-v7a"]]&&(b.href="https://drive.google.com/uc?confirm=t&id="+versionlist[version].files[versionlist[version].codes["armeabi-v7a"]]),b.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(b)}if(versionlist[version].codes.x86){var d=document.createElement("a");d.textContent="x86: "+versionlist[version].codes.x86,d.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(d)}if(versionlist[version].codes["arm64-v8a"]){var e=document.createElement("a");e.textContent="arm64-v8a: "+versionlist[version].codes["arm64-v8a"],e.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(e)}if(versionlist[version].codes.x86_64){var f=document.createElement("a");f.textContent="x86_64: "+versionlist[version].codes.x86_64,f.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(f)}if(versionlist[version].beta){var c=document.createElement("a");c.textContent="Beta",c.style="display:block",a.appendChild(c)}var i=document.createElement("div");i.className="filedownload-container",i.appendChild(a),document.getElementById("mcversion").insertBefore(i,document.getElementById("mcversion").firstChild),versioncode=9==versionlist[version].codes["armeabi-v7a"].toString().length?versionlist[version].codes["armeabi-v7a"].toString().slice(2):versionlist[version].codes["armeabi-v7a"].toString(),document.getElementById("loading-versions").style='display:none',console.log("%cVersion "+versionlist[version].version_name+" ("+versioncode+")","color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:#333"),versionlist[version+1]||console.log("%cThis project includes "+(versionlist.length-mrarmlist.length)+" more builds than MCMrARM's version list.","color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:#333")}while(versionlist[version+1])})()})()
