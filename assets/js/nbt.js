vars=Array.from(preset.split('<!presetVar=')).map(p => p.split('!>')[0]);let insert='';let script='';vars[0]='';for (const rr of vars) {if(rr.length>0){insert+='<input type="text" placeholder="'+rr+'" name="'+rr+'" required="">';script+="preset.replace('<!presetVar="+rr+"!>',document.getElementsByName('"+rr+"')[0].value)"}};document.getElementsByTagName('section')[0].innerHTML='<p style="line-height:0">NBT Preset Editor (Alpha)</p>'+insert+'<button onclick="presetExport()">Export</button>';a=document.createElement('script');a.innerHTML='function presetExport() {'+script+';const link=document.createElement(\'a\');const content=preset;const file=new Blob([content], {type:\'text/plain\'});link.href=URL.createObjectURL(file);link.download=\'Preset_\'+new Date().valueOf().toString(36)+\'.txt\';link.click();URL.revokeObjectURL(link.href)}';document.getElementsByTagName('section')[0].appendChild(a)
