(function () {
    var para = document.getElementsByTagName("p");
    var para1 = para[0];

    //json Boardgames

    var Board = {
        "games": [
            {
                "name": "Settlers of catan",
                "rating": "Super fun",
                "pic": "images/settlers.jpg",
        },
            {
                "name": "Agricola",
                "rating": "Great for resource managent gamers",
                "pic": "images/agricola.jpg",
        },
            {
                "name": "Carcassonne",
                "rating": "Fun to play with just two people",
                "pic": "images/carcassonne.jpg",
       },
            {
                "name": "Killer bunnys",
                "rating": "Hard to learn but cool to play",
                "pic": "images/killerbunnies.png"
        },
            {
                "name": "Munchkin",
                "rating": "The game to play if you want to laugh",
                "pic": "images/munchkin.jpg",
        }
        ]
    };

    var boardgames = Board.games
    var gamecount = boardgames.length
    for (i = 0; i < gamecount; i++) {
        var item = boardgames[i],
            name = item.name,
            rating = item.rating,
            pic = item.pic;
        var gamename = document.createTextNode(name);
        var title = document.createElement("h3");
        para1.appendChild(title);
        title.appendChild(gamename);
        var newpic = document.createElement("img");
        para1.appendChild(newpic);
        newpic.setAttribute("src", pic);

        var rate = document.createTextNode(rating);
        para1.appendChild(rate);



    }
}())


