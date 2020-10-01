class Sprite{
    animation;
    len;
    speed;
    index=0;
    x=0;
    y=0;


    constructor(speed,animation,x,y){
        this.animation=animation;
        this.len=this.animation.length
        this.speed=speed;
        this.x=x;
        this.y=y;
    };

    show(){
    image(this.animation[this.index % this.len],this.x,this.y);
    }

    animate(){
    this.index = this.index+this.speed;
    }
}