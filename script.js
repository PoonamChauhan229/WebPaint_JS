var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
let color = "#000";//black color hexa code
let offsetX = canvas.offsetLeft;
let offsetY = canvas.offsetTop;
let brushthickness = 7;
// 
const erase = () => (ctx.globalCompositeOperation = "destination-out");

//set current color
document.querySelector(".color-box").style.backgroundColor = color;