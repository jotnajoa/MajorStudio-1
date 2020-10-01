// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "4TdNidvcEx3prZ9Ii2ig5MLsN30Epz0mbBPDOaeX";  

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// Constructing the search query
const mysearch = 'data_source:Human Studies Film Archives' + '&start='+0+'&rows='+448;



// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;


    window
    .fetch(url)
    .then(res => res.json())
    .then( (data)=>{
        console.log(data)
    })
    .catch(error => {
      console.log(error);
    })
}


fetchSearchData(mysearch);

