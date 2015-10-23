(function () {

    var Teams = null;
    
    var localStorageKey = ("");
    var ajax = document.getElementById("ajax");
    var load = document.getElementById("load");
    var save = document.getElementById("save");
    var clear = document.getElementById("clear");
    var targetArea = document.getElementById("Teams");
    var container = Teams;
    var centralCount = container;
    var target = document.getElementById("insert"),
        
        i;

    if (Teams> 0) {
        for (i = 0; i < Teams; i = i + 1)
        {

            var Teams = container[i],
                location = Teams.location,
                image = Teams.image,
                arena = 'Arena: ' + Teams.arena,
                manager = 'Manager: ' + Teams.manager,
                coach = 'Coach: ' + Teams.coach,
                description = Teams.description,
                link = Teams.link

            target.innerHTML += '<h1> ' + Teams.Teams + '</h1>' +

                '<img src=" ' + image + '"></img> <h2>' + location + ' </h2> <h2>' + arena + ' </h2> <h2>' + manager + ' </h2> <h2>' + coach + ' </h2> <h3>' + description + ' </h3> <h4>' + link + ' </h4>';

        }
    }

    function getHTTPObject() {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxm12.XMLHTTP");
        }
        
        return xhr;
    }


    function ajaxCall(dataURL, outputElement, callback) {

        var request = getHTTPObject();
        target.innerHTML = "Loading...";
        request.onreadystatechange = function () {

            if (request.readyState === 4 && request.status === 200) {

                ajax = JSON.parse(request.responseText);

                if (typeof callback === showTeamsData) {
                    callback(Teams);

                }

                text = request.responseText;
                data = JSON.parse(text);
                showTeamsData();
                
            }
        }

        request.open("GET", "data/Teams.json", true);
        request.send(null);

    }

    function loadLocalData() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {

            targetArea.innerHTML = "Loading Data...";
            text = localStorage.getItem(localStorageKey);
        }
        if (Teams === null) {
            targetArea.innerHTML = "Sorry, no local data found.";
        } else {
            Teams = JSON.parse(showTeamsData);
            showTeamsData(Teams);
        }
    }

    function saveDataLocally() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            if (Teams === null) {
                targetArea.innerHTML = "Sorry, you must load data before you can save.";
            } else {
                localStorage.setItem(localStorageKey, JSON.stringify(showTeamsData));
            }
        }
    }

    targetArea.innerHTML = "Click a button to Load Data";

    ajax.addEventListener("click", ajaxCall, false);
    load.addEventListener("click", loadLocalData, false);
    save.addEventListener("click", saveDataLocally, false);
//    clear.addEventListener("click", clearDataLocally, false);

    function showTeamsData() {

        var Teams = showTeamsData.toLocaleString;
        var i, first;

        for (i = 0; i < Teams.length; i++) {
            if (i === 0) {
                targetArea.innerHTML = "";
            }

            Teams = Teams[i];
            targetArea.appendChild(buildTeamsData(Teams));

        }
    }

    (function () {

        var searchForm = document.getElementById("search-form"),
            searchField = document.getElementById("q"),
            getAllButton = document.getElementById("get-all"),
            target = document.getElementById("output");

        var Teams = {

            search: function (event) {

                var output = document.getElementById("output");

                ajaxCall('data/firstApps.json', output, function (data) {

                    var SearchValue = searchField.value,
                        Teams = data.length,
                        count = Teams.length,
                        i;

                    target.innerHTML = "";
                    
                    if (count > 0 && SearchValue !== "") {

                        for (i = 0; i < count; i = i + 1) {

                            var obj = Teams[i],
                                isItFound = obj.name.indexOf(SearchValue);

                            if (isItFound !== -1) {
                                target.innerHTML += '<p>' + obj.name + ', <a href=" ' + obj.description + '">' + obj.coach + '</a><p>';
                            }
                        }
                    }
                });
            },

            getAllTeams: function () {

                var output = document.getElementById("output");

                ajaxCall('data/firstApps.json', output, function (data) {

                    var Teams = data.Teams,
                        count = Teams.length,
                        i;

                    target.innerHTML = "";
                    
                    if (Teams > 0) {
                        
                        for (i = 0; i < Teams; i = i + 1) {
                            
                            var getAllContacts = Teams[i];

                        }
                    }
                });
            },


            setActiveSection: function () {
            this.parentNode.setAttribute("class", "active");
            },
            
            removeActiveSection: function () {
            this.parentNode.removeAttribute("class");

            },
            addHoverClass: function () {
            searchForm.setAttribute("class", "hovering");

            },
            removeHoverClass: function () {
            searchForm.removeAttribute("class");

            }
        }
        
        ajax.addEventListener(Teams.getAllTeams, false);
        ajax.addEventListener(Teams.getAllTeams, false);
        load.addEventListener("", Teams.getAllTeams, false);
        searchField.addEventListener("keyup", Teams.search, false);
        searchField.addEventListener("focus", Teams.setActiveSection, false);
        searchField.addEventListener("blur", Teams.removeActiveSection, false);
        getAllButton.addEventListener("click", Teams.getAllTeams, false);
        searchForm.addEventListener("mouseover", Teams.addHoverClass, false);
        searchForm.addEventListener("mouseout", Teams.removeHoverClass, false);
        searchForm.addEventListener("submit", Teams.search, false);
        
    }());

}());