

class Match {
    constructor(wave_setup) {
        this._wave_setup = wave_setup;
        this._current_wave = 0;
        this._waves = [] //liste med waves

        //Lager Waves
        for(i=0; i<this.wave_setup.length; i++) {
            var current = this._wave_setup[i]
            this._waves.push(Wave(current[1],current[2],current[3]))
        }


    }

    next_wave() {
        
    }

}

class Wave {
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
        this._posx=100;
        this._posy=0;
        this._speed=speed;
    }

    draw() {
        ctx.clearRect(0,0,c.width,c.height);
        //ESKILD FYLL HER FOR DRAW
console.log("bruh")
this._posy+=this._speed
ctx.beginPath();
ctx.arc(this._posx,this._posy,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle=this._color;
ctx.fill();
        return
    }
}

