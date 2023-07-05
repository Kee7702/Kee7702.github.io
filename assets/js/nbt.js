vars = Array.from(preset.split('<!presetVar=')).map(p=>p.split('!>')[0]);
let insert = '';
let script = '';
let innerText = document.getElementsByTagName('h2')[0].innerText;
vars[0] = '';
for (const rr of vars) {
    if (rr.length > 0) {
        insert += '<p style="line-height:0">' + rr + '</p><input type="text" placeholder="' + rr + '" name="' + rr + '" required="">';
        script += "prexport=prexport.replace('<!presetVar=" + rr + "!>',document.getElementsByName('" + rr + "')[0].value);"
    }
}
;document.getElementsByTagName('section')[0].innerHTML = '<h3 style="margin: 0 0 8px;">' + innerText + '</h3>' + insert + '<button onclick="presetExport()">Export</button>';
a = document.createElement('script');
a.innerHTML = 'function presetExport() {prexport=preset;' + script + 'const link=document.createElement(\'a\');const content=prexport;const file=new Blob([content], {type:\'text/plain\'});link.href=URL.createObjectURL(file);link.download=\'' + innerText.split('(')[1].split(')')[0].replaceAll(' ', '') + '\'+new Date().valueOf().toString(36)+\'.txt\';link.click();URL.revokeObjectURL(link.href)}';
document.getElementsByTagName('section')[0].appendChild(a)
