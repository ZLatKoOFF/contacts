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
