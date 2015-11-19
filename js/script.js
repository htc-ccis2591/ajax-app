//(function() {
//var getName = $("<p>").text;
//var ajload = $("#ajL"),
//localload = $("#loL"),
//localsave = $("#loS"),
//loccalclear = $("#loC"),

$(document).ready(function () {

    var touristSite = {
        touristSitedata: "",
        touristSitePlace: function (data) {

            $.ajax({
                type: 'GET',
                url: 'data/touristSite.json',
                dataType: 'json',
                // Code to run if the request succeeds;
                // the response is passed to the function
                success: function (data) {
                    touristSite.touristSitedata = data;
                    touristSite.mytouristSite(data);
                },
                // Code to run if the request fails; the raw request and status codes are passed to the function
                error: function (xhr, status, errorThrown) {
                    alert("Sorry, there was an ajax error!");
                    console.log("Error: " + errorThrown);
                    console.log("Status: " + status);
                    console.dir(xhr);
                },

                // Code to run regardless of success or failure
                complete: function (xhr, status) {
                    alert("Your ajax call was complete!");
                }
            });
        },

        mytouristSite: function (data) {
            var item, name, loc, img, desc, email, h2, tourist, h3, text, image, para, detail, emaillink, contact, objectTarget, data;
            console.log(data);
            var object = data.touristSite;
            console.log(object);

            var listLocation = $("#wonders");
            var touristCount = object.length;
            var target = $("#wonders");
            target.innerHTML = ""

            if (touristCount > 0) {
                for (i = 0; i < touristCount; i = i + 1) {

                    item = object[i];
                    name = item.name;
                    loc = item.location;
                    img = item.image;
                    desc = item.description;
                    email = item.email;

                    h2 = $("<h2>" + name + "</h2>");
                    //tourist = document.createTextNode(name);
                    //h2.appendChild(tourist);
                    target.append(h2);

                    h3 = $("<h3>" + loc + "</h3>");
                    //text = document.createTextNode(loc);
                    //h3.appendChild(text);
                    target.append(h3);

                    image = $("<img>");
                    image.attr("src", img);
                    target.append(image);
                    image.attr("class", "float");

                    para = $("<p>" + desc + "</p>");
                    //detail = document.createTextNode(desc);
                    //para.append(detail);
                    target.append(para);

                    emaillink = $("<a>");
                    emaillink.attr("href", "mailto:" + email);
                    emaillink.text(email);
                    //emaillink.append(contact);
                    target.append(emaillink);

                };
            }
        },


        LocalData: function () {
            objectTarget = $("#wonders");
            if (typeof (localStorage) === 'undefined') {
                objectTarget.append($("<p> Sorry no local data!</p>"));
                
            } else {
                objectTarget.append($("<p>Loading Data... Please take a moment!</p>"));
                text = localStorage.getItem("myStorage");
                if (text === null) {
                    objectTarget.append($("<p> Sorry no local data found!</p>"));
                } else {
                    touristSite.touristSitedata = JSON.parse(text);
                    console.log(touristSite.touristSitedata);
                    touristSite.mytouristSite(touristSite.touristSitedata);
                }
            }
        },

        savedata: function () {
            objectTarget = $("#wonders");
            if (typeof (localStorage) === 'undefined') {
                objectTarget.append($("<p> Browser does not support local storage!</p>")); 
            } else {
                if (localStorage === null) {
                    objectTarget.append($("<p> Load local srorage before you save it!</p>"));
                } else {
                    localStorage.setItem("myStorage", JSON.stringify(touristSite.touristSitedata));
                }
            }
        },

        cleardata: function () {
            if (typeof (localStorage) === 'undefined') {
                targetArea.append($("<p> Browser does not support local storage!</p>"));
            } else {
                localStorage.removeItem("myStorage");
            }
        },

        monthlyPromotions: (function (data) {
            $("#promotions p").remove();
            $.getJSON('data/promotions.json', function (data) {
                var promotionsItem = data.promotions,
                    count = promotionsItem.length;
                if (count > 0) {
                    $.each(promotionsItem, function (i, obj) {
                        $('#promotions').append('<p>' + obj.description + '<p>');

                    });
                }

            });

        })
    };

    $(document).ready(function () {

        var $register = $("#register"),
            $fullname = $("#fullname"),
            $email = $("#email");

        $register.submit(function () {
            var nameValidate = $fullname.val(),
                emailValidate = $email.val();

            if (nameValidate === "" || emailValidate === "") {

                alert("All fields can not be blank!");

            } else if (nameValidate.length < 2) {

                alert("Need a valid name at least 2 charactors!");

            } else if (!validateEmail(emailValidate)) {

                alert("Email is invalid!");
            }

            function validateEmail(emailValidate) {
                var emailReg = new RegExp(/^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/),
                    valid = emailReg.test(emailValidate);

                if (valid) {
                    return true;
                } else {
                    return false;
                }
            }

        });

    });

    $("#ajL").click(touristSite.touristSitePlace);

    $("#loL").click(touristSite.LocalData);

    $("#loS").click(touristSite.savedata);

    $("#loC").click(touristSite.cleardata);


}());