
(function () {
    var kevinSmithMovies = {
       var data = null;

    var object = kevinSmithMovies.items;
    var showMovies = document.getElementById("movies")[0];
    moviesCount = object.length;
    target = document.getElementById("movies");
    if (moviesCount > 0) {
        for (var i = 0; i < moviesCount; i++) {
            var item = object[i];
            var title = item.title;
            var director = item.director;
            var producer = item.producer;
            var year = item.year;
            var cast = item.cast;
            var h3 = document.createElement("h3");
            
            var headingText = document.createTextNode(title);
            h3.appendChild(headingText);
            target.appendChild(h3);

            var ul = document.createElement("ul");
            var stats = document.createTextNode("Director: " + director + ", "  + "Producer: " + producer + ", " + "Released: " + year + ", " + "Cast: " + cast);
            ul.appendChild(stats);
            target.appendChild(ul);
        }
    }
function loadLocalData() { 
        if (typeof(localStorage) === 'undefined') { 
    targetArea.innerHTML = "Browser does not support local storage."; 
         } 
       else { 
          // Do the stuff to load the page data 
             targetArea.innerHTML = "Loading Data..."; 
           text = localStorage.getItem(localStorageKey); 
            if (text === null) { 
                targetArea.innerHTML = "No local data found."; 
           }  
           else { 
               data = JSON.parse(text); 
               showTedTalkData(data); 
           } 
        } 
    } 
        
    
   function saveDataLocally(){ 
         if (typeof(localStorage) === 'undefined') { 
            targetArea.innerHTML = "Browser does not support local storage."; 
       } 
        else { 
           if (data === null) { 
               targetArea.innerHTML = "Data must be loaded before it can be saved."; 
            }  
             else { 
                localStorage.setItem(localStorageKey, JSON.stringify(data)); 
            } 
         } 
    } 
                                  
   function clearDataLocally(){ 
       if (typeof(localStorage) === 'undefined') { 
            targetArea.innerHTML = "Browser does not support local storage."; 
        } 
        else { 
           localStorage.removeItem(localStorageKey); 
       } 
   } 
    
    // Do the stuff to load the page data 
    targetArea.innerHTML = "Click a button to Load Data"; 
 
 
    ajax.addEventListener("click", loadDataAjax, false); 
    load.addEventListener("click", loadLocalData, false); 
     save.addEventListener("click", saveDataLocally, false); 
    clear.addEventListener("click", clearDataLocally, false);  



}())