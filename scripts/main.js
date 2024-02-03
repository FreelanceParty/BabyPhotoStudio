let popup = document.getElementById("call-me-popup"),
    callMeBtn = document.getElementById("call-me-tab"),
    span = document.getElementsByClassName("close")[0]
;
callMeBtn.onclick = function () {
    popup.style.display = "block";
}
span.onclick = function () {
    popup.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

function register() {
    let popup = document.getElementById('call-me-popup'),
        fullName = document.getElementById("js-full-name").value,
        phoneNumber = document.getElementById("js-phone-number").value,
        email = document.getElementById("js-email").value
    ;
}