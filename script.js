(function () {

        var data = null;
        var localDataStorage = "";
        var targetArea = document.getElementById("animalLists");
        var ajax = document.getElementById("btnAjaxLoad");
        var load = document.getElementById("btnLocalLoad");
        var save = document.getElementById("btnLocalSave");
        var clear = document.getElementById("btnLocalClear");



        function buildListStory(animalList) {
            
               //        
            //        var wildAnimals = "data/animalLists.json";
            //
            //        var object = wildAnimals,
            //            wildAnimalsCount = object.length,
            //            target = document.getElementById("animalLists");
            //        var i;
            //
            //        if (wildAnimalsCount > 0) {
            //            for (i = 0; i < wildAnimalsCount; i = i + 1) { //How many items in JSON object : 5
            //                var item = object[i],
            //                    name = item.name, // save the name to a variable
            //                    picture = item.picture, // save the picture to variable
            //                    description = item.description; //save the description to var
            //        

               
            var main = document.createElement("main");

            var nameHeading = document.createElement("h2");
            var headingText = document.createTextNode(animalList.name);
            nameHeading.appendChild(headingText);
            //target.appendChild(nameHeading);

            var p = document.createElement("p");
            var textDesc = document.createTextNode(animalList.description);
            p.appendChild(textDesc);
            //target.appendChild(p);

            var img = document.createElement("img");
            //img.setAttribute("class", "hide");
            img.setAttribute("src", animalList.picture);
            //img.appendChild(img);

            main.appendChild(nameHeading);
            main.appendChild(p);
            main.appendChild(img);


            return main;
        }

//function getAnimalLists() {
//
//var animalListsData = "data/animalLists.json";
//
//return animalListsData;
//
//}

 function getHTTPObject() {
        var xhr;
        
        if (window.XMLHttpRequest) { //check for support
            xhr = new XMLHttpRequest(); //if supported, use it because it is better
        }
        else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxml2.XMLHTTP"); // check for the older browser
        }
        
        return xhr;
    }


 function ajaxCall() {
        var request = getHTTPObject();

        request.open("GET", "data/animalLists.json", true);
        request.send(null)
        request.onreadystatechange = function () {
            var text;

            if (request.readyState === 4 && request.status === 200) {
                
                text = request.responseText;
                data = JSON.parse(text);
                
                showAnimalListsData();
            }
        }
    }
    
//    function getAnimalLists() {
//
//var animalListsData = "data/animalLists.json";
//
//return animalListsData;
//
//}
    
    function showAnimalListsData() {
        
        //var animalLists = "data/animalLists.json";
        var animalLists = data.animalList;
        var i, list;
        
        for (i = 0; i < animalLists.length; i++) {
            if (i===0) {
                targetArea.innerHTML = "";
            }
            
            list = animalLists[i];
            targetArea.appendChild(buildListStory(list));

        }
    }
    
    function loadLocalData() {
        if (typeof(localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        }
        else {
            // Do the stuff to load the page data
            targetArea.innerHTML = "Loading Data...";
            var text = localStorage.getItem(localDataStorage);
            if (text === null) {
                targetArea.innerHTML = "Local data can not be retrieved, please save first.";
            } 
            else {
                data = JSON.parse(text);
                showAnimalListsData(data);
            }
        }
    }
        
    
    function saveLocallData(){
        if (typeof(localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        }
        else {
            if (data === null) {
                targetArea.innerHTML = "Data does not exits!! please load data before you save.";
            } 
            else {
                localStorage.setItem(localDataStorage, JSON.stringify(data));
            }
        }
    }
                                 
    function clearLocalData(){
        if (typeof(localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        }
        else {
            localStorage.removeItem(localDataStorage);
        }
    }
    
    
    targetArea.innerHTML = "Click a button to Load Data";
    
    ajax.addEventListener("click", ajaxCall, false);
    load.addEventListener("click", loadLocalData, false);
    save.addEventListener("click", saveLocallData, false);
    clear.addEventListener("click", clearLocalData, false);
    
    

}())

 
//            nameHeading.onclick = function () {
//                var img = this.nextElementSibling;
//
//
//                var allImage = document.getElementsByTagName("img");
//                var i;
//
//                for (i = 0; i < allImage.length; i++) {
//                    var currImg = allImage[i];
//                    currImg.setAttribute("class", "hide")
//                }
//
//                img.removeAttribute("class");

//            }


