let humanImageSheet;
let humanSpritedata;
let humanAnimation=[];
let human;
let entryclick=false;


function preload(){
  humanSpritedata=loadJSON('https://raw.githubusercontent.com/jotnajoa/MajorStudio-1/master/FirstProject/animationJSON/humansprite.json');
  humanImageSheet=loadImage('https://raw.githubusercontent.com/jotnajoa/MajorStudio-1/master/FirstProject/imgs/entryhuman.png');
}

function setup(){

  let mywidth=$(window).width();
  let myheight=$(window).height();

  createCanvas(mywidth,myheight)
  let frames=humanSpritedata.frames;

  for (let i=0; i<frames.length;i++){
    let pos = frames[i].position;
    let img = humanImageSheet.get(pos.x,pos.y,pos.w,pos.h);
    // extract some part of the images from the entire sprite image file
    // with coordinate info and width/height info
    humanAnimation.push(img)
  }
  // not that animation array has images information for image rendering


  human= new Sprite(1,humanAnimation,700,280)

}


function draw(){

  frameRate(5)
    human.animate();
    human.show();
}


$('.entering').click(()=>{
  entryclick=true;
  $('.wallpaper').animate({width: '200px'})
  $('.title').css('display','none')
  $('.description').css('display','none')
  $('canvas').css('display','none')

})

// 전체를 깔아주던 background div의 width가 15%정도로 줄어들고
// DOM Event Listener, Click Enter, callback function으로 image가 왼쪽 아래로 이동하고
// 이부분은 가장 마지막에 하도록하자 왜냐면 optional 엔 time consuming

// sprite가 멈추고
// P5JS 에서 Draw안에있는 것을 멈추게하는 법을 알아내야함
// p5js의 draw안에서 어느 부분의 drawing을 살려내는 법을 알아내야함

//p5js circle drawing with data joint를 찾아봐야한다

// 1950s~ 2010s 디브 series가 생기고, (이 녀석들은 일단 html에 먼저 깔아놓고, display:none 했다가
// 이벤트로 display block으로 하는 방법으로 만들어야 겠다)

// 전체적인 dom manipulation은 jquery로해도 되겠다

// 