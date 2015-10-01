var NBATeams = {
    "Oklahoma City Thunder" : [
        {
            "name": "Kevin Durant",
            "games played": "27",
            "points per game": "25.4",
            "rebounds per game": "6.6",
            "assists per game": "4.1"
        },
        {
            "name": "Russell Westbrook",
            "games played": "67",
            "points per game": "28.1",
            "rebounds per game": "7.3",
            "assists per game": "8.6"
        },
        {
            "name": "Serge Ibaka",
            "games played": "64",
            "points per game": "14.3",
            "rebounds per game": "7.8",
            "assists per game": "0.9"
        },
        {
            "name": "Steven Adams",
            "games played": "70",
            "points per game": "7.7",
            "rebounds per game": "7.5",
            "assists per game": "1.3"
        },
        {
            "name": "Andre Roberson",
            "games played": "67",
            "points per game": "3.4",
            "rebounds per game": "3.8",
            "assists per game": "1.0"
        }
    ]
};

var target = document.getElementById("output");
var i;
var Array = NBATeams["Oklahoma City Thunder"];
for (i = 0; i < Array.length; i = i + 1) {
    target.appendChild(document.createElement("h2"));
    target.lastChild.appendChild(document.createTextNode(Array[i].name));
    target.appendChild(document.createElement("p"));
    target.lastChild.appendChild(document.createTextNode(" Games Played: "));
    target.lastChild.appendChild(document.createTextNode(Array[i]["games played"]));
    target.lastChild.appendChild(document.createTextNode(" Points Per Game: "));
    target.lastChild.appendChild(document.createTextNode(Array[i]["points per game"]));
    target.lastChild.appendChild(document.createTextNode(" Rebounds Per Game: "));
    target.lastChild.appendChild(document.createTextNode(Array[i]["rebounds per game"]));
    target.lastChild.appendChild(document.createTextNode(" Assists Per Game: "));
    target.lastChild.appendChild(document.createTextNode(Array[i]["assists per game"]));

}
