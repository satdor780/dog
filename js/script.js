/*let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav, .input');
let logo = document.querySelector('.logo');
let inner = document.querySelector('.header_inner');

burger.addEventListener("click", function() {
    nav.className += ' block';
    logo.className += ' none';
    inner.className += ' header_inner_bg';

})*/

$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.burger, .nav').toggleClass('active_burger')
        $('body').toggleClass('lock')
    });
});