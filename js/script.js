

(function () {

    var bookList = {

        bookDataUrl: "data/bookLibrary.json",

        deleteStorage: function () {

            localStorage.removeItem("bookData");

        },

        ajaxButtonHide: function () {

            var $hideButton = $("#ajaxLoadButton").attr("class", "hide");

            return $hideButton;

        },

        loadButtonHide: function () {

            var $hideButton = $("#localLoadButton").attr("class", "hide");

            return $hideButton;

        },

        saveButtonHide: function () {

            var $hideButton = $("#localSaveButton").attr("class", "hide");

            return $hideButton;

        },

        clearButtonHide: function () {

            var $hideButton = $("#localClearButton").attr("class", "hide");

            return $hideButton;

        },

        loadButtonShow: function () {

            var $showButton = $("#localLoadButton").removeAttr("class");

            return $showButton;

        },

        saveButtonShow: function () {

            var $showButton = $("#localSaveButton").removeAttr("class");

            return $showButton;

        },

        clearButtonShow: function () {

            var $showButton = $("#localClearButton").removeAttr("class");

            return $showButton;

        },
        
        clearTextBox: function () {

            var searchBox = $("#searchBox"),
                emptyBox = $(searchBox).val("");

            return emptyBox;

        },

        getFromSessionData: function () {

            var getData = sessionStorage.getItem("bookData");

            return getData;

        },

        saveToSessionData: function (data) {

            var bookList = data;

            if (typeof (sessionStorage) === "undefined") {
                alert("Browser does not support storing session data");
            } else {

                var stringObject = JSON.stringify(bookList);
                var session = sessionStorage.setItem("bookData", stringObject)

            }

        },

        search: function (data) {

            var searchField = $("#searchBox"),
                searchValue = searchField.val(),
                $listLocation = $("#fullList"),
                books = data.books,
                count = books.length;

            event.preventDefault();

            $listLocation.html("");

            if (count > 0 && searchValue !== "") {

                $.each(books, function (i, item) {

                    var obj = item.name;

                    var isItFound = obj.indexOf(searchValue);

                    if (isItFound !== -1) {

                        var name = item.name,
                            series = item.series,
                            image = item.image,
                            author = item.author,
                            genre = item.genre,
                            description = item.description;

                        $("<h3>", {
                            text: name
                        }).appendTo($listLocation);
                        $("<h5>", {
                            text: ("Series: " + series)
                        }).appendTo($listLocation);
                        $("<img>", {
                            src: image
                        }).appendTo($listLocation);
                        $("<h4>", {
                            text: ("Author: " + author)
                        }).appendTo($listLocation);
                        $("<h6>", {
                            text: ("Genre: " + genre)
                        }).appendTo($listLocation);
                        $("<p>", {
                            class: "hide",
                            text: description
                        }).appendTo($listLocation);
                        $("<div>", {
                            id: "expand",
                            class: "showDesc",
                            text: ("Show Description")
                        }).appendTo($listLocation);

                    }                 

                })
                
               bookList.toggleDescription();

            }

        },

        displayBooks: function (data) {

            var $listLocation = $("#fullList"),
                searchBox = $("#searchBox");

            var books = data.books,
                count = books.length;

            $listLocation.html("");

            if (count > 0) {

                $.each(books, function (i, item) {

                    var name = item.name,
                        series = item.series,
                        image = item.image,
                        author = item.author,
                        genre = item.genre,
                        description = item.description;

                    $("<h3>", {
                        text: name
                    }).appendTo($listLocation);
                    $("<h5>", {
                        text: ("Series: " + series)
                    }).appendTo($listLocation);
                    $("<img>", {
                        src: image
                    }).appendTo($listLocation);
                    $("<h4>", {
                        text: ("Author: " + author)
                    }).appendTo($listLocation);
                    $("<h6>", {
                        text: ("Genre: " + genre)
                    }).appendTo($listLocation);
                    $("<p>", {
                        class: "hide",
                        text: description
                    }).appendTo($listLocation);
                    $("<div>", {
                        id: "expand",
                        class: "showDesc",
                        text: ("Show Description")
                    }).appendTo($listLocation);

                });

                bookList.toggleDescription();

                searchBox.keyup(function () {

                    bookList.search(data)

                })

            }

        },

        toggleDescription: function () {

            var showDescription = $(".showDesc"),
                descriptionLocation = $(".showDesc").prev();

            $(showDescription).click(function () {

                $(descriptionLocation).slideToggle("slow", function () {

                    var visible = $(descriptionLocation).is(":visible");
                    $(showDescription).text(visible ? "Hide Description" : "Show Description");

                });

            })

        },

        getAllBooks: function () {

            $.getJSON(bookList.bookDataUrl, function (data) {

                var $listLocation = $("#fullList");

                $listLocation.html("Loading ....");

                bookList.saveToSessionData(data);
                bookList.displayBooks(data);

                bookList.ajaxButtonHide();
                bookList.saveButtonShow();

            });

        },

        buttonFunction: function () {

            var ajaxCall = $("#ajaxLoadButton"),
                saveButton = $("#localSaveButton"),
                loadButton = $("#localLoadButton"),
                clearButton = $("#localClearButton");

            ajaxCall.click(function () {
                
                bookList.clearTextBox();
                bookList.getAllBooks();
                
            })

            loadButton.click(function () {

                var $listLocation = $("#fullList");

                if (typeof (localStorage) === "undefined") {
                    alert("Browser does not support storing local data");
                } else {

                    var storedItem = localStorage.getItem("bookData");
                    var data = JSON.parse(storedItem);

                    $listLocation.html("Loading from local storage ...");

                    bookList.displayBooks(data);
                    bookList.clearTextBox();

                }
                
            })

            saveButton.click(function () {

                if (typeof (localStorage) === "undefined") {
                    alert("Browser does not support storing local data");
                } else {

                    localStorage.setItem("bookData", bookList.getFromSessionData());
                    bookList.loadButtonShow();
                    bookList.clearButtonShow();
                    bookList.saveButtonHide();
                    
                }

            })

            clearButton.click(function () {

                if (typeof (localStorage) === "undefined") {
                    alert("Browser does not support storing local data");
                } else {

                    bookList.deleteStorage();
                    bookList.loadButtonHide();
                    bookList.clearButtonHide();
                    bookList.saveButtonShow();

                }

            })

        },

    }

    bookList.loadButtonHide();
    bookList.saveButtonHide();
    bookList.clearButtonHide();

    bookList.buttonFunction();

})();
        