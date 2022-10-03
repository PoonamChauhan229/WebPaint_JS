var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
let color = "#000";//black color hexa code
let offsetX = canvas.offsetLeft;
let offsetY = canvas.offsetTop;
let brushthickness = 7;
// 
const erase = () => (ctx.globalCompositeOperation = "destination-out");

//set current color
document.querySelector(".color-btn div").style.backgroundColor = color;
console.log(document.querySelector(".color-btn"))


// getElementsByClassName() returns an HTMLCollection not an Array. You have to convert it into a JavaScript array first :
// This is because querySelectorAll returns a NodeList (which is a collection of objects).
// const elems = document.querySelectorAll('select option:checked');
// const values = Array.prototype.map.call(elems, ({ value }) => value);
function setActiveColor() {
    document.querySelector(".color-btn div").style.backgroundColor = color;
    ctx.strokeStyle = color;
    ctx.globalCompositeOperation = "source-over";
  }
function setColor(){
    var pallete=document.querySelectorAll('.color')
    console.log(pallete)
    Array.prototype.map.call(pallete,(element)=>{
        // console.log(element)
        // fetching the color code
        element.addEventListener('click',()=>{
            color=element.getAttribute("style").split("--set-color:")[1]
            console.log(color)
            setActiveColor()
        })
    })
}
setColor()
