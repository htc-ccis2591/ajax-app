
(function () {
    var kevinSmithMovies = {
        items : [
            {
                title: "Clerks",
                director: "Kevin Smith",
                producer: "Scott Mosier",
                year: "1994",
                cast: "Brian O'Halloran, Jeff Anderson, Marilyn Ghigliotti, Lisa Spoonauer, Jason Mewes, Kevin Smith, Walt Flanagan", 
           },
            {
                title: "Mallrats",
                director: "Kevin Smith",
                producer: "Scott Mosier",
                year: "1995",
                cast:  "Shannen Doherty, Jeremy London, Jason Lee, Claire Forlani, Ben Affleck, Joey Lauren Adams, Jason Mewes, Kevin Smith",
           },
            {
                title: "Chasing Amy",
                director: "Kevin Smith",
                producer: "Scott Mosier",
                year: "1997",
                cast: "Joey Lauren Adams, Ben Affleck, Jason Lee, Dwight Ewell, Jason Mewes, Kevin Smith",
           },
            {
                title: "Dogma",
                director: "Kevin Smith",
                producer: "Scott Mosier",
                year: "1999",
                cast:  "Linda Fiorentino, Ben Affleck, Matt Damon, Alan Rickman, Jason Lee, Chris Rock, Salma Hayek, Jason Mewes, Kevin Smith",
           },
            {
                title: "Jay and Silent Bob Strike Back",
                director: "Kevin Smith",
                producer: "Scott Mosier",
                year: "2001",
                cast:  "Jason Mewes, Kevin Smith, Ben Affleck, Shannon Elizabeth, Eliza Dushku, Will Ferrell, Jason Lee, Jennifer Schwalbach",
           },
            {
                title: "Jersey Girl",
                director: "Kevin Smith",
                producer: "Scott Mosier",
                year: "2004",
                cast:  "Ben Affleck, Jennifer Lopez, Liv Tyler, George Carlin, Steven Root, Jennifer Schwalbach",
           },
            {
                title: "Clerks II",
                director: "Kevin Smith",
                producer: "Scott Mosier",
                year: "2006",
                cast:  "Brian O'Hallaron, Jeff Anderson, Jason Mewes, Kevin Smith, Rosario Dawson, Trevor Fehrman, Ben Affleck, Jason Lee",
           }
           ]
    };

    var object = kevinSmithMovies.items;
    var showMovies = document.getElementById("movies")[0];
    moviesCount = object.length;
    target = document.getElementById("movies");
    if (moviesCount > 0) {
        for (var i = 0; i < moviesCount; i++) {
            var item = object[i];
            var title = item.title;
            var director = item.director;
            var producer = item.producer;
            var year = item.year;
            var cast = item.cast;
            var h3 = document.createElement("h3");
            
            var headingText = document.createTextNode(title);
            h3.appendChild(headingText);
            target.appendChild(h3);

            var ul = document.createElement("ul");
            var stats = document.createTextNode("Director: " + director + ", "  + "Producer: " + producer + ", " + "Released: " + year + ", " + "Cast: " + cast);
            ul.appendChild(stats);
            target.appendChild(ul);
        }
    }




}())