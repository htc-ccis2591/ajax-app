$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img src="loading.gif"> loading...');
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/jveldboom",
        success: function (d) {
            // replace div's content with returned data
            $('#loading').html(d);
        }
    });
});