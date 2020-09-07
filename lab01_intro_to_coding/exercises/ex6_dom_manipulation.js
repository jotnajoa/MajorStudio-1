/*
  Exercise 6
  DOM manipulation with vanilla JS
*/

// Task
// What does DOM stand for?

/* Document Object Model, simply speaking these are objects rendered through HTML and can be accessed via javascript */

// Task
// Open the file index.html in AWS Cloud9. Click "Preview" > "Preview File index.html". (Note that you can open it in a new window). What do you see?
/* pink rectangle

// Task
// Delete the div with the class rectangle from index.html and refresh the preview.

/* the rectangle disappeared */

// Task
// What does the following code do?

const viz = document.body.querySelector(".viz");

console.log(viz, viz.children);

const addChildToViz = () => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = Math.random() * 100 + "px";
  viz.appendChild(newChild);
};

viz.addEventListener("click", addChildToViz);

// Task
// Where can you see the results of the console.log below? How is it different from in previous exercises?

function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      console.log(data);
      console.log('iterable length is :',data.length)

      var newCanvas=document.createElement('div')

      newCanvas.style.height=600+'px';
      newCanvas.style.width=600+'px';
      newCanvas.style.position='relative'
      newCanvas.classList.add('newcanvas')

      document.querySelector('body').appendChild(newCanvas)

      // both are 150 *4





      document.querySelector('body').appendChild(newCanvas)
      
      data.forEach((t,i)=>{
        
        console.log(i<35)



          let petalobject=document.createElement('div')
          let sepalobject=document.createElement('div')
          


          console.log(t,i)
          petalobject.style.width=t.petalwidth*2+'px'
          petalobject.style.height=t.petallength*80+'px'
          petalobject.style.backgroundColor=`rgba(${i*25},10,${i*25},0.8)`
          petalobject.style.position='absolute'
          petalobject.style.left=(600/150)*i+'px'
          petalobject.style.top=(600-t.petallength*80)+'px'
          petalobject.classList.add(t.class,'petals')

          sepalobject.style.width=t.sepalwidth+'px'
          sepalobject.style.height=t.sepallength*75+'px'
          sepalobject.style.backgroundColor=`rgba(10,${i*25},${i*25},1)`
          sepalobject.style.position='absolute'
          sepalobject.style.left=(600/150)*i+'px'
          sepalobject.classList.add(t.class,'sepals')


          newCanvas.appendChild(petalobject)
          newCanvas.appendChild(sepalobject)


      })


    });
}

drawIrisData();

// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.
// Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.

