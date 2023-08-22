if (gameMapping.hasOwnProperty(gameParam)) {
    var htmlFileName = gameMapping[gameParam];
    var contentDiv = document.getElementById('content');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', htmlFileName, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            contentDiv.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
} else {

    document.getElementById('content').innerHTML = 'No param detected! Redirecting...<meta http-equiv="refresh" content="1; url=/">';
}