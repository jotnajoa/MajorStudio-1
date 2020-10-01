var nums =[100,25,46,72];

var num =23;
let colorscheme=["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"];

let bubbles=[];
let bubble1;
let bubble2;


function setup(){
createCanvas(400, 400)
nums.forEach((t,i)=>{

    bubbles.push(new Bubble(random(80*i,30*(i+1)),100,15,30*i))

})

}

function draw(){

    background(0);
    bubbles.forEach((t)=>{
        t.move();
        t.show();
    })
    
}

function mouseClicked() {
    background(0);
    bubbles.forEach((t)=>{
        t.oriclick()
        t.move();
        t.show();
    })
  }

class Bubble{
    xcoord;
    ycoord;
    radius;
    color;
    toOrigin=false;
    originalpoint={};
    // original point will be set which is based on 
    // continent location rendered at the bottom.

    constructor(x,y,r,color){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color
    }

    move(){
        if(!this.toOrigin){
        this.x=this.x+random(-4,4);
        this.y=this.y+random(-4,4);
        }
        else{
        this.x=100;
        this.y=height;
        }
        // noFill();
        // ellipse(this.x,this.y,this.r*2)
    }

    show(){
        noStroke()
        fill(20,30,40,30)
        ellipse(this.x, this.y,this.r*5)
    }

    oriclick(){
        this.toOrigin=true;
    }
    
}