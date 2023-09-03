document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);

    const pageMappings = {
        "1v1.lol": "/0/g/1v1lol/",
        "1v1.lol-method-2": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/edit@main/d3hjf73j2e92ge4y.xml",
        "1": "/0/g/1/",
    };

    const filePath = pageMappings[queryString];

    if (filePath) {
        document.getElementById("content").src = filePath;
    }
});