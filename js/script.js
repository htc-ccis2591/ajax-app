(function () {

    $(document).ready(function () {



        var kevinSmithApp = {
            loadContent: function () {
                var movies = $("#movies");
                $.getJSON('data/kevinSmithMovies.json', function (data) {
                    var titles = data.titles,
                        count = titles.length;
                    $('<ul id=\"ul\">').insertAfter(movies.children().last());
                    if (count > 0) {
                        $.each(titles, function (i, movie) {
                            $('#ul').append('<li>' + '<span>' + movie.title + ' Director: ' + movie.director + ' Producer: ' + movie.producer + ' Release Year: ' + movie.year + ' Cast: ' + movie.cast + '</span>' + '</li>');
                        });
                    }

                }).error(function () {
                    alert('unable to load titles');
                }).complete(function () {
                    alert('ajax call completed');
                }).success(function () {
                    alert('your ajax call was a success');
                });

            }
        }
        $("#ajax").click(function () {
            $("#movies").load(kevinSmithApp.loadContent());
        });
        $("#save").click(function () {
        localStorage(titles);
        });
        $("#clear").click(function() {
            storage.removeAll();
        });
    });
}())