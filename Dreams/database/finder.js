const ids = new URLSearchParams(window.location.search);

var script = document.createElement('script');
script.src = ("/Dreams/database/user/" + ids.get('user') + ids.get('pass') + ".js");
document.getElementsByTagName('head')[0].appendChild(script);
