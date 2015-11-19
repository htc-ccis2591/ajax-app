(function () {

        $(document).ready(function () { 


            var kevinSmithApp = {
                localStorageKey:"saveMovies",
                movieData:"",
                loadContent: function () {
                    $.getJSON('data/kevinSmithMovies.json', function (data) {
                        kevinSmithApp.movieData = data;
                        kevinSmithApp.buildHTML();
                    }).error(function () {
                        alert('unable to load titles');
                    }).complete(function () {
                        alert('ajax call completed');
                    }).success(function () {
                        alert('your ajax call was a success');
                    });

                },
                buildHTML: function(){
                    var movies = $("#movies");
                    movies.empty();
                    var titles = kevinSmithApp.movieData.titles,
                            count = titles.length;
                    movies.append ($('<ul id=\"ul\">'));
                        if (count > 0) {
                            $.each(titles, function (i, movie) {
                                $('#ul').append('<li>' + '<span>' + movie.title + ' Director: ' + movie.director + ' Producer: ' + movie.producer + ' Release Year: ' + movie.year + ' Cast: ' + movie.cast + '</span>' + '</li>');
                            });
                        }

                }
                

        };
            $("#ajax").click(function () {
                $("#movies").load(kevinSmithApp.loadContent());
            });
            $("#save").click(function () {
                //var saveLocal = (function(){
                var string = JSON.stringify(kevinSmithApp.movieData);
                localStorage.setItem(kevinSmithApp.localStorageKey, string);
            });
            $("#load").click(function () {
                var string = localStorage.getItem(kevinSmithApp.localStorageKey);
                kevinSmithApp.movieData = JSON.parse(string);
                kevinSmithApp.buildHTML();
                
            });
            $("#clear").click(function () {
                localStorage.removeItem(kevinSmithApp.localStorageKey);
            });
        });
        }())