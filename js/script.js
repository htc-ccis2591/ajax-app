
(function () {
    
       var data = null;

    var object = kevinSmithMovies.items;
    var localStorageKey = 
    var target = document.getElementById("movies");
    moviesCount = object.length;
    target = document.getElementById("movies");
    var ajax = document.getElementById("ajax"); 
    var load = document.getElementById("load"); 
    var save = document.getElementById("save"); 
    var clear = document.getElementById("clear");
    
    
    var headingText = document.createTextNode(title);
    var h3.appendChild(headingText);
    var target.appendChild(h3);
    var ul = document.createElement("ul");
    var stats = document.createTextNode("Director: " + director + ", "  + "Producer: " + producer + ", " + "Released: " + year + ", " + "Cast: " + cast);
        ul.appendChild(stats);
        target.appendChild(ul);
        }
    }
    function showMovies() {
        var moviesCount = data.kevinSmithMovies;
        var i, movie;
    for (var i = 0; i < moviesCount; i++) {
            target.appendChild"ul";
        movie = moviesCount[i];
    }
}

    
    
    function getHTTPObject(){
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxm112.XMLHTTP");
        }
            return xhr;
        }
    
        var request = getHTTPObject();
        request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200) {
            
            text = request.responseText; 
               data = JSON.parse(text); 
                
               showMovies();
               ul.appendChild(data);
               target.appendChild(ul);
        }
    }
    request.open("GET", "data/kevinSmithMovies.json", true);
    request.send(null);
    
function loadLocalData() { 
        if (typeof(localStorage) === 'undefined') { 
    target.innerHTML = "Browser does not support local storage."; 
         } 
       else { 
          // Do the stuff to load the page data 
             target.innerHTML = "Loading Data..."; 
           text = localStorage.getItem(localStorageKey); 
            if (text === null) { 
                target.innerHTML = "No local data found."; 
           }  
           else { 
               data = JSON.parse(text); 
               showMovies(data);
               
           } 
        } 
    } 
        
    
   function saveDataLocally(){ 
         if (typeof(localStorage) === 'undefined') { 
            target.innerHTML = "Browser does not support local storage."; 
       } 
        else { 
           if (data === null) { 
               target.innerHTML = "Data must be loaded before it can be saved."; 
            }  
             else { 
                localStorage.setItem(localStorageKey, JSON.stringify(data)); 
            } 
         } 
    } 
                                  
   function clearDataLocally(){ 
       if (typeof(localStorage) === 'undefined') { 
            target.innerHTML = "Browser does not support local storage."; 
        } 
        else { 
           localStorage.removeItem(localStorageKey); 
       } 
   } 

    target.innerHTML = "Click a button to Load Data"; 
 
 
    ajax.addEventListener("click", loadDataAjax, true); 
    load.addEventListener("click", loadLocalData, true); 
     save.addEventListener("click", saveDataLocally, true); 
    clear.addEventListener("click", clearDataLocally, true);  



}())