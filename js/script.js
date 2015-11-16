(function () {

    $(document).ready(function () {

        var kevinSmithApp = {
            loadContent: function () {
                var h1 = $("#h1");
                $.getJSON('data/kevinSmithMovies.json', function () {
                    var titles = data.titles,
                        count = titles.length;
                    $("<h2 id=\"h2\">I exist</h2>").insertAfter(h1);
                    $('<ul id=\"ul\">').insertAfter(h2.children().last());
                    if (count > 0) {
                        $.each(titles, function (i) {
                            $('#ul').append('<li>' + '<span>' + obj.title + '' + obj.director + '' + obj.producer + '' + obj.year + '' + obj.cast + '</span>' + '</li>');
                        });
                    }

                });
            }
        }
 kevinSmithApp.loadContent();
    });
}())