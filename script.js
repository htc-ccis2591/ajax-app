(function () {

    var central = {

        "teams": [
            {
                "team": "Chicago Blackhawks",
                "location": "Chicago, IL",
                "image": "images/hawks.png",
                "arena": "United Center",
                "manager": "Stan Bowman",
                "coach": "Joel Quenneville",
                "description": "Lead by Captain Johnathon Towes & Partick Kane the Blackhawks are the reigning 2014-15 Stanley Cup Champions",
                "link": ""
            },

            {
                "team": "Colorado Avalanche",
                "location": "Denver, CO",
                "image": "images/lanche.png",
                "arena": "Pepsi Center",
                "manager": "Joe Sakic",
                "coach": "Patrick Roy",
                "description": "Lead by Gabriel Landeskog, the Av's look to return to form with another Playoffs push in 2015-16.",
                "link": "",

             },

            {
                "team": "Dallas Stars",
                "location": "Dallas, TX",
                "image": "images/stars.png",
                "arena": "American Airlines Center",
                "manager": "Jim Nill",
                "coach": "Lindy Ruff",
                "description": "Lead by returning 2014-15 Art Ross Scoring Leader Jamie Benn, the Stars hope for another solid season.",
                "link": "",


             },

            {
                "team": "Minnesota Wild",
                "location": "Saint Paul, MN",
                "image": "images/wild.png",
                "arena": "Xcel Energy Center",
                "manager": "Craig Leopold",
                "coach": "Mike Yeo",
                "description": "Lead by captain Mikko Koivu along with Zach Parise and Ryan Suter, the wild hope to make a return playoff push.",
                "link": "",



             },

            {
                "team": "Nashville Predators",
                "location": "Nashville, TN",
                "image": "images/preds.png",
                "arena": "Bridgestone Arena",
                "manager": "David Poile",
                "coach": "Peter Laviolette",
                "description": "Lead by veteran captain Shea Weber the Preds hope to make a return to the playoffs in 2015-16",
                "link": "",



             },

            {
                "team": "St. Louis Blues",
                "location": "St. Louis, MO",
                "image": "images/blues.png",
                "arena": "Scottrade Center",
                "manager": "Doug Armstrong",
                "coach": "Ken Hitchcock",
                "description": "Lead by veteran captain David Backes the Blues hope to make a return to the playoffs in 2015-16",
                "link": "",


             },

            {
                "team": "Winnipeg Jets",
                "location": "Winnipeg, MB",
                "image": "images/jets.png",
                "arena": "MTS Centre",
                "manager": "Kevin Cheveldayoff",
                "coach": "Paul Maurice",
                "description": "Lead by captain Andrew Ladd the Jets are hoping to make a return to the playoffs in 2015-16",
                "link": "",



             },
                ]

    };

    //var a = document.getElementById('insert'); 
    //a.href = ""



    var container = central.teams;
    var centralCount = container.length;
    var target = document.getElementById("insert"),


        i;

    if (centralCount > 0) {

        for (i = 0; i < centralCount; i = i + 1)

        {

            var team = container[i],
                location = team.location,
                image = team.image,
                arena = 'Arena: ' + team.arena,
                manager = 'Manager: ' + team.manager,
                coach = 'Coach: ' + team.coach,
                description = team.description,
                link = team.link


            target.innerHTML += '<h1> ' + team.team + '</h1>' +

                '<img src=" ' + image + '"></img> <h2>' + location + ' </h2> <h2>' + arena + ' </h2> <h2>' + manager + ' </h2> <h2>' + coach + ' </h2> <h3>' + description + ' </h3> <h4>' + link + ' </h4>';
            
            

        }
  
    }


    //    alert("CENTRAL DIVISION JS BY: mj")


    //    document.getElementsByTagName('img')[0].innerHTML += desiredText.link(desiredLink); // attempting to 


})();