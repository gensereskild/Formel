class Match {
    constructor(wave_setup) {
        console.log(wave_setup);
        this._wave_setup = wave_setup;
        this._current_wave = 0;
        this._waves = [] //liste med waves
        this._finished = false;
        console.log("LISTEN MED WAVES ER: " + this._wave_setup);
        //Lager Waves
        for (var i = 0; i < this._wave_setup.length; i++) {
            var current = this._wave_setup[i]
            this._waves.push(new Wave(current[0], current[1], current[2]))
        }

    }

    draw_wave_msg() {
        if (this._current_wave > this._waves.length) {
            this._finished = true;
        } else {

            this._waves[this._current_wave].draw_wave();

            if (this._waves[this._current_wave].is_wave_alive() == false) {
                this.next_wave();
            }
        }
    }

    next_wave() {
        this._current_wave++;
        console.log("NESTE WAVE STARTER!")
    }

    is_finished() {
        return this._finished;
    }
}

class Wave {
    constructor(red_number, blue_number, green_number) {
        this._red_number = red_number;
        this._blue_number = blue_number; //TODO: kan kanskje fjerne disse, blir ikke brukt utenfor constructor. Bare bruk parameterne.
        this._green_number = green_number;

        this._reds = [];
        this._blues = []; //lister for å holde hvert ballong objekt.
        this._greens = [];


        for (var b = 0; b < this._red_number; b++) {
            this._reds.push(new Balloon("red", 1, 3)) //konstruerer røde blåe og grønne
        }
        for (var b = 0; b < this._blue_number; b++) {
            this._blues.push(new Balloon("blue", 2, 4)) //TODO: fiks hastighetene. Økt for testing
        }
        for (var b = 0; b < this._green_number; b++) {
            this._greens.push(new Balloon("green", 3, 5))
        }

    }

    draw_wave() {
        console.log("SENDER TEGNING")
        for (var i = 0; i < this._reds.length; i++) { //draw røde
            console.log(this._reds);
            this._reds[i].draw();
        }

        for (var i = 0; i < this._blues.length; i++) { //draw blåe
            this._blues[i].draw(); //TODO: kan kanskje bruke eval her :D
        }

        for (var i = 0; i < this._greens.length; i++) { //draw grønne
            this._greens[i].draw();
        }
    }

    is_wave_alive() {
        var check = false;
        for (var q = 0; q < this._reds.length; q++) {
            if (this._reds[q].is_alive() == true) {
                check = true;
                console.error("REDS LEVER")
            }
        }
        for (var q = 0; q < this._blues.length; q++) {
            if (this._blues[q].is_alive() == true) {
                check = true;
                console.error("BLUES LEVER")
            }
        }
        console.error(this._greens.length);
        for (var q = 0; q < this._greens.length; q++) {
            if (this._greens[q].is_alive() == true) {
                check = true;
                console.error("GREENS LEVER")
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
        this._posx = 100;
        this._posy = 0;
        this._speed = speed;
        this._alive = true;
    }

    draw() {

        console.log("bruh")
        if (this._posy < 400) {
            this._posy += this._speed
        } else {
            this._posx += this._speed
        }

        ctx.beginPath();
        ctx.arc(this._posx, this._posy, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this._color;
        ctx.fill();

        if (this._hp == 0) {
            this._alive = false;
        }

        if (this._posx > c.width + 100 || this._posy > c.height + 100) {
            this._alive = false;
            console.log("død")
            //return this._hp
        }



    }
    is_alive() {
        console.log("LEVER")
        return this._alive;
    }
    is_out_of_map() {
        // if(this._posx>c.width+100 || this._posy>c.height+100){
        //     this._alive=false;
        //     console.log("død")
        //     return this._hp
        // }
    }
} //TODO: fjern unødvendige console.log's