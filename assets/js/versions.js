(async()=>{let k=await fetch("/app/mcversion.json"),l=await k.json();(async()=>{let k=await fetch("/app/tbversion.json"),l=await k.json();tbversionlist=l,tbversion=-1;do{tbversion++;var g=document.createElement("i");g.className="material-icons",g.textContent="update";var j=document.createElement("a");j.textContent=tbversionlist[tbversion].version_name;var c=null,b=null,d=null,e=null,f=null,a=document.createElement("div");a.className="nbt-filedownload",a.appendChild(g),a.appendChild(j);var h=document.createElement("a");if(h.textContent="Version Codes",h.style="display:block;font-size:18px;line-height:22px",a.appendChild(h),tbversionlist[tbversion].codes["armeabi-v7a"]){var b=document.createElement("a");b.textContent="armeabi-v7a: "+tbversionlist[tbversion].codes["armeabi-v7a"],tbversionlist[tbversion].files&&tbversionlist[tbversion].files[tbversionlist[tbversion].codes["armeabi-v7a"]]&&(b.href="https://drive.google.com/uc?confirm=t&id="+tbversionlist[tbversion].files[tbversionlist[tbversion].codes["armeabi-v7a"]]),b.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(b)}if(tbversionlist[tbversion].codes.x86){var d=document.createElement("a");d.textContent="x86: "+tbversionlist[tbversion].codes.x86,d.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(d)}if(tbversionlist[tbversion].codes["arm64-v8a"]){var e=document.createElement("a");e.textContent="arm64-v8a: "+tbversionlist[tbversion].codes["arm64-v8a"],e.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(e)}if(tbversionlist[tbversion].codes.x86_64){var f=document.createElement("a");f.textContent="x86_64: "+tbversionlist[tbversion].codes.x86_64,f.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(f)}if(tbversionlist[tbversion].beta){var c=document.createElement("a");c.textContent="Beta",c.style="display: block;line-height: 16px;margin-top: 4px;",a.appendChild(c)}var i=document.createElement("div");i.style="background:#222",i.className="filedownload-container",i.appendChild(a),document.getElementById("tbversion").insertBefore(i,document.getElementById("tbversion").firstChild),tbversioncode=9==JSON.stringify(tbversionlist[50].codes).split(':')[1].split(',')[0].toString().length?JSON.stringify(tbversionlist[50].codes).split(':')[1].split(',')[0].slice(2):tbversionlist[tbversion].codes["armeabi-v7a"].toString(),document.getElementById("loading-versions").style='display:none',console.log("%cToolbox Version "+tbversionlist[tbversion].version_name+" ("+tbversioncode+")","color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:#333"),document.getElementById('tbversioncount').textContent='Toolbox ('+tbversionlist.length+' Versions)',tbversionlist[tbversion+1]||console.log("%cThis project includes "+tbversionlist.length+" total Toolbox versions archived!","color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:#333")}while(tbversionlist[tbversion+1])})();mcversionlist=l,mcversion=-1;do{mcversion++;var g=document.createElement("i");g.className="material-icons",g.textContent="update";var j=document.createElement("a");j.textContent=mcversionlist[mcversion].version_name;var c=null,b=null,d=null,e=null,f=null,a=document.createElement("div");a.className="nbt-filedownload",a.appendChild(g),a.appendChild(j);var h=document.createElement("a");if(h.textContent="Version Codes",h.style="display:block;font-size:18px;line-height:22px",a.appendChild(h),mcversionlist[mcversion].codes["armeabi-v7a"]){var b=document.createElement("a");b.textContent="armeabi-v7a: "+mcversionlist[mcversion].codes["armeabi-v7a"],mcversionlist[mcversion].files&&mcversionlist[mcversion].files[mcversionlist[mcversion].codes["armeabi-v7a"]]&&(b.href="https://drive.google.com/uc?confirm=t&id="+mcversionlist[mcversion].files[mcversionlist[mcversion].codes["armeabi-v7a"]]),b.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(b)}if(mcversionlist[mcversion].codes.x86){var d=document.createElement("a");d.textContent="x86: "+mcversionlist[mcversion].codes.x86,d.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(d)}if(mcversionlist[mcversion].codes["arm64-v8a"]){var e=document.createElement("a");e.textContent="arm64-v8a: "+mcversionlist[mcversion].codes["arm64-v8a"],e.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(e)}if(mcversionlist[mcversion].codes.x86_64){var f=document.createElement("a");f.textContent="x86_64: "+mcversionlist[mcversion].codes.x86_64,f.style="display:block;font-size:14px;font-weight:100;line-height:18px",a.appendChild(f)}if(mcversionlist[mcversion].beta){var c=document.createElement("a");c.textContent="Beta",c.style="display: block;line-height: 16px;margin-top: 4px;",a.appendChild(c)}var i=document.createElement("div");i.style="background:#222",i.className="filedownload-container",i.appendChild(a),document.getElementById("mcversion").insertBefore(i,document.getElementById("mcversion").firstChild),mcversioncode=9==JSON.stringify(mcversionlist[50].codes).split(':')[1].split(',')[0].toString().length?JSON.stringify(mcversionlist[50].codes).split(':')[1].split(',')[0].slice(2):mcversionlist[mcversion].codes["armeabi-v7a"].toString(),document.getElementById("loading-versions").style='display:none',console.log("%cMinecraft Version "+mcversionlist[mcversion].version_name+" ("+mcversioncode+")","color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:#333"),document.getElementById('mcversioncount').textContent='Minecraft ('+mcversionlist.length+' Versions)',mcversionlist[mcversion+1]||console.log("%cThis project includes "+mcversionlist.length+" total Minecraft versions archived!","color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:#333")}while(mcversionlist[mcversion+1])})()
function randomver(list) {if(list=='mc'){temprandomversion=Math.floor(Math.random()*mcversionlist.length)-1;console.log('Minecraft Version '+mcversionlist[temprandomversion].version_name+'\nCode(s): '+(temprandomversioncodes=JSON.stringify((JSON.stringify(mcversionlist[temprandomversion].codes).split(':')).map(p => p.split(',')[0].split('{')[0].split('}'))).replaceAll('[','').replaceAll('"','').replaceAll(']','').substr(1),temprandomversioncodes=temprandomversioncodes.split(''),temprandomversioncodes[temprandomversioncodes.length-1]='',temprandomversioncodes.join().replaceAll(',,,',' . ').replaceAll(',','').replaceAll(' . ',', ')))}if(list=='tb'){temprandomversion=Math.floor(Math.random()*tbversionlist.length)-1;console.log('Toolbox Version '+tbversionlist[temprandomversion].version_name+'\nCode(s): '+(temprandomversioncodes=JSON.stringify((JSON.stringify(tbversionlist[temprandomversion].codes).split(':')).map(p => p.split(',')[0].split('{')[0].split('}'))).replaceAll('[','').replaceAll('"','').replaceAll(']','').substr(1),temprandomversioncodes=temprandomversioncodes.split(''),temprandomversioncodes[temprandomversioncodes.length-1]='',temprandomversioncodes.join().replaceAll(',,,',' . ').replaceAll(',','').replaceAll(' . ',', ')))}}
