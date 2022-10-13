


class Match {
    constructor(wave_setup) {
        console.log(wave_setup);
        this._wave_setup = wave_setup;
        this._current_wave = 0;
        this._waves = [] //liste med waves
        console.log("LISTEN MED WAVES ER: " + this._wave_setup);

        //Lager Waves
        for(var i=0; i< this._wave_setup.length; i++) {
            var current = this._wave_setup[i]
            this._waves.push(new Wave(current[1],current[2],current[3]))
        }

    }

    draw_wave() {
        this._waves[this._current_wave].draw_wave();
        if(this._waves[this._current_wave].is_wave_alive() == false) {
            this.next_wave();
        }
    }

    next_wave() {
        this._current_wave++;
        console.error("NESTE WAVE STARTER!")
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


        for(var b = 0; b < this._red_number; b++) {
            this._reds.push(new Balloon("red", 1, 1)) //konstruerer røde blåe og grønne
        }
        for(var b = 0; b < this._blue_number; b++) {
            this._blues.push(new Balloon("blue", 2, 2))
        }
        for(var b = 0; b < this._green_number; b++) {
            this._greens.push(new Balloon("green", 3, 3))
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

    is_wave_alive() {
        var check = false;
        for (var q = 0; q < this._reds; q++) {
            if(this._reds[q].is_alive() == true) {
                check = true;
            }
        }
        for (var q = 0; q < this._blues; q++) {
            if(this._blues[q].is_alive() == true) {
                check = true;
            }
        }
        for (var q = 0; q < this._greens; q++) {
            if(this._greens[q].is_alive() == true) {
                check = true;
            }
        }
        console.log("Skjekket om i live: " + check)
        return check;
    }
}




class Balloon {
    constructor(color, hp, speed) {
        this._color = color;
        this._hp = hp;
        this._posx=100;
        this._posy=0;
        this._speed=speed;
        this._alive=true;
    }

    draw() {

console.log("tegner")
if(this._posy<400){
this._posy+=this._speed
}
else{
    this._posx+=this._speed
}

ctx.beginPath();
ctx.arc(this._posx,this._posy,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle=this._color;
ctx.fill();

if(this._hp==0){
    this._alive=false;
}

    }
    is_alive(){
        return this._alive;
    }
    is_out_of_map(){
        if(this._posx>c.width+100 || this._posy>c.height+100){
            this._alive=false;
            console.log("død")
            return this._hp
        }
    }
}

