//fakk deg eskild

var c = document.getElementById("test")
var ctx = c.getContext("2d");
ctx.moveTo(100, 0);
ctx.lineTo(100, 400);
ctx.lineTo(1000,400)
ctx.stroke();

var balong1= new Balloon("red",10)

console.log(balong1._color)

balong1.draw()

window.addEventListener('load',(event)=>{
    setInterval(balong1.draw(),10)
})