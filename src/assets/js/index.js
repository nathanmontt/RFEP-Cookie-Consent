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