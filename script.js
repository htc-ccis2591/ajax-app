
(function () {

    var $targetArea = $("#animalLists");

    var animalBookList = {
        data: "",
        localDataStorage: "localAnimalData",
        getAnimalList: function () {
            var animalList = "data/animalLists.json";
            return animalList;
        },
        showList: function (data) {
            var list = data.animalList;
            var count = list.length;
            //console.log(count);
            $("#animalLists").empty();
            if (count > 0) {
                $.each(list, function (i, obj) {
                    var name = obj.name,
                        picture = obj.picture,
                        desc = obj.description;
                    $("#animalLists").append("<h2>" + name + "</h2>" + '<img src=" ' + picture + '"></img>' + "<p>" + desc + "</p>");

                }); //end each

                animalBookList.hyperlink();

            } // end count check
        },

        hyperlink: function () {

            var headings = $("h2");
            var list = $("<ul id='bookmarks'>");
            var aCount = 0;
            headings.each(function (indx, elem) {
                $(this).html("<a name='bookmark" + aCount + "'></a>" + $(this).html());
                list.append($("<li><h4><a href='#bookmark" + aCount++ + "'> " + $(this).text() + "</a></h4></li>"));
            });

            $("#link").empty();
            $("#link").append(list);
        },

        ajaxCall: function () {
            $.getJSON(animalBookList.getAnimalList(), function (data) {
                animalBookList.data = data;
                animalBookList.showList(data);
                //animalBookList.hyperlink();

            }).error(function () {
                console.log("There was an ajax error");
            }).complete(function () {
                console.log("your ajax call was completed");
            }).success(function () {
                console.log("your ajax call was a success");
            });

        },

        loadLocalData: function () {

            if (typeof (localStorage) === 'undefined') {
                $("#link").empty();
                $targetArea.empty();
                $targetArea.append("<p>Sorry, local storage is not supported for this browser.<p>");

            } else {
                // Do the stuff to load the page data
                $("#link").empty();
                $targetArea.empty();
                $targetArea.append("<p>Loading Data...<p>");
                var storedItem = localStorage.getItem(animalBookList.localDataStorage);
                if (storedItem === null) {
                    $targetArea.empty();
                    $targetArea.append("<p>Local data can not be retrieved, please save first.<p>");

                } else {

                    animalBookList.data = JSON.parse(storedItem);
                    animalBookList.showList(animalBookList.data);
                }
            }
        },
        saveLocalData: function () {
            if (typeof (localStorage) === "undefined") {
                $("#link").empty();
                $targetArea.empty();
                $targetArea.append("<p>Sorry, local storage is not supported for this browser.<p>");

            } else {
                if (animalBookList.data === null) {
                    $("#link").empty();
                    $targetArea.empty();
                    $targetArea.append("<p>Data does not exits!! please load data before you save.<p>");

                } else {
                     var storeObject = JSON.stringify(animalBookList.data);
                    localStorage.setItem(animalBookList.localDataStorage, storeObject);
                }
            }
        },

        clearLocalData: function () {
            if (typeof (localStorage) === 'undefined') {
                $("#link").empty();
                $targetArea.empty();
                $targetArea.append("<p>Sorry, local storage is not supported for this browser.<p>");

            } else {

                localStorage.removeItem(animalBookList.localDataStorage);
            }
        },


    }

    $("h1").mouseenter(function () {
        $(this).animate({
            fontSize: "40pt"
        });
    });
    $("h1").mouseleave(function () {
        $(this).animate({
            fontSize: "28pt"
        });
    });


    $targetArea.append("<p>Click a button to Load Data<p>");

    $("#btnAjaxLoad").click(function () {
        animalBookList.ajaxCall();
    });
    $("#btnLocalLoad").click(function () {
        animalBookList.loadLocalData();
    });
    $("#btnLocalSave").click(function () {
        animalBookList.saveLocalData();
    });
    $("#btnLocalClear").click(function () {
        animalBookList.clearLocalData();
    });


})();