const burger = document.querySelector ('.burger');
const mobile = document.querySelector ('.navigation-mobile');

burger.onclick = function () {
    burger .classList.toggle('active')
    mobile .classList.toggle('active')
}