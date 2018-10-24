/**
  JSON Information Storing Links to your Social Network; Use with Font-Awesome Fonts (https://fontawesome.com/icons/) and ensure that you specify the Style as well (FAB, FAS, etc.).
**/

var json = {
  "socials": [
    {social_link:"https://www.linkedin.com/in/sam-herring-024876168/", social_icon:"fab fa-linkedin", social_title:"LinkedIn"},
    {social_link:"tel:+61754594714", social_icon:"fas fa-phone", social_title:"Phone"},
    {social_link:"sip:sherring@usc.edu.au", social_icon:"fas fa-comments", social_title:"Instant Message"}
  ],
  "knowledge":[
    {"knowledge_name":"IT Service Management"},
    {"knowledge_name":"Application Administration"},
    {"knowledge_name":"Business Systems Analysis"}
  ]
  
};


/**
  User Information! Populate this with whatever information you require. 
**/
var name = "Sam Herring";
var jobTitle = "Business Systems Analyst";
var organization = "University of the Sunshine Coast";
var organizationURL = "https://usc.edu.au";
var locationString = "Sunshine Coast, Australia";
var locationURL = "https://goo.gl/maps/hK1Uyasi2kD2";

var nameTitle = name + " - Hosted by Glitch";

var backgroundGradient = "linear-gradient(45deg, rgba(32,124,202,1) 7%,rgba(32,124,202,1) 7%,rgba(255,184,28,1) 90%)";

/**
  Populate the information provided above
**/

//Name
document.getElementById('name').innerHTML = name;

//Title Information
document.getElementById('name_title').innerHTML = nameTitle;

//Job Title
document.getElementById('job_title').innerHTML = jobTitle;

//Organization Information
document.getElementById('organization_information').innerHTML = organization;

//Organization URL
if(organizationURL != ""){
  document.getElementById('organization_information').href = organizationURL;
  document.getElementById('organization_information').setAttribute('style', 'color:black');
}

//Location
document.getElementById('location').innerHTML = locationString;

//Location URL
if(locationURL != ""){
  document.getElementById('location').href = locationURL;
}
  
/**
  Iterate through the JSON file and populate the page with the appropriate Knowledge Elements.
**/
for(var i in json.knowledge){

  var htmlDOMElement = document.createElement("div");
  htmlDOMElement.innerHTML = (json.knowledge[i].knowledge_name);
  
  document.getElementById('knowledge').appendChild(htmlDOMElement);
  
}

/**
  Iterate through the json file and populate the page with the appropriate Social Elements.
**/

for(var i in json.socials){
  
  var htmlDOMElement = document.createElement("a");
  var htmlInnerElement = document.createElement("i");
  
  var socialLink = (json.socials[i].social_link);
  var socialIcon = (json.socials[i].social_icon);
  var socialTitle = (json.socials[i].social_title);
  
  htmlDOMElement.href = socialLink;
  htmlDOMElement.setAttribute('class', "text-dark mx-2 mt-1");
  
  htmlInnerElement.setAttribute('class', socialIcon + " fa-2x");
  htmlInnerElement.setAttribute('data-toggle', 'tooltip');
  htmlInnerElement.setAttribute('data-placement', 'bottom');
  htmlInnerElement.setAttribute('title', socialTitle);
    
  htmlDOMElement.appendChild(htmlInnerElement);
  
  document.getElementById('socials').appendChild(htmlDOMElement);
    
}