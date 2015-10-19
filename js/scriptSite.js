(function () {

//Function to Return the Correct Ajax Object

(function(){
    var ajaxLoadButton = document.getElementById("ajaxload-btn"),
        localLoadButton = document.getElementById("localload-btn"),
        localSaveButton = document.getElementById("localsave-btn"),
        localClearButton = document.getElementById("localclear-btn"),
        searchField = document.getElementById("search"),
        target = document.getElementById("network");
    var site = {
        socialNetwork : null,
        getHttp: function(){
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } 
            else if (window.ActiveXObject) { 
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            }
            return xhr;
        },
        ajax: function (dataUrl, outputElement, callback){
     
                var request = site.getHttp();
                outputElement.innerHTML = "Loading.. Please take a moment.";
                request.onreadystatechange = function() {
                    if ( request.readyState === 4 && request.status === 200 ) {
                        site.socialNetwork = JSON.parse(request.responseText);
                        if(typeof callback === "function"){
                            callback(site.socialNetwork);
                        }
                        else {
                             alert("HTTP error " + request.status + " " + request.statusText);
                        }
                    } 
                }    
                request.open("GET", dataUrl, true);
                request.send(null);
            },
        search : function(event){
            var output = document.getElementById("network");    
             site.ajax('data/netSites.json', output, function (data) {
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
        socialNet : function () {
            var output = document.getElementById("network");
            ajaxLoadButton.style.visibility="hidden";
            localSaveButton.style.visibility="visible";
            localClearButton.style.visibility="hidden";
            site.ajax('data/netSites.json', output, site.build);
        },
                
        build : function(data){ 
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
        },   
         localLoad : function () {
            if (typeof(Storage) !== "undefined") 
                {
                    var storedItem = localStorage.getItem("socialNetwork");
                    if (storedItem === null)
                    {
                        target.innerHTML = "No saved data found.";
                    }
                    else
                    {
                    target.innerHTML = "Data has been saved into local storage.";
                    var convertObject = JSON.parse(storedItem);
                    site.socialNetwork = convertObject;
                    target.innerHTML = "Loading.. Please take a moment.";
                    site.build(convertObject);
                    }
                } 
            else 
                {
                    alert("Sorry, your browser does not support Web Storage...");
                }
         },
        localSave: function () {
            if (typeof(Storage) !== "undefined") 
                {
                    if (site.socialNetwork === null)
                    {
                        target.innerHTML = "No data is on the page yet.";
                    }
                    else
                    {
                        target.innerHTML = "Data has been saved.";
                        localSaveButton.style.visibility="hidden";
                        localClearButton.style.visibility="visible";
                    var stringObject = JSON.stringify(site.socialNetwork);
                        
                    localStorage.setItem("socialNetwork", stringObject);
                    }
                } 
            else 
                {
                    target.innerHTML = "Sorry, your browser does not support Web Storage...";
                }
        },
        localClear: function () {
            if (site.socialNetwork === null)
                {
                    target.innerHTML = "No data to be deleted in the local storage.";
                }
            else
                {
                    localStorage.clear();
                    target.innerHTML = "Data in the local storage has been deleted.";
                    ajaxLoadButton.style.visibility="visible";
                    localSaveButton.style.visibility="hidden";
                    localClearButton.style.visibility="hidden"; 
                }
        }
    } // end site object
    ajaxLoadButton.addEventListener("click", site.socialNet, false);
    searchField.addEventListener("keyup", site.search, false);
    localLoadButton.addEventListener("click", site.localLoad, false);
    localSaveButton.addEventListener("click", site.localSave, false);
    localClearButton.addEventListener("click", site.localClear, false);
})(); // end anonymous function

}())
    
