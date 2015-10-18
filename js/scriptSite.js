(function () {

//Function to Return the Correct Ajax Object
function getHTTPObject() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } 
    else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    return xhr;
}
//Ajax Load
function ajaxCall(dataUrl, outputElement, callback) {
    var request = getHTTPObject();
    outputElement.innerHTML = "Loading.. Please take a moment";
    request.onreadystatechange = function() {
        if ( request.readyState === 4 && request.status === 200 ) {
            var sites = JSON.parse(request.responseText);
            if(typeof callback === "function"){
                callback(sites);
            }
            else {
                 alert("HTTP error " + request.status + " " + request.statusText);
            }
        } 
    }    
    request.open("GET", dataUrl, true);
    request.send(null);
}

(function(){
    var ajaxLoadButton = document.getElementById("ajaxload-btn"),
        localLoadButton = document.getElementById("localload-btn"),
        localSaveButton = document.getElementById("localsave-btn"),
        localClearButton = document.getElementById("localclear-btn"),
        searchField = document.getElementById("search"),
        target = document.getElementById("network");
    var site = {
        search : function(event){
            var output = document.getElementById("network");    
             ajaxCall('data/netSites.json', output, function (data) {
                var searchValue = searchField.value,
                    siteList = data.socialNetworks,
                    count = siteList.length,
                    i;
                event.preventDefault();
                target.innerHTML = "";
                if(count > 0 && searchValue !== ""){
                    for(i = 0; i < count; i = i + 1) {
                        var obj = siteList[i],
                            isItFound = obj.site.indexOf(searchValue);
                        if(isItFound !== -1) {
                        var p_pic = document.createElement("img");
                        imagepath = obj.image;  
                        p_pic.setAttribute("class","float");
                        p_pic.setAttribute("src",imagepath);
                        target.appendChild(p_pic);
                        target.innerHTML += '<h2><a href="'+ obj.link +'">' + obj.site + '</a></h2>';
                        var p_name = document.createElement("p");
                        var p_name_text = document.createTextNode(obj.desc);
                        p_name.appendChild(p_name_text);
                        target.appendChild(p_name);
                        } // end if
    
                    } // end for loop
    
                } // end count check
            
            }); // end ajax call
        },
        socialNetwork : function () {
            var output = document.getElementById("network");
            ajaxCall('data/netSites.json', output, function (data) {
                var siteList = data.socialNetworks,
                    count = siteList.length,
                    i;
                target.innerHTML = "";
                if(count > 0) {
                    for(i = 0; i < count; i = i + 1) {
                        var obj = siteList[i];
                        var p_pic = document.createElement("img");
                        imagepath = obj.image;  
                        p_pic.setAttribute("class","float");
                        p_pic.setAttribute("src",imagepath);
                        target.appendChild(p_pic);
                        target.innerHTML += '<h2><a href="'+ obj.link +'">' + obj.site + '</a></h2>';
                        var p_name = document.createElement("p");
                        var p_name_text = document.createTextNode(obj.desc);
                        p_name.appendChild(p_name_text);
                        target.appendChild(p_name);
                    } // end for loop
                } // end count check
            }); // end ajax call
        },   
        //------------
         localLoad : function () {
            if (typeof(Storage) !== "undefined") 
                {
                    var stringObject = JSON.stringify(socialNetworks);
                    localStorage.setItem("socialNetworks", stringObject);
                } 
                else 
                {
                    alert("Sorry, your browser does not support Web Storage...");
                }
         },
        localSave: function () {
            if (typeof(Storage) !== "undefined") 
                {
                    var storedItem = localStorage.getItem("socialNetworks");
                    var convertObject = JSON.parse(storedItem);;
                } 
                else 
                {
                    alert("Sorry, your browser does not support Web Storage...");
                }
        },
        localClear: function () {
            localStorage.clear();
        }
        
        
    } // end site object
    ajaxLoadButton.addEventListener("click", site.socialNetwork, false);
    searchField.addEventListener("keyup", site.search, false);
    localLoadButton.addEventListener("click", site.localLoad, false);
    localSaveButton.addEventListener("click", site.localSave, false);
    localClearButton.addEventListener("click", site.localClear, false);
})(); // end anonymous function




}())
    
