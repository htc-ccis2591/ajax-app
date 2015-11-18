(function () {

    var Teams = null;
    var localStorageKey = ("localStorage");
    var ajax = document.getElementById("ajax");
    var load = document.getElementById("load");
    var save = document.getElementById("save");
    var clear = document.getElementById("clear");
    var targetArea = document.getElementById("Teams");
    var target = document.getElementById("insert"),
        i;

    function buildTeamData(OneTeam) {
        var location = OneTeam.location;
        var image = OneTeam.image;
        var arena = 'Arena: ' + OneTeam.arena;
        var manager = 'Manager: ' + OneTeam.manager;
        var coach = 'Coach: ' + OneTeam.coach;
        var description = OneTeam.description;
        var link = OneTeam.link;
        var HTML = '<h1> ' + OneTeam.team + '</h1>' +
            '<img src=" ' + image + '"></img> <h2>' + location + ' </h2> <h2>' + arena + ' </h2> <h2>' + manager + ' </h2> <h2>' + coach + ' </h2> <h3>' + description + ' </h3> <h4>' + link + ' </h4>';
        return HTML;
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

    function ajaxCall(url, outputElement, callback) {

        var request = getHTTPObject();
        outputElement.innerHTML = "Loading...";
        request.onreadystatechange = function () {

            if (request.readyState === 4 && request.status === 200)

            {
                text = request.responseText;
                data = JSON.parse(text);
                Teams = data.Teams;
                callback(outputElement);
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

    function showTeamsData(targetArea) {

        var i, OneTeam;

        for (i = 0; i < Teams.length; i++) {
            if (i === 0) {
                targetArea.innerHTML = "";
            }

            OneTeam = Teams[i];
            targetArea.innerHTML += buildTeamData(OneTeam);
        }
    }

    var TeamsApp = {

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

            var output = document.getElementById("insert");

            ajaxCall('data/Teams.json', output, showTeamsData);

        },
    }

    ajax.addEventListener("click", TeamsApp.getAllTeams, false);
    load.addEventListener("click", loadLocalData, false);
    save.addEventListener("click", saveDataLocally, false);
    // add clear
}());