var privateBookLibrary = {
    books : [
        {
            name: "Eragon",
            author: "Christopher Paolini",
            series: "The Inheritance Cycle",
            genre: "Dragon Fantasy",
            image: "images/eragon_ChristopherPaolini.jpg"
        },
        {
            name: "The Eye of the World",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            genre: "Adventure",
            image: "images/eyeOfTheWorld_RobertJordan.jpg"
        },
        {
            name: "Arthur",
            author: "Stephen R. Lawhead",
            series: "Pendragon Cycle",
            genre: "Arthurian Legend",
            image: "images/arthur_StephenLawhead.jpg"
        },
        {
            name: "A Study In Scarlet",
            author: "Arthur Conan Doyle",
            series: "Sherlock Homes",
            genre: "Mystery",
            image: "images/studyInScarlet_ArthurConanDoyle.jpg"
        },
        {
            name: "The Iron Lance",
            author: "Stephen R. Lawhead",
            series: "The Celtic Crusades",
            genre: "Historical Fiction",
            image: "images/ironLance_StephenLawhead.jpg"
        },
        {
            name: "The Ultimate Hitchhikers Guide to the Galaxy",
            author: "Douglas Adams",
            series: "Hitchhikers Guide",
            genre: "Comic Fantasy",
            image: "images/ultHitchhikersGuide_DouglasAdams.jpg"
        }
    ]
};



(function ( ) {
    
    var bookList = privateBookLibrary.books;
    var listLocation = document.getElementById("fullList");
    
        
    for (i = 0; i < bookList.length; i = i + 1){
        bookCount = bookList[i];

        var bookNameElement = document.createElement("h3");
        var bookAuthorElement = document.createElement("h4");
        var bookSeriesElement = document.createElement("h5");
        var bookGenreElement = document.createElement("p");
        var bookImgElem = document.createElement("img");
                
        var bookName =  document.createTextNode(bookCount.name);
        var bookAuthor = document.createTextNode("Author: " + bookCount.author);
        var bookSeries = document.createTextNode("Series: " + bookCount.series);
        var bookGenre = document.createTextNode("Genre: " + bookCount.genre);
        
        bookNameElement.appendChild(bookName);
        listLocation.appendChild(bookNameElement);
        
        bookSeriesElement.appendChild(bookSeries);
        listLocation.appendChild(bookSeriesElement);
        
        bookImgElem.setAttribute("src", bookCount.image);
        listLocation.appendChild(bookImgElem);
                
        bookAuthorElement.appendChild(bookAuthor);
        listLocation.appendChild(bookAuthorElement);
                
        bookGenreElement.appendChild(bookGenre);
        listLocation.appendChild(bookGenreElement);
        
        };
    
    
    
})();
        