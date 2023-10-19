function playMusic1(){
var music = new Audio('sound/puk.mp3');
music.play();}

function playMusic2(){
var music = new Audio('sound/stonks.mp3');
music.play();}

(() => {
'use strict';
const objects = document.getElementsByClassName('img');
Array.from(objects).map((item) => {
const img = new Image();
img.src = item.dataset.src;
img.onload = () => {
item.classList.remove('img');
return item.nodeName === 'IMG' ? 
item.src = item.dataset.src :        
item.style.backgroundImage = `url(${item.dataset.src})`;
};
});
})();

// Функция загрузки CSS или JS, править не нужно.
function loadjscssfile(filename, filetype) {
    if (filetype=="js") { //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css") { //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
};

// Вот тут нужно править под конкретные нужды.
function appendAssets() {
    if (window.innerWidth <= 1023) {
        loadjscssfile("css/small.css", "css"); // передаем в функцию путь до файла и расширение
    }
    else if (window.innerWidth <= 1080 && window.innerWidth >= 768) {
        loadjscssfile("css/styles.css", "css"); // передаем в функцию путь до файла и расширение
    }
    else if (window.innerWidth >= 1081) {
        loadjscssfile("css/styles.css", "css"); // передаем в функцию путь до файла и расширение
    }
};

// Инициализация конечной функции 
appendAssets();