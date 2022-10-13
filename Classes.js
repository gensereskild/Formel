
class wave {
    constructor(wave_number, red_number, blue_number, green_number) {
        this._wave_number = wave_number; //trenger kanskej ikke waveNumber
        this._rednumber = red_number;
        this._blue_number = blue_number;
        this._green_number = green_number;

        this._reds = [];
        this._blues = []; //lister for å holde hvert ballong objekt.
        this._greens = [];
    }
    
    draw_wave() {
        for (var i = 0; i < this._reds.length; i++) { //draw røde
            this._reds[i].draw();
        }

        for (var i = 0; i < this._blues.length; i++) { //draw blåe
            this._reds[i].draw();
        }
    }

}


class Balloon {
    constructor(color, hp) {
        this._color = color;
        this._hp = hp;
        this.posx=100;
        this.posy=0;
    }

    draw() {
        //ESKILD FYLL HER FOR DRAW

ctx.beginPath();
ctx.arc(100,0,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle=this._color;
ctx.fill();
        return
    }
}

