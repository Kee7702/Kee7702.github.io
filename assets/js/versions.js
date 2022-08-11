(async()=>{const res=await fetch(`https://raw.githubusercontent.com/Kee7702/Kee7702.github.io/database/app/mcversion.json`);const json=await res.json();versionlist=(json);version=-1
do{version++
var versionicon=document.createElement('i');versionicon.className="material-icons";versionicon.textContent="update"
var versiontitle=document.createElement('a');versiontitle.textContent=versionlist[version].version_name
var versionbeta=null
var versioncodearmeabiv7a=null
var versioncodex86=null
var versioncodearm64v8a=null
var versioncodex8664=null
var versionname=document.createElement('div');versionname.className="nbt-filedownload";versionname.appendChild(versionicon);versionname.appendChild(versiontitle);var versioncodes=document.createElement('a');versioncodes.textContent="Version Codes"
versioncodes.style="display:block;font-size:18px;line-height:22px"
versionname.appendChild(versioncodes);
if(versionlist[version].codes['armeabi-v7a'] && !versionlist[version].downloadable){var versioncodearmeabiv7a=document.createElement('a');versioncodearmeabiv7a.textContent=("armeabi-v7a: "+versionlist[version].codes['armeabi-v7a'])
versioncodearmeabiv7a.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodearmeabiv7a)}else{}
if(versionlist[version].codes.x86 && !versionlist[version].downloadable){var versioncodex86=document.createElement('a');versioncodex86.textContent=("x86: "+versionlist[version].codes.x86)
versioncodex86.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodex86)}else{}
if(versionlist[version].codes['arm64-v8a'] && !versionlist[version].downloadable){var versioncodearm64v8a=document.createElement('a');versioncodearm64v8a.textContent=("arm64-v8a: "+versionlist[version].codes['arm64-v8a'])
versioncodearm64v8a.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodearm64v8a)}else{}
if(versionlist[version].codes.x86_64 && !versionlist[version].downloadable){var versioncodex8664=document.createElement('a');versioncodex8664.textContent=("x86_64: "+versionlist[version].codes.x86_64)
versioncodex8664.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodex8664)}else{}
if(versionlist[version].codes['armeabi-v7a'] && versionlist[version].downloadable){var versioncodearmeabiv7a=document.createElement('a');versioncodearmeabiv7a.textContent=("armeabi-v7a: "+versionlist[version].codes['armeabi-v7a'])
versioncodearmeabiv7a.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodearmeabiv7a.href=('/assets/apk/mcversion/' + versionlist[version].codes['armeabi-v7a'] + '.apk')
versionname.appendChild(versioncodearmeabiv7a)}else{}
if(versionlist[version].codes.x86 && versionlist[version].downloadable){var versioncodex86=document.createElement('a');versioncodex86.textContent=("x86: "+versionlist[version].codes.x86)
versioncodex86.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodex86.href=('/assets/apk/mcversion/' + versionlist[version].codes.x86 + '.apk')
versionname.appendChild(versioncodex86)}else{}
if(versionlist[version].codes['arm64-v8a'] && versionlist[version].downloadable){var versioncodearm64v8a=document.createElement('a');versioncodearm64v8a.textContent=("arm64-v8a: "+versionlist[version].codes['arm64-v8a'])
versioncodearm64v8a.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodearm64v8a.href=('/assets/apk/mcversion/' + versionlist[version].codes['arm64-v8a'] + '.apk')
versionname.appendChild(versioncodearm64v8a)}else{}
if(versionlist[version].codes.x86_64 && versionlist[version].downloadable){var versioncodex8664=document.createElement('a');versioncodex8664.textContent=("x86_64: "+versionlist[version].codes.x86_64)
versioncodex8664.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodex8664.href=('/assets/apk/mcversion/' + versionlist[version].codes.x86_64 + '.apk')
versionname.appendChild(versioncodex8664)}else{}
if(versionlist[version].beta){var versionbeta=document.createElement('a');versionbeta.textContent="Beta"
versionbeta.style="display:block"
versionname.appendChild(versionbeta)}else{}
var versioncontainer=document.createElement('div');versioncontainer.className="filedownload-container nbtcontainer";versioncontainer.appendChild(versionname);document.getElementById("mcversion").insertBefore(versioncontainer,(document.getElementById("mcversion").firstChild))
console.log=(versionlist[version])}
while(versionlist[version+1]);})();(async()=>{const res=await fetch(`https://raw.githubusercontent.com/Kee7702/Kee7702.github.io/database/app/tbversion.json`);const json=await res.json();versionlist=(json);version=-1
do{version++
var versionicon=document.createElement('i');versionicon.className="material-icons";versionicon.textContent="update"
var versiontitle=document.createElement('a');versiontitle.textContent=versionlist[version].version_name
var versionbeta=null
var versioncodearmeabiv7a=null
var versioncodex86=null
var versioncodearm64v8a=null
var versioncodex8664=null
var versionname=document.createElement('div');versionname.className="nbt-filedownload";versionname.appendChild(versionicon);versionname.appendChild(versiontitle);var versioncodes=document.createElement('a');versioncodes.textContent="Version Codes"
versioncodes.style="display:block;font-size:18px;line-height:22px"
versionname.appendChild(versioncodes);
if(versionlist[version].codes['armeabi-v7a'] && !versionlist[version].downloadable){var versioncodearmeabiv7a=document.createElement('a');versioncodearmeabiv7a.textContent=("armeabi-v7a: "+versionlist[version].codes['armeabi-v7a'])
versioncodearmeabiv7a.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodearmeabiv7a)}else{}
if(versionlist[version].codes.x86 && !versionlist[version].downloadable){var versioncodex86=document.createElement('a');versioncodex86.textContent=("x86: "+versionlist[version].codes.x86)
versioncodex86.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodex86)}else{}
if(versionlist[version].codes['arm64-v8a'] && !versionlist[version].downloadable){var versioncodearm64v8a=document.createElement('a');versioncodearm64v8a.textContent=("arm64-v8a: "+versionlist[version].codes['arm64-v8a'])
versioncodearm64v8a.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodearm64v8a)}else{}
if(versionlist[version].codes.x86_64 && !versionlist[version].downloadable){var versioncodex8664=document.createElement('a');versioncodex8664.textContent=("x86_64: "+versionlist[version].codes.x86_64)
versioncodex8664.style="display:block;font-size:14px;font-weight:100;line-height:18px"
versionname.appendChild(versioncodex8664)}else{}
if(versionlist[version].codes['armeabi-v7a'] && versionlist[version].downloadable){var versioncodearmeabiv7a=document.createElement('a');versioncodearmeabiv7a.textContent=("armeabi-v7a: "+versionlist[version].codes['armeabi-v7a'])
versioncodearmeabiv7a.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodearmeabiv7a.href=('/assets/apk/tbversion/' + versionlist[version].codes['armeabi-v7a'] + '.apk')
versionname.appendChild(versioncodearmeabiv7a)}else{}
if(versionlist[version].codes.x86 && versionlist[version].downloadable){var versioncodex86=document.createElement('a');versioncodex86.textContent=("x86: "+versionlist[version].codes.x86)
versioncodex86.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodex86.href=('/assets/apk/tbversion/' + versionlist[version].codes.x86 + '.apk')
versionname.appendChild(versioncodex86)}else{}
if(versionlist[version].codes['arm64-v8a'] && versionlist[version].downloadable){var versioncodearm64v8a=document.createElement('a');versioncodearm64v8a.textContent=("arm64-v8a: "+versionlist[version].codes['arm64-v8a'])
versioncodearm64v8a.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodearm64v8a.href=('/assets/apk/tbversion/' + versionlist[version].codes['arm64-v8a'] + '.apk')
versionname.appendChild(versioncodearm64v8a)}else{}
if(versionlist[version].codes.x86_64 && versionlist[version].downloadable){var versioncodex8664=document.createElement('a');versioncodex8664.textContent=("x86_64: "+versionlist[version].codes.x86_64)
versioncodex8664.style="display:block;font-size:14px;font-weight:100;line-height:18px;text-decoration:underline"
versioncodex8664.href=('/assets/apk/tbversion/' + versionlist[version].codes.x86_64 + '.apk')
versionname.appendChild(versioncodex8664)}else{}
if(versionlist[version].beta){var versionbeta=document.createElement('a');versionbeta.textContent="Beta"
versionbeta.style="display:block"
versionname.appendChild(versionbeta)}else{}
var versioncontainer=document.createElement('div');versioncontainer.className="filedownload-container nbtcontainer";versioncontainer.appendChild(versionname);document.getElementById("tbversion").insertBefore(versioncontainer,(document.getElementById("tbversion").firstChild))
console.log=(versionlist[version])}
while(versionlist[version+1]);})()
