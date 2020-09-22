let humanImageSheet;
let humanSpritedata;
let humanAnimation=[];
let human;


function preload(){
  humanSpritedata=loadJSON('../animationJSON/humansprite.json');
  humanImageSheet=loadImage('../imgs/entryhuman.png');
}

function setup(){
  createCanvas(400,400)
  let frames=humanSpritedata.frames;

  for (let i=0; i<frames.length;i++){
    let pos = frames[i].position;
    let img = humanImageSheet.get(pos.x,pos.y,pos.w,pos.h);
    // extract some part of the images from the entire sprite image file
    // with coordinate info and width/height info
    humanAnimation.push(img)
  }
  // not that animation array has images information for image rendering


  human= new Sprite(1,humanAnimation,0,0)

}

function draw(){
  frameRate(5)
  background(255);

    human.animate();
    human.show()
 


}