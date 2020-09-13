// Smithsonian API example code
// check API documentation for terms here: http://edan.si.edu/openaccess/apidocs/#api-search-terms

// put your API key here;
const apiKey = "4TdNidvcEx3prZ9Ii2ig5MLsN30Epz0mbBPDOaeX";  

// Access to terms by term category (I.e. online_media_type > Images)
const termBaseURL = "https://api.si.edu/openaccess/api/v1.0/terms/";

// search: fetches an array of terms based on term category
function fetchTermsData(termCategory) {
    let url = termBaseURL + termCategory +"?api_key=" + apiKey;
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {

      // it returns only terms classificatino only,(metadata container)

      console.log('response itself is :',data.response)
      console.log('terms output is:',data.response.terms);

      console.log(`There are ${data.response.terms.length} terms in the term category: ${termCategory}`);
    })
    .catch(error => {
      console.log(error);
    })
  }
let categories=['culture','data_source','date','object_type','online_media_type','place','topic','unit_code']

categories.forEach((t)=>{
  fetchTermsData(t)
})



/*
Task: Play around with the different categories listed here:
http://edan.si.edu/openaccess/apidocs/#api-search-terms

Allowed values: 
  'culture',
  'data_source',
  'date',
  'object_type',
  'online_media_type',
  'place',
  'topic',
  'unit_code'


Questions: 
- What other media types are available? 

13 types

- How many cultures are represented?

4265 cultures

- What acronyms for museums are there?

0: "Anacostia Community Museum"
1: "Archives of American Art"
2: "Cooper Hewitt, Smithsonian Design Museum"
3: "Freer Gallery of Art and Arthur M. Sackler Gallery"
4: "Hirshhorn Museum and Sculpture Garden"
5: "Human Studies Film Archives"
6: "NMNH - Anthropology Dept."
7: "NMNH - Botany Dept."
8: "NMNH - Education & Outreach"
9: "NMNH - Entomology Dept."
10: "NMNH - Invertebrate Zoology Dept."
11: "NMNH - Mineral Sciences Dept."
12: "NMNH - Paleobiology Dept."
13: "NMNH - Vertebrate Zoology - Birds Division"
14: "NMNH - Vertebrate Zoology - Fishes Division"
15: "NMNH - Vertebrate Zoology - Herpetology Division"
16: "NMNH - Vertebrate Zoology - Mammals Division"
17: "National Air and Space Museum"
18: "National Anthropological Archives"
19: "National Museum of African American History and Culture"
20: "National Museum of African Art"
21: "National Museum of American History"
22: "National Museum of the American Indian"
23: "National Portrait Gallery"
24: "National Postal Museum"
25: "Ralph Rinzler Folklife Archives and Collections"
26: "Smithsonian American Art Museum"
27: "Smithsonian Astrophysical Observatory"
28: "Smithsonian Environmental Research Center"
29: "Smithsonian Field Book Project"
30: "Smithsonian Gardens"
31: "Smithsonian Institution Archives"
32: "Smithsonian Libraries"
33: "Smithsonian's National Zoo & Conservation Biology Institute"


34 museums, 
only acronym is NMNH
The others are full names

*/