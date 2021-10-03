canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
roverwidth = 100;
roverheight = 90;
roverx = 10;
rovery = 10;
bg = "mars.jpg";
rover = "rover.png";
function uploadBackground() {
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roimg,roverx,rovery,roverwidth,roverheight);
}
function add() {
    bgimg = new Image();
    bgimg.onload=uploadBackground;
    bgimg.source=bg;
    roimg = new Image();
    roimg.onload=uploadrover;
    roimg.source=rover;
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    if(keyPressed == '40') {
        down();
        console.log("down");
    }
    if(keyPressed == '37') {
        left();
        console.log("left");
    }
    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}