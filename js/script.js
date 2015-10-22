(function () {

    var data = null;

    var localStorageKey = "Movie_Data";
    var targetArea = document.getElementById("movies");
    var ajax = document.getElementById("ajax");
    var load = document.getElementById("load");
    var save = document.getElementById("save");
    var clear = document.getElementById("clear");

    function buildMovies(movies) {

        
        main = document.createElement("main");
        

        movie_names = document.getElementById("movies");
        var new_movies = document.createElement("h1");
        var movie = document.createTextNode(movies.name);
        new_movies.appendChild(movie);
        movie_names.appendChild(new_movies);

        movie_img = document.getElementById("movies");
        var new_images = document.createElement("img");
        new_images.setAttribute("src", movies.image);
        movie_img.appendChild(new_images);

        movie_genre = document.getElementById("movies");
        var new_genre = document.createElement("h2");
        var genre = document.createTextNode(movies.genre);
        new_genre.appendChild(genre);
        movie_genre.appendChild(new_genre);

        var youTubeEmbed = "https://www.youtube.com/embed/"

        videos = document.getElementById("movies");
        var new_video = document.createElement("iframe");
        videos.setAttribute("frameborder", "0");
        videos.setAttribute("allowfullscreen", "allowfullscreen");
        new_video.setAttribute("src", youTubeEmbed + movies.video);
        videos.appendChild(new_video);
        

        
 

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

    function loadDataAjax() {
        var request = getHTTPObject();

        request.open("GET", "data/movies.json", true);
        request.send(null)
        request.onreadystatechange = function () {
            var text;

            if (request.readyState === 4 && request.status === 200) {

                text = request.responseText;
                data = JSON.parse(text);

                showMovies();
            }
        }
    }

    function showMovies() {

        var Movies = data.movies;
        var i, talk;

        for (i = 0; i < Movies.length; i++) {
            if (i === 0) {
                targetArea.innerHTML = "";
            }

            talk = Movies[i];
            targetArea.appendChild(buildMovies(talk));

        }
    }

    function loadLocalData() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Not supported by your browser.";
        } else {

            targetArea.innerHTML = "Loading Data...";
            text = localStorage.getItem(localStorageKey);
            if (text === null) {
                targetArea.innerHTML = "No data found.";
            } else {
                data = JSON.parse(text);
                showMovies(data);
            }
        }
    }


    function saveDataLocally() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Not supported by your browser.";
        } else {
            if (data === null) {
                targetArea.innerHTML = "Gotta have to load the data before you can save the data.";
            } else {
                localStorage.setItem(localStorageKey, JSON.stringify(data));
            }
        }
    }

    function clearDataLocally() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Not supported by your browser.";
        } else {
            localStorage.removeItem(localStorageKey);
        }
    }

    targetArea.innerHTML = "Click a button to Load Data";

    ajax.addEventListener("click", loadDataAjax, false);
    load.addEventListener("click", loadLocalData, false);
    save.addEventListener("click", saveDataLocally, false);
    clear.addEventListener("click", clearDataLocally, false);


})();