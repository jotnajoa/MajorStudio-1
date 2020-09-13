// Smithsonian API example code
// check full API documentation here: https://edan.si.edu/openaccess/apidocs/


// put your API key here;
const apiKey = "YiDoLOkdZ9yOYebr3Ozp77fqfd59L2bC8GheRAaC";  


// Access to individual objects by ID
const objectBaseURL = "https://api.si.edu/openaccess/api/v1.0/content/";

//fetches content based on id of an object.
function fetchContentDataById(id) {
  let url = objectBaseURL + id + "?api_key="+apiKey;

  // window.fetch() === fetch();
  // so there is no difference
  window
  .fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("Here's the content data of the specified object:", data.response);
    let dataresponse;
    dataresponse=data.response;


    let contents=dataresponse.content.descriptiveNonRepeating

    console.log('contents is :',contents)

    // image access is online_media > media[0] > thumbnail

    let img = contents.online_media.media[0].thumbnail

    console.log('img is loaded by:',img)

    // lets try put an img loaded by this api call

    let imgcontainer = document.createElement('IMG')
    imgcontainer.setAttribute('src', img)
    imgcontainer.setAttribute('width','300')
    imgcontainer.setAttribute('alt','loadad img');

    document.body.appendChild(imgcontainer)

  })
  .catch(error => {
    console.log(error);
  })
}

// fetchContentDataById("edanmdm:NMAI_270941");

// My example ID is 'edanmdm:nasm_A20030079022'

// tyring this ID 

fetchContentDataById("edanmdm:npg_NPG.87.169");

// Task 1: Find a different object on https://collections.si.edu/search/ and retrieve the data with the code above
// Make sure to check the box "Only return results with CC0 media" when searching
// Task 2: Write the result into a variable and explore different variables through the Console

