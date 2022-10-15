//fakk deg eskild

var c = document.getElementById("test")
var ctx = c.getContext("2d");

/*
var balong1= new Balloon("red",10,1)
var test1; 
console.log(balong1._color) */

//balong1.draw()



var testMatch = new Match([
    [1, 1, 1],
    [1, 1, 1]
]);

var omegalul = new emotes("img/Omegalul.webp",1,200,200,30)

var start = document.getElementById("start")

var mainloop =-1

start.addEventListener("click", function(){

    if(mainloop==-1){
    mainloop = setInterval(function () {
        ctx.clearRect(0, 0, c.width, c.height);

        if (testMatch.is_finished() != true) {
            testMatch.draw_wave_msg();
        }

        ctx.moveTo(100, 0);
        ctx.lineTo(100, 400);
        ctx.lineTo(1000, 400)
        ctx.stroke();
        
        omegalul.draw();
        omegalul.skyt();
    }, 40)
}
})

var stop = document.getElementById("stop")
stop.addEventListener("click",function(){
    if(mainloop!=-1){
        clearInterval(mainloop);
        mainloop=-1;
    }
})

window.addEventListener('load', (event) => {

    /*test1 = setInterval(function () {
        ctx.clearRect(0, 0, c.width, c.height);

        if (testMatch.is_finished() != true) {
            testMatch.draw_wave_msg();
        }

        ctx.moveTo(100, 0);
        ctx.lineTo(100, 400);
        ctx.lineTo(1000, 400)
        ctx.stroke();
        
        omegalul.draw();
        omegalul.skyt();
    }, 40)*/
})