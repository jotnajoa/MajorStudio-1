var customDom



function setup() {

  customDom = d3.select('body').append('customDOM');
  
  //Create the p5 canvas
  var width = 500,
      height = 300,
      margin = 30,
      transitionDuration = 2000;
  
  var c = createCanvas(width + margin*2, height + margin*2);
  c.parent('recipe-example')
  stroke("#fff");
  
  //Append a circle to the customDom object. Add in custom attributes 
  //that will be later used by p5 to draw shapes.
//   var circle = customDom.append('customCircle')
    // .classed('circle', true)
    // .attr('radius', 60)
    // .attr('xPos', 40)
    // .attr('yPos', 50);
  
  // console.log(customDom.node()); //You can access and view the 
  //customDom's DOM node using D3's .node() method. Mostly used for 
  //debugging and educational purposes.
  
  //Every 2000ms, run a function to randomize the selected 
//   attributes and trasition between them smoothly. 

  setInterval(function() {
    circle
      .transition()
      .duration(transitionDuration)
      .attr('radius', 20+random(40))
      .attr('xPos', random(width))
      .attr('yPos', random(height)) 
  }, transitionDuration);

}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(MULTIPLY);
  
  //Using D3, we select the circle customObject. We can use 
  //.attr('attribute-name') to access the values attached 
  //to the circle object's attributes. 
  var thisObject = customDom.select('.circle');
  fill("#033E8C");
  ellipse(thisObject.attr('xPos'), 
          thisObject.attr('yPos'),
          thisObject.attr('radius'),
          thisObject.attr('radius'));

  fill("#F2B705");
  ellipse(+thisObject.attr('xPos') + 10, 
          +thisObject.attr('yPos') + 10 * Math.pow(3,.5),
          thisObject.attr('radius'),
          thisObject.attr('radius'));
  
  fill("#00D96F");
  ellipse(+thisObject.attr('xPos') - 10, 
          +thisObject.attr('yPos') + 10 * Math.pow(3,.5),
          thisObject.attr('radius'),
          thisObject.attr('radius'));

  
  //Add a title
  fill('#000');
  noStroke();
  textSize(15);
  text("Transitions using D3.js and p5.js", 30, 30);
}