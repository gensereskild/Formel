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
        //Jeg endret fra > til >= sånn at man ikke får error når waves er over
        if (this._current_wave >= this._waves.length) {
            this._finished = true;
            alert("du vant gg ez")
        } 
        else {
            if (this._waves[this._current_wave].is_wave_alive() == false) {
                console.log("newxt wave")
                this.next_wave();
            }

            this._waves[this._current_wave].draw_wave();
            this._waves[this._current_wave].first_baloon();
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
        this.all_ballon=[];
        this.posyy=[];
        this.soret=[];

        for (var b = 0; b < this._red_number; b++) {
            this._reds.push(new Balloon(1)) //konstruerer røde blåe og grønne
            this.all_ballon.push(this._reds[b])
        }
        for (var b = 0; b < this._blue_number; b++) {
            this._blues.push(new Balloon(2)) //TODO: fiks hastighetene. Økt for testing
            this.all_ballon.push(this._blues[b])
        }
        for (var b = 0; b < this._green_number; b++) {
            this._greens.push(new Balloon(3))
            this.all_ballon.push(this._greens[b])
        }
        console.log(this.all_ballon)

    }
    first_baloon(){
        this.soret=[]
        this.posyy=[]
        for(var i =0; i<this.all_ballon.length; i++){
        this.posyy.push(this.all_ballon[i]._posy)
        }
        this.posyy.sort(function(a,b){return b-a})

        for(var i =0; i<this.all_ballon.length; i++){
            for(var x =0; x<this.all_ballon.length; x++){


                if(this.all_ballon[x]._posy==this.posyy[i]){
                    this.soret.push(this.all_ballon[x])
                }
            }
        }
        console.log(this.soret)
    }

    draw_wave() {
       /* for (var i = 0; i < this._reds.length; i++) { //draw røde
            this._reds[i].draw();
        }

        for (var i = 0; i < this._blues.length; i++) { //draw blåe
            this._blues[i].draw(); //TODO: kan kanskje bruke eval her :D
        }

        for (var i = 0; i < this._greens.length; i++) { //draw grønne
            this._greens[i].draw();
        }*/
        for (var i =0; i<this.all_ballon.length; i++){
            this.all_ballon[i].draw()
            if(this.all_ballon[i].is_alive()==false)
            this.all_ballon.splice(i,1);
        }
    }

    is_wave_alive() {
        var check = true;
        /*for (var q = 0; q < this._reds.length; q++) {
            if (this._reds[q].is_alive() == true) {
                check = true;
            }
        }
        for (var q = 0; q < this._blues.length; q++) {
            if (this._blues[q].is_alive() == true) {
                check = true;
            }
        }
        for (var q = 0; q < this._greens.length; q++) {
            if (this._greens[q].is_alive() == true) {
                check = true;
            }
        }*/
        if (this.all_ballon.length==0){

            check=false
        }
        return check;
    }
}




class Balloon {
    constructor(hp) {
        this._hp = hp;
        this._posx = 100;
        this._posy = 0;
        this._alive = true;
    }

    draw() {
        if (this._hp==3){
            this._color="green"
            this._speed=3;
        }
        else if(this._hp==2){
            this._color="blue"
            this._speed=2
        }
        else if(this._hp==1){
            this._color="red"
            this._speed=1
        }
        else{
            this._alive=false;
            testMatch._waves[testMatch._current_wave].soret.splice(0,1);
        }

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
            //return this._hp
        }



    }
    is_alive() {
        return this._alive;
    }
} //TODO: fjern unødvendige console.log's

class emotes{
    constructor(bilde,damage,posx,posy,attack_speed){
        this.posx=posx
        this.posy=posy
        this.img = document.createElement('img')
        this.img.src= bilde
        this.prosjektiler=[]
        this.attack_speed=attack_speed
        this.counter=0;
    }
    draw(){
        ctx.drawImage(this.img,this.posx,this.posy,50,50)
    }
    skyt(){
        this.counter++
        if(this.counter==this.attack_speed){
        this.prosjektiler.push(new prosjektil(this.posx,this.posy))
        this.counter=0
        }
        for(var i=0; i<this.prosjektiler.length; i++){
            this.prosjektiler[i].draw(testMatch._waves[testMatch._current_wave].soret[0]._posx,
                 testMatch._waves[testMatch._current_wave].soret[0]._posy);

            this.prosjektiler[i].collide(testMatch._waves[testMatch._current_wave].soret[0]._posx,
                 testMatch._waves[testMatch._current_wave].soret[0]._posy)
                 console.log(testMatch._waves[testMatch._current_wave].soret[0])
        }
    }
}

class prosjektil{
    constructor(posx,posy){
        this.posx=posx;
        this.posy=posy;
    }
    //skal fikse det her fr fr
    draw(balong_posx,balong_posy){
        if (this.posx<c.width-100 && this.posy<c.height-100){
            this.difx=this.posx-balong_posx
            this.dify=this.posy-balong_posy
            /*this.hyp = Math.sqrt(this.difx**2+this.dify**2)
            this.anglex=Math.acos(this.difx/this.hyp)*(180/Math.PI)
            this.angely=Math.asin(this.dify/this.hyp)*(180/Math.PI)
            console.log("vinkelx "+this.angelx)
            console.log("vinkely "+this.angely)
            this.posx+=5*this.anglex
            this.posy+=5*this.angley*/

            this.aangle = Math.atan2( this.dify, this.difx ) * ( 180 / Math.PI )
            console.log("forskjellx "+this.difx)
            console.log("forskjelly "+this.dify)
            console.log("vinkel "+this.aangle);
            
            console.log("cosinus av vinkel"+Math.cos(this.aangle))
            this.posx+=Math.cos((this.aangle/90)*Math.PI)*-5
            this.posy+=Math.sin((this.aangle/90)*Math.PI)*-5

            /*if (balong_posx>this.posx){
                this.posx+=5
            }
            else{
                this.posx+=-5
            }
            if (balong_posy>this.posy){
                this.posy+=5
            }
            else{
                this.posy+=-5
            }*/
        ctx.beginPath();
        ctx.rect(this.posx, this.posy, 15, 15);
        ctx.stroke();
        }
    }
    collide(balong_posx,balong_posy){
        this.differencex=Math.abs(balong_posx-this.posx)
        this.differencey=Math.abs(balong_posy-this.posy)

console.log("balong posisjon"+balong_posx+" "+balong_posy+" prosjektil posisjon" + this.posx +" "+ this.posy);

        if (Math.sqrt((this.differencex**2)+(this.differencey**2))<50){
            console.error("kollisjon")

            //testMatch._waves[testMatch._current_wave].all_ballon.splice(0,1);
            testMatch._waves[testMatch._current_wave].soret[0]._hp+=-1;
            omegalul.prosjektiler.splice(0,1);
        }
    }
}

//mega viktig kode for meg :YEP: så jeg ikke mister oversikt
//testMatch._waves[0]._reds[0]._posx
//ting å implemintere
// kjøpe tårn, penger, hjerter, baner, forskjellige tårn, oppgraderinger til tårn, lagring av data, bedre grafikk