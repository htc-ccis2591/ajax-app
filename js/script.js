
(function(){
    
 //Page 140 in the book section Listing 7.4.7
        
var searchForm = document.getElementById("search-form");
var searchField = document.getElementById("q");
var getAllButton = document.getElementById("get-all");
//var count = Cambodia.touristSite.length;
//var target = document.getElementById("output");
        
var touristList = {
    search : function(event){
        var searchValue = searchField.value,
            i;
        event.preventDefault();
        target.innerHTML = "";
        
    if(count > 0 && searchValue !== ""){
        for(i = 0; i < count; i ++){
        var obj = list.games[i],
     isItFound = obj.title.indexOf(searchValue);
  
    if (isItFound !== -1){
        target = document.getElementById("wonders");
        var getName = document.createElement("p");
        
    var createImgElement = document.createElement("img");
        createImgElement.src = (obj.image);
    
    var tourist = document.createTextNode(name);
    var text = document.createTextNode(loc);                 var detail = document.createTextNode(desc);
    var contact = document.createTextNode(email);
    var emaillink = document.createElement("a");
        emaillink.setAttribute("href", "mailto:"+ email);    
    h2.appendChild(tourist);
    target.appendChild(h2);
    h3.appendChild(text);
    target.appendChild(h3);
    target.appendChild(image);
    //image.setAttribute("class", "float");
    para.appendChild(detail);
    target.appendChild(para);
    emaillink.appendChild(contact);
    target.appendChild(emaillink);
    }
    }
  }
},
    
getAllCambodia : function(){
    var i;
    var count = Cambodia.touristSite.length;
var target = document.getElementById("output");
    target.innerHTML = "";
    
    if (count > 0){
    for(i = 0; i < count; i ++){
        var obj = Cambodia.touristSite[i];
        
        target = document.getElementById("wonders");
        var getName = document.createElement("p");
    
    
    var createImgElement = document.createElement("img");
        createImgElement.src = (obj.image);
    
    var tourist = document.createTextNode(name);
    var text = document.createTextNode(loc);                 var detail = document.createTextNode(desc);
    var contact = document.createTextNode(email);
    var emaillink = document.createElement("a");
        emaillink.setAttribute("href", "mailto:"+ email);    
    h2.appendChild(tourist);
    target.appendChild(h2);
    h3.appendChild(text);
    target.appendChild(h3);
    target.appendChild(image);
    //image.setAttribute("class", "float");
    para.appendChild(detail);
    target.appendChild(para);
    emaillink.appendChild(contact);
    target.appendChild(emaillink);
        
    }
  }
},

setActiveSection : function(){
        
    this.parentNode.setAttribute("class", "active");
},
    removeActiveSection : function(){
            
    this.parentNode.removeAttribute("class");
}    
}
getAllButton.addEventListener("click", touristList.getAllCambodia, false);
    
searchForm.addEventListener("submit", touristList.search, false);
    
searchField.addEventListener("keyup", touristList.search, false);
 
    //console.log(target);
    //console.log(Cambodia); 
    //console.log(searchForm);
      
 //Page 172-176 in the book section Listing 8.12   

var getName = document.createElement("p");
var ajload = document.getElementById("ajL");
var localload = document.getElementById("loL");
var save = document.getElementById("loS");
var clear = document.getElementById("loC");
    
function getHTTPOject() {
    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Msxm12.XMLHTTP");
    }
    return xhr;
}
    
function ajaxcall() {
        var gettouristSite = getHTTPOject();
        gettouristSite.open("GET", "data/touristSite.json", true);
        gettouristSite.send(null)
        gettouristSite.onreadystatechange = function() {
        var data; 
    if (gettouristSite.readyState === 4 && gettouristSite.status === 200) {
        data = gettouristSite.responseText;
        parsedata = JSON.parse(data);
            
        mytouristSite(parsedata);        
        
        };
    };
 };
    
function mytouristSite(data){    
var object = data.touristSite;
console.log(object);

var listLocation = document.getElementById("wonders");
var touristCount = object.length;
var target = document.getElementById("wonders");
    
    if (touristCount > 0) {
        for (i = 0; i < touristCount; i = i + 1) {
            
            var item = object[i];            
            var name = item.name;
            var loc = item.location;
            var img = item.image;
            var desc = item.description;
            var email = item.email;
            
    var h2 = document.createElement("h2");
    var tourist = document.createTextNode(name);
       h2.appendChild(tourist);
       target.appendChild(h2);
        
    var h3 = document.createElement("h3");
    var text = document.createTextNode(loc);
        h3.appendChild(text);
        target.appendChild(h3);
        
    var image = document.createElement("img");
        image.setAttribute("src", img);
        target.appendChild(image);
       image.setAttribute("class", "float");
    
    var para = document.createElement("p");
    var detail = document.createTextNode(desc);
        para.appendChild(detail);
        target.appendChild(para);
        
    var emaillink = document.createElement("a");
        emaillink.setAttribute("href", "mailto:"+ email);
    var contact = document.createTextNode(email);
        emaillink.appendChild(contact);
        target.appendChild(emaillink);
            
};
}
}
    
var objectTarget = document.getElementById("wonders");
function LocalData() {
    if (typeof(localStorage) === 'undefined') {
        objectTarget.innerHTML = sorry;}
    else {        
        objectTarget.innerHTML = "Loading Data... Please take a moment.";
        wonders = localStorage.getItem(localStorage);
        if (wonders === null) {
        objectTarget.innerHTML = "no local data found.";
        }
    else{
        data = JSON.parse(mytouristSite);
        mytouristSite(data);
    }
 }
}
var  storedata = localStorage.getItem("wonders");

function savedata(){
    if (typeof(localStorage) === 'undefined') {
    objectTarget.innerHTML = "Browser does not support local storage";
        }
    else {
        if (localStorage === null) {
    objectTarget.innerHTML = "Load local srorage before you save it.";
            } 
    else {
        localStorage.setItem(localStorage, JSON.stringify(storedata));
            }
        }
    }
      
function cleardata(){
    if (typeof(localStorage) === 'undefined') {
        targetArea.innerHTML = " Browser does not support local storage.";
        }
    else {
        localStorage.removeItem(localStorage);
    }
 }
    
    
ajload.addEventListener("click", ajaxcall, false);
localload.addEventListener("click", LocalData, false);
save.addEventListener("click", savedata, false);
clear.addEventListener("click", cleardata, false);
    
})(); 

