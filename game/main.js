document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);

    const pageMappings = {
        "1v1.lol": "/0/g/1v1lol/",
        "1v1.lol-method-2": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/edit@main/d3hjf73j2e92ge4y.xml",
        "justfall.lol": "/0/g/just-fall/",
        "cluster-rush": "/0/g/cluster-rush/",
        "1": "/0/g/1/",
        "2048": "/0/g/2048/",
        "wings.io": "http://wings.io",
        "roblox": "/0/g/Roblox/",
        "gacha-club": "/0/g/gacha-club/",
        "papas-burgeria": "/0/g/papas-burgeria/",
        "doge-miner": "/0/g/doge-miner/",
    };

    const filePath = pageMappings[queryString];

    if (filePath) {
        document.getElementById("content").src = filePath;
    }
});