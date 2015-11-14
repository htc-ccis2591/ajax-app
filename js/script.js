(function () {

    var data = null;

    var localStorageKey = "destinationsData";
    var targetArea = document.getElementById("locations");
    var ajax = document.getElementById("ajax");
    var load = document.getElementById("load");
    var save = document.getElementById("save");
    var clear = document.getElementById("clear");

    function firstApp(destinations) {

        var main = document.createElement("main");

        var heading = document.createElement("h1");
        var headingTitle = document.createTextNode(destinations.name);
        console.log(heading);
        heading.appendChild(headingTitle);

        var img = document.createElement("img");
        img.setAttribute("src", destinations.picture);

        var p = document.createElement("p");
        var textDescription = document.createTextNode(destinations.description);
        p.appendChild(textDescription);

        main.appendChild(heading);
        main.appendChild(img);
        main.appendChild(p);

        return main;
    }

    function getHTTPObject() {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }

        return xhr;
    }

    function ajaxCall() {
		var request = getHTTPObject();

		request.open("GET", "data/destinations.json", true);
		request.send(null);
		request.onreadystatechange = function () {
			var text;

			if (request.readyState === 4 && request.status === 200) {

				text = request.responseText;
				data = JSON.parse(text);

				showdestinationsData();
			}
		}
	}

    function showdestinationsData() {
        var destinations = data.locations;
        var i, list;

        for (i = 0; i < locations.length; i++) {
            if (i === 0) {
                targetArea.innerHTML = "";
            }

            list = destinations[i];
            targetArea.appendChild(firstApp(locations));
        }
    }

    function loadLocalData() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            targetArea.innerHTML = "Loading Data...";
            var text = localStorage.getItem(localStorageKey);
            if (text === null) {
                targetArea.innerHTML = "Sorry, no local data found.";
            } else {
                data = JSON.parse(text);
                text(data);

            }
        }
    }

    function saveLocalData() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, this browser does not support local storage.";
        } else {
            if (data === null) {
                targetArea.innerHTML = "Ajax data must be loaded before it can be saved locally.";
            } else {
                localStorage.setItem(localStorageKey, JSON.stringify(data));
            }
        }
    }

    function clearLocalData() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            localStorage.removeItem(localStorageKey);
        }
    }

    targetArea.innerHTML = "Click a button to Load Data";

    ajax.addEventListener("click", ajaxCall, false);
    load.addEventListener("click", loadLocalData, false);
    save.addEventListener("click", saveLocalData, false);
    clear.addEventListener("click", clearLocalData, false);
}());
