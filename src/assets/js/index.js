'use strict'

const containerCookieConsent = document.getElementById('container-cookie-consent');
const ok = document.querySelector('.ok');
const close = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', () => {
    setTimeToShowCookieBlock();
    okCloseFunc();
    closeFuncIcon();
})

function setTimeToShowCookieBlock () {
    setTimeout(() => {
        containerCookieConsent.classList.remove('hidden')
    }, 2000);
}

function okCloseFunc () {
    ok.addEventListener('click', () => {
        containerCookieConsent.classList.add('hidden');
    });
}
function closeFuncIcon () {
    close.addEventListener('click', () => {
        containerCookieConsent.classList.add('hidden');
    });
}

/*
<div id="container-cookie-consent">
    <div class="close">&times;</div>
    <div class="container-content-cookies">
        <img src="assets/img/icon/cookie.png" alt="Cookie Image" class="cookie">
        <p class="desc-cookie">We use cookies to impove your user experience</p>
        <button class="ok">I like Cookies</button>
    </div>
</div>
*/