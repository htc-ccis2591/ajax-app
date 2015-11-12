(function () {

    //Page 172-176 in the book section Listing 8.12   

    var getName = document.createElement("p");
    var ajload = document.getElementById("ajL");
    var localload = document.getElementById("loL");
    var save = document.getElementById("loS");
    var clear = document.getElementById("loC");

    function getHTTPOject() {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxm12.XMLHTTP");
        }
        return xhr;
    }

    function ajaxcall() {
        var gettouristSite = getHTTPOject();
        gettouristSite.open("GET", "data/touristSite.json", true);
        gettouristSite.send(null)
        gettouristSite.onreadystatechange = function () {
            //var data; 
            if (gettouristSite.readyState === 4 && gettouristSite.status === 200) {
                data = gettouristSite.responseText;
                parsedata = JSON.parse(data);
                data = parsedata;

                mytouristSite(parsedata);

            };
        };
    };

    function mytouristSite(data) {
        var item, name, loc, img, desc, email, h2, tourist, h3, text, image, para, detail, emaillink,  contact, objectTarget, data;       
        console.log(data);
        var object = data.touristSite;
        console.log(object);

        var listLocation = document.getElementById("wonders");
        var touristCount = object.length;
        var target = document.getElementById("wonders");
        target.innerHTML = ""

        if (touristCount > 0) {
            for (i = 0; i < touristCount; i = i + 1) {

                item = object[i];
                name = item.name;
                loc = item.location;
                img = item.image;
                desc = item.description;
                email = item.email;

                h2 = document.createElement("h2");
                tourist = document.createTextNode(name);
                h2.appendChild(tourist);
                target.appendChild(h2);

                h3 = document.createElement("h3");
                text = document.createTextNode(loc);
                h3.appendChild(text);
                target.appendChild(h3);

                image = document.createElement("img");
                image.setAttribute("src", img);
                target.appendChild(image);
                image.setAttribute("class", "float");

                para = document.createElement("p");
                detail = document.createTextNode(desc);
                para.appendChild(detail);
                target.appendChild(para);

                emaillink = document.createElement("a");
                emaillink.setAttribute("href", "mailto:" + email);
                contact = document.createTextNode(email);
                emaillink.appendChild(contact);
                target.appendChild(emaillink);

            };
        }
    }

    objectTarget = document.getElementById("wonders");

    function LocalData() {
        if (typeof (localStorage) === 'undefined') {
            objectTarget.innerHTML = "sorry!";
        } else {
            objectTarget.innerHTML = "Loading Data... Please take a moment.";
            text = localStorage.getItem("myStorage");
            if (text === null) {
                objectTarget.innerHTML = "no local data found.";
            } else {
                data = JSON.parse(text);
                console.log(data);
                mytouristSite(data);
            }
        }
    }
    data = null

    function savedata() {
        if (typeof (localStorage) === 'undefined') {
            objectTarget.innerHTML = "Browser does not support local storage";
        } else {
            if (localStorage === null) {
                objectTarget.innerHTML = "Load local srorage before you save it.";
            } else {
                localStorage.setItem("myStorage", JSON.stringify(data));
                console.log(data);
            }
        }
    }

    function cleardata() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = " Browser does not support local storage.";
        } else {
            localStorage.removeItem("myStorage");
        }
    }


    ajload.addEventListener("click", ajaxcall, false);
    localload.addEventListener("click", LocalData, false);
    save.addEventListener("click", savedata, false);
    clear.addEventListener("click", cleardata, false);

})();