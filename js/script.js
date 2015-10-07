(function () {
    var Items = {


        "featuredFlies": [
            {
                "flyId": "1",
                "name": "Royal Trude",
                "image": "images/RoyalTrude.jpg",
                "description": "Bring up huge trout with this big dry fly pattern imitative of a large stonefly."
            },

            {
                "flyId": "2",
                "name": "Stonefly",
                "image": "images/Stonefly.jpg",
                "description": "Drive trout wild with this stimulator fly pattern."
            },

            {
                "flyId": "3",
                "name": "Turk's Tarantula",
                "image": "images/TurksTarantula.jpg",
                "description": "An attractor dry fly pattern that looks like a variety of trout foods."
            },

            {
                "flyId": "4",
                "name": "Cripple Dun BWO",
                "image": "images/CrippleDunBWO.jpg",
                "description": "This BWO dry fly will prove itself over picky trout."
            },

            {
                "flyId": "5",
                "name": "Ausable Wulff",
                "image": "images/AusableWulff.jpg",
                "description": "This is an excellent fast-water Hairwing fly with lighter and buggier colors that trout love."
            },

            {
                "flyId": "6",
                "name": "Splitsville Flying Ant",
                "image": "images/SplitsvilleFlyingAnt.jpg",
                "description": "Dry fly fishing with this innovative pattern will draw strikes over and over."
            },

            {
                "flyId": "7",
                "name": "Sedgehammer",
                "image": "images/Sedgehammer.jpg",
                "description": "Dominate on still water with this fantastic fly pattern."
            },

            {
                "flyId": "8",
                "name": "Lightning Bug",
                "image": "images/LightningBug.jpg",
                "description": "A prospecting nymph fly that trout can't resist."
            }
        ]

    };
    var aside = document.getElementsByTagName("aside")[0];
    aside.style.listStylePosition = "center";
    document.querySelector(".hide").style.display = "block";

    var rotatingItems = Items.featuredFlies;
    for (i = 0; i < rotatingItems.length; i++) {

        itemCount = rotatingItems[i];

        var featuredItems = document.getElementById("featured-items");

        var pictureElement = document.createElement("img");
        pictureElement.setAttribute("src", itemCount.image);
        //console.log(pictureElement);
        featuredItems.appendChild(pictureElement);


        var featuredElement = document.createElement("h2");
        featuredElement.style.fontSize = "30px";
        featuredElement.style.fontFamily = "sans-serif";


        var featuredName = document.createTextNode(itemCount.name);
        //console.log(featuredName);

        featuredElement.appendChild(featuredName);
        featuredItems.appendChild(featuredElement);

        var para = document.createElement("p");
        para.style.fontSize = "25px";
        para.style.color = "black";
        para.style.fontFamily = "sans-serif";
        para.textAlign = "center";



        var node = document.createTextNode(itemCount.description);
        //console.log(node);

        para.appendChild(node);
        featuredItems.appendChild(para);
    }



}());