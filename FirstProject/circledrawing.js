
class circle{
    continent;
    medium;
    era;
    index;
    xcoord=random(margin.left,width-margin.right)
    ycoord=random(margin.top+100,height-450)
    radius=circleRadius;
    origintrigger;

    constructor(place,type,yrs,number)
    {
        this.continent=place;
        this.medium=type;
        this.era=yrs;
        this.index=number

    }

    // 8개까지는 1열, 16개까지는 2열, 24개까지는 3열 so on and so forth
    move(){

        if(this.origintrigger){
            // 해당하는 continent의 x좌표보다 작은 경우 조금씩 더해나가고, 큰 경우 조금씩 빼나간다.
            if(this.xcoord>this.continent
                && this.ycoord<height-margin.bottom-120){
                this.xcoord=this.xcoord-10;
                this.ycoord=this.ycoord+10;
            } 
            
            else if (this.xcoord<this.continent
                && this.ycoord<height-margin.bottom-120){
                this.xcoord=this.xcoord+10;
                this.ycoord=this.ycoord+10;
            }

            else if(this.ycoord>height-margin.bottom-120){

                this.xcoord=this.continent+(this.index%8)*15
                this.ycoord=630-(Math.floor( (this.index)/8 )*10)
            }

        }
        else{
                this.xcoord=this.xcoord+random(-2,2);
                this.ycoord=this.ycoord+random(-2,2)
        }

    }

    show(){
        push()
        noStroke();
        
        fill(this.medium);
        
        ellipse(this.xcoord, this.ycoord,this.radius)
        pop()
    }

    toOrigin(){
        this.origintrigger=true;
    }

}
