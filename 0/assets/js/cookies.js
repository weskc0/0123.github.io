var cookiesAccepted = false;

function acceptCookies() {
    document.getElementById("cookies-alert").style.display = "none";
    cookiesAccepted = true;
    enableActions();
}