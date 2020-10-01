
var dataJoint;
var entityExample;
var height;
var targetData={'1950s':[],'1960s':[],'1970s':[],'1980s':[],'1990s':[],'2000s':[],'2010s':[]};
var targetYears=[];
var colorscheme=["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"];
var genres=[];
var place=["North America","Europe","Asia","South America","Oceania","Unknown+ETC"];
var margin={top:0, left:100, right:50, bottom:50};
var rectwidth=220;
var rectheight=15;
var cLocation;
var mediumtypes,myColor;var ncircles=[];var ecircles=[];var acircles=[];
var scircles=[];var ocircles=[];var ucircles=[];var Ncircles=[];
var Ecircles=[];var Acircles=[];var Scircles=[];var Ocircles=[];
var Ucircles=[];var circleRadius;
let colortest;
let scrollTrack=0;
let scroll;
let scrolled=false;
let textsize=100;
let yearselection;
let direction;
let letterposition;
// let rects=[];



// To stack the circles, the circles array should be divided by its continents




function preload(){
    dataJoint = loadTable('../data/data_refined.csv', 'csv', 'header');
    console.log('table is loaded',dataJoint)
}

// iterate through the entire table, if year == 1950s, put that into 1950 table
// 이런식으로 연도별로 데이터를 분류해서 넣도록 해볼까? 아주좋은생각인듯
// preload function in p5js is asynchronous function

function setup(){
    
frameRate(50)
circleRadius=10
cheight = $(window).height()
cwidth = $(window).width()
createCanvas(cwidth,cheight);
$('.continentcontainer')
    .css('width',`${width}`)
    .css('left',`${margin.left}`)
let container = $('.continentcontainer')

$('.legendcontainer')
.css('left',`${margin.left}`)


cLocation=d3.scaleBand()
                .domain(place)
                .range([margin.left,width-margin.right]);

mediumtypes=["Audiotapes","DVDs","ETC","Motion Pictures"
                ,"Music","Photographs","Sound Recordings"
                ,"Video Recordings","Videotapes"];

myColor = d3.scaleOrdinal()
                .domain(mediumtypes)
                .range(colorscheme);


targetYears = Object.keys(targetData);
    // targetYears is set as 1950s to 2010s

    targetYears.forEach((y)=>{
        dataJoint.rows.forEach((t)=>{
            fillData(t,y)
        })
    })

    console.log('completed targetData is ',targetData)


    targetData['1950s'].forEach((t)=>{pushCircle(t)})

         ncircles.forEach((t,i)=>{createCircle(t,i)})
         ecircles.forEach((t,i)=>{createCircle(t,i)})
         acircles.forEach((t,i)=>{createCircle(t,i)})
         scircles.forEach((t,i)=>{createCircle(t,i)})
         ocircles.forEach((t,i)=>{createCircle(t,i)})
         ucircles.forEach((t,i)=>{createCircle(t,i)})


// array를 iteratethrough 하면서, circles array에 circle object를 fill in 하는 함수를 만들어야함
$('.continentcontainer').css('top',`${height}px`)
place.forEach((t)=>{
    let leftlocation=cLocation(t)
    container.append(`<div class='continents' style='left:${leftlocation-margin.left}px'>${t}</div>`)
})

$('main').append(`<div class='ldescription'>TYPE OF MEDIUM</div>`)
mediumtypes.forEach((t)=>{
    $('.legendcontainer')
    .append(`<div class='legends'>
    ${t}
    <div class='legendstag' style='background-color:${myColor(t)};width:10px;height:10px'></div>
    </div>`)

    // $('.legends')
    // .append(`<div class='legendstag' style='background-color:${myColor(t)};width:5px;height:20px'></div>`)
})

// create a function which generate divs with continent name + rectangles
$('.continents').append(`<div class='highlightbox'></div>`)
}

function draw(){
// NEASOU
secondanimation()
}

function mouseClicked(){

}

