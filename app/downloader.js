const ids = new URLSearchParams(window.location.search);window.location.href = ("https://drive.google.com/uc?id=" + ids.get('id') + "&confirm=t");
