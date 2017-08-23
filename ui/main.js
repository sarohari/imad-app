console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = "hi to all";

var img = document.getElementById("dino");

var marginleft = 100;

function moveRight(){
marginleft = marginleft + 5 ;
img.style.marginLeft = marginleft + 'px';
};

img.onclick = function () {
var interval = setInterval(moveRight,50);
};


