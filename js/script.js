
(function(){
var Cambodia = {
    "touristSite" : [
        {
            name: "Phnom Penh",
            location: "Phnom Penh City",
            image: "images/phnom penh 1.jpg",
            description: " Phnom Penh is the city of Cambodia. It was taken the name from Wat Phnom known as a lady Daun Penh.",
            email: "petersrun@top5touristscity.com",
        },
        {
            name: "Angkor Wat",
            location: "Siem Reap Province",
            image: "images/Angkor wat 1.jpg",
            description: " Angkor Wat is the second wonder of the world tourist",
            email: "petersrun@top5touristscity.com",
        },
        {
            name: "Angkor Tom",
            location: "Siem Reap Province",
            image: "images/Angkor tom 1.jpg",
            description: " Angkor tom is another temple located in the same city as Angkor Wat, known by the other name called Bayon Temple.",
            email: "petersrun@top5touristscity.com",
        },
                {
            name: "Kirirom",
            location: "Kampong Speu Province",
            image: "images/Kirirom 1.jpg",
            description: " Kirirom is a national park, water fall and camping area...",
            email: "petersrun@top5touristscity.com",
        },
        {
            name: "Sangsa Private Island",
            location: "Sihanouk Ville City",
            image: "images/Sangsa island 3.jpg",
            description: " Sangsa Private Island is a new place discovered by a couple from Austalia.",
            email: "petersrun@top5touristscity.com",
        }        
            
    ]
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
    
            
           
      

//var image= document.createElement("img");
        //img =object[i].image;
        //image.setAttribute("src", img);
        //image.setAttribute("class", "float");

        //para.appendChild(title);
        //title.appendChild(tourist);
        //target.appendChild(image);
        

//var desc = document.createTextNode(description);
        //para.appendChild(desc);



            
//target.innerHTML += '<p><a href="mailto:'+ email +'">' + + object[i].image +'">' + object[i].description + name + location + '</a></p>'; 
            

    }
    }
})(); 