function mouseWheel(event) {
    scrolled=true;
    direction=event.delta;
    //move the square according to the vertical scroll amount

    scrollTrack=scrollTrack+event.delta;
    scroll = map(scrollTrack,0,70000,0,750,true)
    if(event.delta>1 && scroll>0 && scroll<0.2){updateEra('1950s')}
    else if(event.delta>0 && scroll>100 && scroll<101){updateEra('1960s')}
    else if(event.delta>0 && scroll>200 && scroll<201.2){updateEra('1970s')}
    else if(event.delta>0 && scroll>300 && scroll<301.2){updateEra('1980s')}
    else if(event.delta>0 && scroll>400 && scroll<401.2){updateEra('1990s')}
    else if(event.delta>0 && scroll>500 && scroll<501.2){updateEra('2000s')}
    else if(event.delta>0 && scroll>600 && scroll<601.2){updateEra('2010s')}
    else if(event.delta>0 && scroll>690 && scroll<691.2){showAll()}

    else if(event.delta<0 && scroll>100 && scroll<101.2){updateEra('1950s')}
    else if(event.delta<0 && scroll>200 && scroll<201.2){updateEra('1960s')}
    else if(event.delta<0 && scroll>300 && scroll<301.2){updateEra('1970s')}
    else if(event.delta<0 && scroll>400 && scroll<401.2){updateEra('1980s')}
    else if(event.delta<0 && scroll>500 && scroll<501.2){updateEra('1990s')}
    else if(event.delta<0 && scroll>600 && scroll<601.2){updateEra('2000s')}
    
    


    //uncomment to block page scrolling
    //return false;
  }

function fillData(object,years){
    // object의 years가 특정 연도인 녀석을 targetData object의 특정 연도 key에 맞춰서 push in!
    if(object.obj.Dates==years){
    targetData[years].push(object.obj)
    }
}

function pushCircle(entity){



    if(entity.Place=='North America'){ncircles.push(entity)}
    else if(entity.Place=='Europe'){ecircles.push(entity)}
    else if(entity.Place=='Asia'){acircles.push(entity)}
    else if(entity.Place=='South America'){scircles.push(entity)}
    else if(entity.Place=='Oceania'){ocircles.push(entity)}
    else if(entity.Place=='Unknown+ETC'){ucircles.push(entity)}

    }
function createCircle(entity,indexnumber){
    let circleobject;

    circleobject=new circle(cLocation(entity.Place),
                            myColor(entity.Medium),
                            entity.Dates,
                            indexnumber)

    if(entity.Place=='North America'){Ncircles.push(circleobject)}
    else if(entity.Place=='Europe'){Ecircles.push(circleobject)}
    else if(entity.Place=='Asia'){Acircles.push(circleobject)}
    else if(entity.Place=='South America'){Scircles.push(circleobject)}
    else if(entity.Place=='Oceania'){Ocircles.push(circleobject)}
    else if(entity.Place=='Unknown+ETC'){Ucircles.push(circleobject)}
    
}

