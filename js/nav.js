document.getElementById('burger').addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('/html/nav.html')
        .then( response => response.text() )
        .then( text => document.getElementById('burger').innerHTML = text);
}

