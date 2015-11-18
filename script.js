(function () {
    var data = "";
    var localDataStorage = "";
    var targetArea = $("#animalLists");
    
    
    var animalBookList = {
        
        getAnimalList: function () {
            var animalList = "data/animalLists.json";
            return animalList;
        },
        showList: function (data) {
            var list = data.animalList;
            var count = list.length;
            console.log(count);
            $("#animalLists").empty();
            if (count > 0) {
                $.each(list, function (i, obj) {
                    var name = obj.name,
                        picture = obj.picture,
                        desc = obj.description;
                    $("#animalLists").append("<h2>" + name + "</h2>" + '<img src=" ' + picture + '"></img>' + "<p>" + desc + "</p>");
                }); //end each
            } // end count check
        },

        ajaxCall: function () {
            $.getJSON(animalBookList.getAnimalList(), function (data) {
                animalBookList.showList(data);

            }).error(function () {
                console.log("There was an ajax error");
            }).complete(function () {
                console.log("your ajax call was completed");
            }).success(function () {
                console.log("your ajax call was a success");
            });
        },

        loadLocalData: function () {
           // var $targetArea =  $("#animalLists");

            if (typeof (localStorage) === 'undefined') {
                targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
            } else {
                // Do the stuff to load the page data
                targetArea.innerHTML = "Loading Data...";
                var storedItem  = localStorage.getItem(localDataStorage);
                if (text === null) {
                    targetArea.innerHTML = "Local data can not be retrieved, please save first.";
                } else {
                    data = JSON.parse(storedItem);
                    animalBookList.showList(data);
                }
            }
        },
        saveLocalData: function () {
            if (typeof (localStorage) === "undefined") {
                targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
            } else {
                if (data === null) {
                    targetArea.innerHTML = "Data does not exits!! please load data before you save.";
                } else {
                    var storeObject = JSON.stringify(data);
                    localStorage.setItem(localDataStorage, storeObject);
                }
            }
        },

        clearLocalData: function () {
            if (typeof (localStorage) === 'undefined') {
                targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
            } else {
                localStorage.removeItem(localDataStorage);
            }
        },


    }
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
        

        
        
