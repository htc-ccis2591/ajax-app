$(document).ready(function () {

    var Liquerinventory = null;
    var $clearbutton = $("#clearbutton")
    var $loadbutton = $("#loadbutton")
    var $favbutton = $("#favbutton");
    var $getfield = $("#inventorydropdown");
    var $itemheader = $("#itemheader");
    var $cost = $("#cost");
    var $proof = $("#proof");
    var $imgholder = $("#imgholder");
    var favoritearray = [];
    var counter = -1;
    var $favoritesdisplay = $("#favoritesdisplay");
    var $tnimageholder = $("#holder");

    // Event Listener For Drop Down Field Changes
    $getfield.on("change", function () {
        viewinventory($getfield.val())
    })
    //Event Listener For Buttons 
    $favbutton.on("click", addfav)
    $clearbutton.on("click", clearfavorites)
    $loadbutton.on("click", loadfavorites)


    $.ajax({
        type: 'GET',
        url: "data/liquers.json",
        dataType: "json",
        success: function (data) {
            Liquerinventory = data; 
            setdropdown();
        }
    })
   
    // Change Displayed Data Based On Selected Dropdown Item.
    function viewinventory(item) {

        for (i = 0; i < Liquerinventory.Liquers.length; i++) {

            if (Liquerinventory.Liquers[i].description == item) {
                tnimageholder = Liquerinventory.Liquers[i].tnimage;
                itemdetails = (Liquerinventory.Liquers[i])
                $itemheader.html(itemdetails.description);
                $cost.html("Cost" + " " + "$" + itemdetails.cost);
                $proof.html("proof =" + " " + itemdetails.proof);
                $imgholder.css("background-image", "url(" + itemdetails.image + ")");
                $tnimageholder.css("background-image", "url(" + itemdetails.tnimage + ")");
            }
            else if (item == "") {
                $itemheader.html("");
                $cost.html("");
                $proof.html("");
                $imgholder.css("background-image", "url('')");
            }
        }
    }
    // Loads All Item Descriptions Into The Dropdown Bar.
    function setdropdown() {
        for (i = 0; i < Liquerinventory.Liquers.length; i++) {
            $getfield.append("<option>" + Liquerinventory.Liquers[i].description + "</option>")
        }
    }




    // Storing favorite data into a JSON
    function addfav() {
        if ($getfield.val() != "") {
            favoritearray[counter + 1] = ({ name: itemheader.innerHTML, image: $imgholder.css("background-image"), tnimage: $tnimageholder.css("background-image") })

            $favoritesdisplay.append("<h3 class ='favpanel'>" + $itemheader.html() + "</h3>");
            $favoritesdisplay.append('<div class ="favimage" style="background-image:' + $tnimageholder.css("background-image") + ";" + 'height: 100px; width: 100px;"></div>')

            var stringtostore = JSON.stringify(favoritearray);
            localStorage.setItem(localStorage.length + 1, stringtostore);

        }
    }
    // Loading saved favorites and parsing them into JSON format, then displaying their data in the favorites seciton
    function loadfavorites() {
        var storagekeys = [];
        var savedfavs = [];
        var loadfavs = [];
        // To stop duplication if you add a favorite before loading previously saved favorites
        $(".favpanel").remove();
        $(".favimage").remove();
        // get storage keys from local storage fields
        for (i = 0; i < localStorage.length; i++) {
            storagekeys[i] = (localStorage.key(i));
        }
        // puts values of localstorage fields into array
        for (i = 0; i < storagekeys.length; i++) {
            savedfavs[i] = (localStorage.getItem(storagekeys[i]));
        };

        // Jsonifiys values from saved favs array and inserts into loadfavs
        if (savedfavs.length != 0) {
            for (i = 0; i < savedfavs.length; i++) {
                loadfavs[i] = jQuery.parseJSON(savedfavs[i]);
            }


            // appends favoritesdisplay with values from json of favorited items
            for (i = 0; i < loadfavs.length; i++) {
                $favoritesdisplay.append("<h3 class ='favpanel'>" + loadfavs[i][0].name + "</h3>");
                $favoritesdisplay.append('<div class ="favimage" style="background-image:' + loadfavs[i][0].tnimage + ";" + 'height: 100px; width: 100px;"></div>')

            }



        }
        else { alert("You do not have any saved favorites") };
    }
    // Removes all saved data both displayed on screen and stored locally
    function clearfavorites() {
        localStorage.clear();
        $(".favpanel").remove();
        $(".favimage").remove();
        favoritearray = [];
        counter = -1;
    }

});

