const btn_close = document.querySelector('#close')
const cont_cookies = document.querySelector('.cookies')

const accept = document.querySelector("#accept");

(function comprobarCookie() {
    if (localStorage.cookie1 == 'true') {
        cont_cookies.style.bottom = '-200px'
    }
})()

// function  comprobarCookie() {
//     if (localStorage.cookie1 == 'true') {
//         cont_cookies.style.bottom = '-200px'
//     }
// }

// comprobarCookie();

function aceptarCookies() {
    localStorage.cookie1 = 'true'
    cont_cookies.style.bottom = '-200px'

    let expire = new Date()
    expire = new Date(expire.getTime() + 776000000)
    document.cookie1 = 'cookie1=aceptada; expire'+expire
}

accept.addEventListener('click', () => {
    aceptarCookies();
});

btn_close.addEventListener('click', () => {
    cont_cookies.style.bottom = '-200px'
});