function letterscroll(scroll){
    letterposition=3/8*width;

    if(0<=scroll && scroll<=50){
        textSize(textsize);
        text('1950s',letterposition,height-scroll-200)
        fill(`rgba(137,137,137,${(scroll%100)/100})`)
        targetYears='1950s'

        }

    else if(scroll>50 && scroll<=100){
        if(direction>0){pushtoOrigin()}
        else{null}
        textSize(textsize);
        text('1950s',letterposition,height-scroll-200)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`)
        targetYears='1950s'

        }
    else if(scroll>100 && scroll<=150){
    textSize(textsize);
    text('1960s',letterposition,height-scroll-100)
    fill(`rgba(137,137,137,${(scroll%100)/100})`)
    }

    else if(scroll>150 && scroll<200){
        if(direction>0){pushtoOrigin()}
        else{null}

    textSize(textsize);
    text('1960s',letterposition,height-scroll-100)
    fill(`rgba(137,137,137,${(100-scroll%100)/100})`)
    }

    else if(scroll>200 && scroll<=250){
        textSize(textsize);
        text('1970s',letterposition,height-scroll)
        fill(`rgba(137,137,137,${(scroll%100)/100})`) 
        }
    else if(scroll>250 && scroll<300){
        if(direction>0){pushtoOrigin()}
        else{null}

        textSize(textsize);
        text('1970s',letterposition,height-scroll)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`) 
    }

    else if(scroll>300 && scroll<=350){
        textSize(textsize);
        text('1980s',letterposition,height-scroll+100)
        fill(`rgba(137,137,137,${(scroll%100)/100})`) 
        }
    else if(scroll>350 && scroll<400){
        if(direction>0){pushtoOrigin()}
        else{null}

        textSize(textsize);
        text('1980s',letterposition,height-scroll+100)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`) 
    }

    else if(scroll>400 && scroll<=450){
        textSize(textsize);
        text('1990s',letterposition,height-scroll+200)
        fill(`rgba(137,137,137,${(scroll%100)/100})`) 
        }
    else if(scroll>450 && scroll<500){
        if(direction>0){pushtoOrigin()}
        else{null}

        textSize(textsize);
        text('1990s',letterposition,height-scroll+200)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`) 
    }

    else if(scroll>500 && scroll<=550){
        textSize(textsize);
        text('2000s',letterposition,height-scroll+300)
        fill(`rgba(137,137,137,${(scroll%100)/100})`) 
        }
    else if(scroll>550 && scroll<600){
        if(direction>0){pushtoOrigin()}
        else{null}
        textSize(textsize);
        text('2000s',letterposition,height-scroll+300)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`) 
    }

    else if(scroll>600 && scroll<=650){
        textSize(textsize);
        text('2010s',letterposition,height-scroll+400)
        fill(`rgba(137,137,137,${(scroll%100)/100})`) 
        }
    else if(scroll>650 && scroll<690){
        if(direction>0){pushtoOrigin()}
        else{null}
        textSize(textsize);
        text('2010s',letterposition,height-scroll+400)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`) 
    }
    else if(scroll>690 && scroll<=740){
        letterposition=letterposition=2/8*width+50;
        textSize(textsize);
        text('Showing All',letterposition,height-scroll+400)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`) 
    }
    else if(scroll>740 && scroll<=745){
        letterposition=letterposition=2/8*width+50;
        if(direction>0){pushtoOrigin()}
        else{null}
        textSize(textsize);
        text('Showing All',letterposition,height-scroll+400)
        fill(`rgba(137,137,137,${(100-scroll%100)/100})`) 
    }
    else if(scroll>745){
        push()
        textSize(textsize);
        text('Showing All',letterposition-110,height-scroll+400)
        pop()

        push()
        fill(`rgba(137,137,137,1)`)
        textSize(textsize/3);
        text('Total 288 archival material',440,400)
        pop()
    }
    else{
        null;
    }


}
function updateEra(targetEra){
    console.log(targetEra)

    ncircles=[];
    ecircles=[];
    acircles=[];
    scircles=[];
    ocircles=[];
    ucircles=[];

    Ncircles=[];
    Ecircles=[];
    Acircles=[];
    Scircles=[];
    Ocircles=[];
    Ucircles=[];

    targetData[targetEra].forEach((t)=>{pushCircle(t)})

    ncircles.forEach((t,i)=>{createCircle(t,i)})
    ecircles.forEach((t,i)=>{createCircle(t,i)})
    acircles.forEach((t,i)=>{createCircle(t,i)})
    scircles.forEach((t,i)=>{createCircle(t,i)})
    ocircles.forEach((t,i)=>{createCircle(t,i)})
    ucircles.forEach((t,i)=>{createCircle(t,i)})

}

function showAll(){

    ncircles=[];ecircles=[];acircles=[];scircles=[];ocircles=[];ucircles=[];
    Ncircles=[];Ecircles=[];Acircles=[];Scircles=[];Ocircles=[];Ucircles=[];

    let yearset=[];
    yearset=Object.keys(targetData)


    for (year of yearset){
        console.log(targetData[year])
        targetData[year].forEach((t)=>{pushCircle(t)})
    }
    ncircles.forEach((t,i)=>{createCircle(t,i)})
    ecircles.forEach((t,i)=>{createCircle(t,i)})
    acircles.forEach((t,i)=>{createCircle(t,i)})
    scircles.forEach((t,i)=>{createCircle(t,i)})
    ocircles.forEach((t,i)=>{createCircle(t,i)})
    ucircles.forEach((t,i)=>{createCircle(t,i)})

}
// showAll()


function pushtoOrigin(){
    Ncircles.forEach((t)=>{t.toOrigin()})
    Ecircles.forEach((t)=>{t.toOrigin()})
    Acircles.forEach((t)=>{t.toOrigin()})
    Scircles.forEach((t)=>{t.toOrigin()})
    Ocircles.forEach((t)=>{t.toOrigin()})
    Ucircles.forEach((t)=>{t.toOrigin()})
    }
    function secondanimation(){
        background('#fff')
      
        letterscroll(scroll)
        if(scrolled){
        Ncircles.forEach((t)=>{t.move()});
        Ncircles.forEach((t)=>{t.show()});
      
        Ecircles.forEach((t)=>{t.move()});
        Ecircles.forEach((t)=>{t.show()});
      
        Acircles.forEach((t)=>{t.move()});
        Acircles.forEach((t)=>{t.show()});
      
        Scircles.forEach((t)=>{t.move()});
        Scircles.forEach((t)=>{t.show()});
      
        Ocircles.forEach((t)=>{t.move()});
        Ocircles.forEach((t)=>{t.show()});
      
        Ucircles.forEach((t)=>{t.move()});
        Ucircles.forEach((t)=>{t.show()});
        }
      }

