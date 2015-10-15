
(function(){
var Cambodia = {
    "touristSite" : [
        {
            name: "Phnom Penh",
            location: "The Capital of Cambodia",
            image: "images/phnom penh 1.jpg",
            description: " Phnom Penh is the capital of Cambodia. It was taken the name from Wat Phnom known as a lady Daun Penh.",
            email: "phnompenhtourist@petersrun.com",
        },
        {
            name: "Angkor Wat",
            location: "Siem Reap Province",
            image: "images/Angkor wat 1.jpg",
            description: " Angkor Wat is the second wonder of the world tourist. It recently ranked the top number one tourist place in Asia.",
            email: "angkorwattourist@petersrun.com",
        },
        {
            name: "Angkor Tom",
            location: "Siem Reap Province",
            image: "images/Angkor tom 1.jpg",
            description: " Angkor tom is another temple located in the same city as Angkor Wat, known by the other name called Bayon Temple.",
            email: "angkortomtourist@petersrun.com",
        },
                {
            name: "Kirirom",
            location: "Kampong Speu Province",
            image: "images/Kirirom 1.jpg",
            description: " Kirirom is a national park, water fall and camping area. It also known as 'Happy Mountain'.The rolling hills road are zigzagged along sided with the pine tree that you can not find any where in Cambodia.",
            email: "kiriromtourist@petersrun.com",
        },
        {
            name: "Sangsaa Private Island",
            location: "Sihanouk Ville City",
            image: "images/Sangsa island 3.jpg",
            description: " Sangsa Private Island is a new place discovered by a couple from Austalia. It is a sustainable luxury on a fantasy island in Asia located in the private island off the coast of Sihanouk Ville.  ",
            email: "sangsaatourist@petersrun.com",
        }        
            
    ]
};


        
//Page 140 in the book section Listing 7.4.7
        
var searchForm = document.getElementById("search-form");
var searchField = document.getElementById("q");
var getAllButton = document.getElementById("get-all");
var count = Cambodia.touristSite.length;
var target = document.getElementById("output");
        
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

 
    console.log(target);
    console.log(Cambodia); 
    console.log(searchForm);
    
    
    
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
        gettouristSite.open("GET", "data/board.json", true);
                      gettouristSite.send(null)
        gettouristSite.onreadystatechange = function() {
        var data; 
    if (gettouristSite.readyState === 4 && gettouristSite.status === 200) {
        data = gettouristSite.responseText;
        gettouristSite = JSON.parse(data);
            
        mytouristSite();        
        
        };
    };
 };
    
var object = Cambodia.touristSite;
console.log(object);

var listLocation = document.getElementById("wonders");
    touristCount = object.length;
    target = document.getElementById("wonders");
    
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
        
      
    
})(); 

