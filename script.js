/* create some data in the form of a JSON object you can consume and loop through 
 */

var wildAnimals = {
    "animalList": [
        {
            "name": "Lion",
            "picture": "images/lion.jpg",
        },
        {
            "name": "Tiger",
            "picture": "images/tiger.jpg",
        },
        {
            "name": "Wolf",
            "picture": "images/wolf.jpg",
        },
        {
            "name": "Giraffe",
            "picture": "images/giraffe.jpg",
        },
        {
            "name": "Zebra",
            "picture": "images/zebra.jpg",
        }
    ]
};


(function () {


        var object = wildAnimals.animalList, // save the JSON object
        wildAnimalsCount = object.length,
            target = document.getElementsByTagName("body")[0];
    var i;
    
    if (wildAnimalsCount > 0) {
        for (i = 0; i < wildAnimalsCount; i = i + 1) {
            var item = object[i],
                name = item.name,
                picture = item.picture;
            
            var p = document.createElement("p");
            var text = document.createTextNode(name);
            p.appendChild(text);
            target.appendChild(p);

            var img = document.createElement("img");
            img.setAttribute("class", "hide");
            img.setAttribute("src", picture);
            target.appendChild(img);

            p.onclick = function () {
                var img = this.nextElementSibling;


                var allImage = document.getElementsByTagName("img");
                var i;

                for (i = 0; i < allImage.length; i++) {
                    var currImg = allImage[i];
                    currImg.setAttribute("class", "hide")
                }

                img.removeAttribute("class");

            }
        } 
    
    } 
    
})(); 