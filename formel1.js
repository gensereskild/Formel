//fakk deg eskild

var c = document.getElementById("test")
var ctx = c.getContext("2d");

/*
var balong1= new Balloon("red",10,1)
var test1; 
console.log(balong1._color) */

//balong1.draw()

testMatch = new Match([[1,1,1],[1,1,1]]);
testMatch.draw_wave();



window.addEventListener('load',(event)=>{

    test1 = setInterval(function(){
        ctx.clearRect(0,0,c.width,c.height);




       /*if (balong1.is_alive()==true){
        balong1.draw()
       }
        balong1.is_out_of_map() */

        ctx.moveTo(100, 0);
        ctx.lineTo(100, 400);
        ctx.lineTo(1000,400)
        ctx.stroke();
    },10)
})