(function () {

    var Teams = null;
    var data = null;
    var central = null;

    var localStorageKey = "TeamsData";
    var ajax = document.getElementById("ajax");
    var load = document.getElementById("load");
    var save = document.getElementById("save");
    var clear = document.getElementById("clear");
    var targetArea = document.getElementById("Teams");


    //    var json = loadLocalData("firstApps.json");


    function buildfirstArticle(Teams) {
        article = document.createElement("article");
        return article;
    }

    var container = central.Teams;
    var centralCount = container.length;
    var target = document.getElementById("insert"),


        i;

    if (centralCount > 0) {

        for (i = 0; i < centralCount; i = i + 1)

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
    
    (function (d) {
  d.getElementById('form').onsubmit = function () {
    d.getElementById('submit').style.display = 'block';
    d.getElementById('loading2').style.display = 'block';
  };
}(document));

    // Cross-Browser HTTP Object

    function getHTTPObject() {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxm12.XMLHTTP");
        }

        return xhr;
    }

    // AJAX Request for data.
    function loadDataAjax() {
        var request = getHTTPObject();

        request.open("GET", "data/Teams.json", true);
        request.send(null);
        request.onreadystatechange = function () {
            var text;

            if (request.readyState === 4 && request.status === 200) {

                text = request.responseText;
                data = JSON.parse(text);

                showfirstAppData();
            }
        }
    }

    function showfirstAppData() {

        var Teams = data.Teams;
        var i, first;

        for (i = 0; i < fistApps.length; i++) {
            if (i === 0) {
                targetArea.innerHTML = "";
            }

            Teams = Teams[i];
            targetArea.appendChild(buildfirstArticle(first));

        }
    }

    function loadLocalData() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            // Do the stuff to load the page data
            targetArea.innerHTML = "Loading Data...";
            text = localStorage.getItem(localStorageKey);
        }
        if (text === null) {
            targetArea.innerHTML = "Sorry, no local data found.";
        } else {
            data = JSON.parse(text);
            showfirstAppsData(data);
        }
    }


    function saveDataLocally() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            if (data === null) {
                targetArea.innerHTML = "Sorry, you must load data before you can save.";
            } else {
                localStorage.setItem(localStorageKey, JSON.stringify(data));
            }
        }
    }

    function clearDataLocally() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            localStorage.removeItem(localStorageKey);
        }
        xmlHttp.open("HEAD", url, true);
        xmlHttp.send(null);
    }

    targetArea.innerHTML = "Click a button to Load Data";

    ajax.addEventListener("click", loadDataAjax, false);
    load.addEventListener("click", loadLocalData, false);
    save.addEventListener("click", saveDataLocally, false);
    clear.addEventListener("click", clearDataLocally, false);

    //    alert("CENTRAL DIVISION JS BY: mj")


    //    document.getElementsByTagName('img')[0].innerHTML += desiredText.link(desiredLink); // attempting to 


})();