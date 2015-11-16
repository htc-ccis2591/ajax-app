(function () {

    $(document).ready(function () {

        var kevinSmithApp = {
            loadContent: function () {
                var h1 = $("#h1");
                $('<ul id=\"ul\">').insertAfter(h1.children().last());
                $.getJSON('data/kevinSmithMovies.json', function (data) {
                    var titles = data.titles,
                        count = titles.length;
                    if (count > 0) {
                        $.each(titles, function (i) {
                            $('#ul').append('<li>' + '<span>' + titles.title + '' + titles.director + '' + titles.producer + '' + titles.year + '' + titles.cast + '</span>' + '</li>');
                        });
                    }

                }).error(function() {
                    alert('unable to load titles');
                }).complete(function() {
                    alert('ajax call completed');
                }).success(function() {
                    alert('your ajax call was a success');
                });
                
            }
        }
 kevinSmithApp.loadContent();

        });
}())