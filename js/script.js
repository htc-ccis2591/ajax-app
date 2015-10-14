

    function getBookData() {

       var bookDataAddr = "data/bookLibrary.json";

       return bookDataAddr;

   }

   function getHTTPObject() {

       var versionCheck;

       if (window.XMLHttpRequest) {

           versionCheck = new XMLHttpRequest();

       } else if (window.ActiveXObject) {

           versionCheck = new ActiveXObject("Msxml2.XMLHTTP");

       }

       return versionCheck;

   }

   function ajaxCall(dataUrl, outputElement, callback) {

       var request = getHTTPObject();

       outputElement.innerHTML = "Loading...";

       request.onreadystatechange = function () {

           if (request.readyState === 4 && request.status === 200) {

               var bookData = JSON.parse(request.responseText);

               if (typeof callback === "function") {

                   callback(bookData);

               }

           } else if (request.status === 404) {

               outputElement.innerHTML = "Data does not exist... :("

           }

       }

       request.open("GET", dataUrl, true);
       request.send(null);

   }

function sessionData() {
    
    var getData = sessionStorage.getItem("bookData");
        
    return getData;
    
}

function deleteStorage() {

    localStorage.removeItem("bookData");

}

function loadButtonHide() {

           var hideButton = localLoadButton.setAttribute("class", "hide");

           return hideButton;
       }

       function saveButtonHide() {

           var hideButton = localSaveButton.setAttribute("class", "hide");

           return hideButton;

       }

       function clearButtonHide() {

           var hideButton = localClearButton.setAttribute("class", "hide");

           return hideButton;

       }

       function loadButtonShow() {

           var showButton = localLoadButton.removeAttribute("class");

           return showButton;

       }

       function saveButtonShow() {

           var showButton = localSaveButton.removeAttribute("class");

           return showButton;

       }

       function clearButtonShow() {

           var showButton = localClearButton.removeAttribute("class");

           return showButton;

       }

(function () {

    var ajaxLoadButton = document.getElementById("ajaxLoadButton");
    var localLoadButton = document.getElementById("localLoadButton");
    var localSaveButton = document.getElementById("localSaveButton");
    var localClearButton = document.getElementById("localClearButton");

    loadButtonHide();
    saveButtonHide();
    clearButtonHide();

    var bookList = {

        getAllBooks: function () {

                var listLocation = document.getElementById("fullList");

                

                    ajaxCall(getBookData(), listLocation, function (data) {

                        var bList = data;

                        if (typeof (sessionStorage) === "undefined") {
                            alert("Browser does not support storing session data");
                        } else {
                            var stringObject = JSON.stringify(bList);
                            var session = sessionStorage.setItem("bookData", stringObject)
                        }

                        var prBookList = data.books,
                            count = prBookList.length;

                        listLocation.innerHTML = "";

                        if (count > 0) {

                            for (i = 0; i < count; i = i + 1) {
                                var bookCount = prBookList[i];

                                var bookNameElement = document.createElement("h3");
                                var bookAuthorElement = document.createElement("h4");
                                var bookSeriesElement = document.createElement("h5");
                                var bookGenreElement = document.createElement("h6");
                                var bookImgElem = document.createElement("img");
                                var bookDescElem = document.createElement("p");

                                var bookName = document.createTextNode(bookCount.name);
                                var bookAuthor = document.createTextNode("Author: " + bookCount.author);
                                var bookSeries = document.createTextNode("Series: " + bookCount.series);
                                var bookGenre = document.createTextNode("Genre: " + bookCount.genre);
                                var bookDesc = document.createTextNode(bookCount.description);

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

                                bookDescElem.appendChild(bookDesc);
                                listLocation.appendChild(bookDescElem);

                            }

                            saveButtonShow();
                            clearButtonShow();

                        }

                    });

                
        },
                    
        loadAllBooks: function () {

            if (typeof (localStorage) === "undefined") {
                alert("Browser does not support storing local data");
            } else {

                var storedItem = localStorage.getItem("bookData");
                var savedBookData = JSON.parse(storedItem);

                alert(savedBookData.books[3].description);

            }


        },
        saveAllBooks: function () {

            if (typeof (localStorage) === "undefined") {
                alert("Browser does not support storing local data");
            } else {

                localStorage.setItem("bookData", sessionData());
                loadButtonShow();
            }

        },
        clearSavedData: function () {

            if (typeof (localStorage) === "undefined") {
                alert("Browser does not support storing local data");
            } else {

                deleteStorage();
                loadButtonHide();
            }

        }
    }

    ajaxLoadButton.addEventListener("click", bookList.getAllBooks, false);
    localLoadButton.addEventListener("click", bookList.loadAllBooks, false);
    localSaveButton.addEventListener("click", bookList.saveAllBooks, false);
    localClearButton.addEventListener("click", bookList.clearSavedData, false);

})();
        