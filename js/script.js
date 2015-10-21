
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

(function () {

    var ajaxLoadButton = document.getElementById("ajaxLoadButton");
    var localLoadButton = document.getElementById("localLoadButton");
    var localSaveButton = document.getElementById("localSaveButton");
    var localClearButton = document.getElementById("localClearButton");

    var bookList = {

        getBookData: function () {

            var bookDataAddr = "data/bookLibrary.json";

            return bookDataAddr;

        },

        sessionData: function () {

            var getData = sessionStorage.getItem("bookData");

            return getData;

        },

        deleteStorage: function () {

            localStorage.removeItem("bookData");

        },

        loadButtonHide: function () {

            var hideButton = localLoadButton.setAttribute("class", "hide");

            return hideButton;

        },

        saveButtonHide: function () {

            var hideButton = localSaveButton.setAttribute("class", "hide");

            return hideButton;

        },

        clearButtonHide: function () {

            var hideButton = localClearButton.setAttribute("class", "hide");

            return hideButton;

        },

        loadButtonShow: function () {

            var showButton = localLoadButton.removeAttribute("class");

            return showButton;

        },

        saveButtonShow: function () {

            var showButton = localSaveButton.removeAttribute("class");

            return showButton;

        },

        clearButtonShow: function () {

            var showButton = localClearButton.removeAttribute("class");

            return showButton;

        },

        getAllBooks: function () {

            var listLocation = document.getElementById("fullList");

            ajaxCall(bookList.getBookData(), listLocation, function (data) {

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

                    bookList.saveButtonShow();
                    bookList.clearButtonShow();

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

                localStorage.setItem("bookData", bookList.sessionData());
                bookList.loadButtonShow();
                
            }

        },
        
        clearSavedData: function () {

            if (typeof (localStorage) === "undefined") {
                alert("Browser does not support storing local data");
            } else {

                bookList.deleteStorage();
                bookList.loadButtonHide();
                
            }

        }
    }

    bookList.loadButtonHide();
    bookList.saveButtonHide();
    bookList.clearButtonHide();

    ajaxLoadButton.addEventListener("click", bookList.getAllBooks, false);
    localLoadButton.addEventListener("click", bookList.loadAllBooks, false);
    localSaveButton.addEventListener("click", bookList.saveAllBooks, false);
    localClearButton.addEventListener("click", bookList.clearSavedData, false);

})();
        