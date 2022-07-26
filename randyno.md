<script>function colorroll() {document.getElementsByTagName('section')[0].innerHTML = ''
var imagedata = document.createElement('a');
imagedata.innerHTML = '<img src="https://color.dyno.gg/color/' + Math.floor(Math.random() * 16777215).toString(16) + '/1024.png">';
imagedata.href = 'javascript:colorroll();';
document.getElementsByTagName('section')[0].appendChild(imagedata)}
colorroll()</script>
