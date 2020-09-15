// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "4TdNidvcEx3prZ9Ii2ig5MLsN30Epz0mbBPDOaeX";  

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// Constructing the search query
const search =  `mask AND unit_code:"FSG"` + "&start=" + 0 + "&rows=" + 81;
const mysearch = 'face AND date:1630s' + '&start='+0+'&rows='+10;

let IDarray=[];
let storeSRC=[];


const storeIDs = (object)=>{

    let dataarray=object.response.rows;
    dataarray.forEach((t)=>{
    IDarray.push(t.id)
    });

}


function displayimages (array) {
  // array receives an element with specific index number
  // Need to parse img src from another fetch function I used for the first assignment

  let frame=document.querySelector('.frame')
  let imagesource=document.createElement('IMG')
  imagesource.setAttribute('src',array)
  // the parameter for the function should be the img url

  imagesource.setAttribute('width','100%');

  frame.appendChild(imagesource)

}

// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;


    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      storeIDs(data)

      return IDarray
      // save ID values from the data fetched.
    }).then((d)=>{

      console.log('passed from storeIDS:',d)

      //이것을 실행하고, 그다음에 return storeSRC해야함 async function으로 await storeSRC.push 그리고 storeSRC
      
      d.forEach((t)=>{scrappingSRC(t)})

      return storeSRC

    }).then((k)=>{
      console.log('src passed having data:',k)
      k.forEach(displayimages(k))
    })
    // .catch(error => {
    //   console.log(error);
    // })
}

fetchSearchData(search);
fetchSearchData(mysearch);


  function scrappingSRC(d) {
  console.log('things to be scrapped for SRC is ',d)
  storeSRC.push(fetchSRC(d));
  // 여기서 잘못됨

  console.log(storeSRC)

  }


function fetchSRC(input) {
  // ID array를 받아서 src를 뱉어내는 역할을 해야함

  let imgurl = "https://api.si.edu/openaccess/api/v1.0/content/";
  let imgsrcurl= imgurl + input + "?api_key="+apiKey;
  let contents;

  fetch(imgsrcurl)
  .then(res => res.json())
  .then((data)=>{
    console.log('data is',data)
    contents=data.response.content.descriptiveNonRepeating.online_media.media[0].thumbnail
    
    // to access thumbnail, contents[i].thumbnail  is necessary
  })
  console.log('contents return is:',contents)
  return contents

}