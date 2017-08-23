console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = "hi to all";

var img = document.getElementById("dino");

img.onclick = function () {
    img.style.marginLeft = "100px";
};


