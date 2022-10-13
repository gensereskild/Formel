

class match {
    constructor(wave_setup) {
        this._wave_setup = wave_setup;
        this._current_wave = 0;


        //Lager Waves

    }

    next_wave() {
        
    }

}

class wave {
    constructor(red_number, blue_number, green_number) {
        this._red_number = red_number;
        this._blue_number = blue_number;
        this._green_number = green_number;

        this._reds = [];
        this._blues = []; //lister for å holde hvert ballong objekt.
        this._greens = [];


        for(b = 0; b < this._red_number; b++) {
            this._reds.push(Balloon("red", 1, 1)) //konstruerer røde blåe og grønne
        }
        for(b = 0; b < this._blue_number; b++) {
            this._blues.push(Balloon("blue", 2, 2))
        }
        for(b = 0; b < this._green_number; b++) {
            this._greens.push(Balloon("green", 3, 3))
        }

    }
    
    draw_wave() {
        for (var i = 0; i < this._reds.length; i++) { //draw røde
            this._reds[i].draw();
        }

        for (var i = 0; i < this._blues.length; i++) { //draw blåe
            this._blues[i].draw();
        }

        for (var i = 0; i < this._greens.length; i++) { //draw grønne
            this._greens[i].draw();
        }
    }

}


class Balloon {
    constructor(color, hp, speed) {
        this._color = color;
        this._hp = hp;
        thhis._speed = speed;
    }

    draw() {
        //ESKILD FYLL HER FOR DRAW
        var c = document.getElementById("test")
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,0,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle=this._color;
ctx.fill();
        return
    }
}

