(function () {

	var data = null,
		localStorageKey = "destinationsData",
		targetArea = document.getElementById("locations"),
		ajax = document.getElementById("ajax"),
		load = document.getElementById("load"),
		save = document.getElementById("save"),
		clear = document.getElementById("clear");

	function firstApp(location) {

		var article, row, col1, col2, wrapper, h2, headingText, iframe, image, paragraph, paraText;

		article = document.createElement("article");

		row = document.createElement("div");
		row.setAttribute("class", "row");

		col1 = document.createElement("div");
		col1.setAttribute("class", "col-md-push-6");

		col2 = document.createElement("div");
		col2.setAttribute("class", "col-md-pull-6");

		/*wrapper = document.createElement("div");
		wrapper.setAttribute("class", "imageWrapper");
		
		iframe = document.createElement("div");
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("src", "../images/")*/

		h2 = document.createElement("div");
		headingText = document.createTextNode(location.name);
		h2.appendChild(headingText);

		paragraph = document.createElement("p");
		paraText = document.createTextNode(location.description);
		paragraph.appendChild(paraText);

		image = document.createElement("img");
		image = document.getElementById("locations").innerHTML = "<img src='../images/' />";

		article.appendChild(row);

		row.appendChild(col1);
		row.appendChild(col2);

		col1.appendChild(h2);
		col1.appendChild(paragraph);

		col2.appendChild(wrapper);
		wrapper.appendChild(iframe);
		iframe.appendChild(image);

		return article;
	}

	function showData(data) {

		var destinations = data.destinations;
		var i, loc;

		for (i = 0; i < destinations; i++) {
			if (i === 0) {
				targetArea.innerHTML = "";
			}

			loc = destinations[i];
			targetArea.appendChild(firstApp(location));
		}

	}

	function loadLocalData() {
		if (typeof (localStorage) === 'undefined') {
			targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
		} else {
			targetArea.innerHTML = "Loading Data...";
			text = localStorage.getItem(localStorageKey);
			if (text === null) {
				targetArea.innerHTML = "Sorry, no local data found.";
			} else {
				data = JSON.parse(text);
				showData(data);
			}
		}
	}


	function saveDataLocally() {
		if (typeof (localStorage) === 'undefined') {
			targetArea.innerHTML = "Sorry, this browser does not support local storage.";
		} else {
			if (data === null) {
				targetArea.innerHTML = "Sorry, data must be loaded before it can be saved.";
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

	function loadDataAjax(dataURL, outputElement, callback) {

		var request = getHTTPObject();


		outputElement.innerHTML = "Please wait, loading....";

		request.onreadystatechange = function () {

			if (request.readyState === 4 && request.status === 200) {

				var locations = JSON.parse(request.responseText);

				if (typeof callback === "function") {

					callback(locations);

				}
			}
		};
		request.open("GET", "data/destination.json", true);
		request.send(null);
	}

	function loadFlyData() {
		var dataURL = "data/destinations.json";
		var outputElement = document.getElementById("locations");
		var callback = showData;

		showData;
	}

	targetArea.innerHTML = "Click a button to Load Data";

	ajax.addEventListener("click", loadFlyData, false);
	load.addEventListener("click", loadLocalData, false);
	save.addEventListener("click", saveDataLocally, false);
	clear.addEventListener("click", clearDataLocally, false);
}());