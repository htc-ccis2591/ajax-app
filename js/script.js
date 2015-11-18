(function () {
	$(document).ready(function () {

		var ajaxLoadButton = $("#ajax_btn"),
			localLoadButton = $("#locload_btn"),
			localSaveButton = $("#locsave_btn"),
			localClearButton = ("#locclear_btn"),
			target = $("#locations");

		var list = {
				favorites: null,
				getHTTP: function () {
					var xhr;
					if (window.XMLHttpRequest) {
						xhr = new XMLHttpRequest();
					} else if (window.ActiveObject) {
						xhr = new ActiveObject("Msxml2.XMLHTTP");
					}
					return xhr;
				},
				ajax: function (dataURL, outputElement, callback) {

					var request = list.getHTTP();
					outputElement.html("Loading...");
					request.onreadystatechange = function () {
						if (request.readyState === 4 && request.status === 200) {
							list.favorites = JSON.parse(request.responseText);
							if (typeof callback === "function") {
								callback(list.favorites);
							} else {
								alert("HTTP error" + request.status + " " + request.statusText);
							}
						}
					};
					request.open("GET", dataURL, true);
					request.send(null);
				},
				favspots: function () {

					var output = $("#favorites");
					ajaxLoadButton.hide();
					localClearButton.hide();
					localSaveButton.show();
					list.ajax('data.destinations.json', output, list.build);

				},

				build: function (data) {
					$.getJSON('data/destinations.json', function (data) {
						var favList = data.destinations,
							count = favList.length;
						target.html("");
						if (count > 0) {
							$.each(favList, function (i, obj) {
								var img = $('<img />');
								target.append(img);
								img.attr("class", "float");
								img.attr("src", "images/" + obj.image);
								img.attr("alt", obj.name);
								target.append('<p>' + obj.description + '</p>');
								$('p').attr("class", "text");
								$('p').attr("style", "display:none");
							});
						}
					});
				},

				error: function () {
					alert('ajax load error!');
				},

				localLoad: function () {
					if (typeof (Storage) !== "undefined") {
						var storedList = localStorage.getItem("favorites");
						if (storedList === null) {
							target.html("Sorry no saved data found...");
						} else {
							target.html("Data is available in local storage!");
							var convertJSON = JSON.parse(storedList)
							list.favorites = convertJSON;
							list.build(convertJSON);
						}
					} else {
						alert("Sorry, your browser does not support local storage.");
					}
				},

				localSave: function () {
					if (typeof (Storage) ! == "undefined") {
						if (list.favorites === null) {
							target.html("Data is not available");
						} else {
							target.html("Data has been saved!");
							localSavebutton.hide();
							localClearButton.show();
							var strObj = JSON.stringify(list.favorites);

							localStorage.setItem("favorites", srtObj);
						}
					} else {
						target.html("Sorry, your browser does not support local storage.")
					}
				}
				localClear: function () {
					if (list.favorites === nul) {
						tagret.html("Local storage does not have data to delete");
					} else {
						localStorage.clear();
						target.html("Local storage has been cleared!");
						ajaxLoadButton.show();
						localSaveButton.hide();
						localClearButton.hide();
					}
				},

				ajaxloadClick: function () {
					ajaxLoadButton.click(list.destinations);
				},

				localloadclick: function () {
					localLoadButton.click(list.localLoad);
				},

				localsaveClick: function () {
					localSaveButton.click(list.localSave);
				},

				localclearClick: function () {
					localClearButton.click(list.localClear);
				},
			}
			target.html("Please click a button to load data");
			site.ajaxloadClick();
			site.localloadClick();
			site.localsaveClick();
			site.localclearClick();

		})();
	)
};

})();