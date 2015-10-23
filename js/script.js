//function for return of correct ajax object for cross browser
function getHttpObject(){
    
    var xhr;
    
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
//        browser current
    }
    else if(window.ActiveXObject) {
//        check for ie6
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    return xhr;
}

function ajaxCall(dataUrl, outputElement, callback){
    
var request = getHttpObject();
    
outputElement.innerHTML = "Data Loading";

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200){
             var games = JSON.parse(request.responseText);
            if(typeof callback == "function"){
                callback(games);
            }
        }
    }
    request.open("GET", dataUrl, true);
    request.send(null);
}



//
//
//(function() {
//    var list = {
//        games : [
//            {
//                title: "Binding of Isaac",
//                genre: "Rogue-Like",
//                rank: "1",
//                publisher: "Edmund McMillen",
//                information: "http://store.steampowered.com/app/113200/",
//                image: "Images/Binding_Of_Isaac.jpg" 
//                
//            },
//            {
//                 title: "Axiom Verge",
//                genre: "Metroidvania",
//                rank: "2",
//                publisher: "Thomas Happ Games LLC",
//                information: "http://store.steampowered.com/app/332200/",
//                image: "Images/Axiom_Verge.png"
//                
//            },
//               {
//                 title: "Shovel Knight",
//                genre: "Platformer",
//                rank: "3",
//                publisher: "Yacht Club Games",
//                information: "http://store.steampowered.com/app/250760/",
//                image: "Images/Shovel_knight_cover.jpg"
//                
//            },
//                    {
//                 title: "Hitogeta Happa",
//                genre: "Shoot-Em-Up",
//                rank: "4",
//                publisher: "Rockin Android	",
//                information: "http://store.steampowered.com/app/92210/",
//                image: "Images/Hitogata_Happa.jpg"
//                
//            },
//                    {
//                 title: "Jamestown",
//                genre: "Shoot-Em-Up",
//                rank: "5",
//                publisher: "Final Form Games",
//                information: "http://store.steampowered.com/app/94200/",
//                image: "Images/JamestownBoxArt.png"
//              
//            }
//            
//            ]};
(function(){
    var searchForm = document.getElementById("search-form");
    var searchField = document.getElementById("sInput");
    var getAll = document.getElementById("btnAllGames");
    
    var ajaxLoad = document.getElementById("btnAjaxLoad");
    
    var target = document.getElementById("output");
    
    var gameListMethod = {
        search : function(event){ 
            
            var output = document.getElementById("output");
            
             ajaxCall('data/games.json', output, function (data) {
            
            
            
            var searchValue = searchField.value,
            listGames = data.games,     
            count = listGames.length, 
            i;
            
            event.preventDefault();
            
            target.innerHTML = "";
            
            if(count > 0 && searchValue !== ""){
                
                for(i = 0; i < count; i ++){
                    
                    var obj = listGames[i],
                     isItFound = obj.title.indexOf(searchValue);
                    
                    if (isItFound !== -1){
                     

                        target = document.getElementById("output");
                        var gTitle = document.createElement("p");
                        
                        var gLink = document.createElement("a");
                        var linkTxtNode = document.createTextNode("Steam Page");
                        gLink.href = (obj.information);
                        
                        var createImgElement = document.createElement("img");
                        createImgElement.src = (obj.image);
                       

                        
                        var textRank = document.createTextNode( "Rank:"  + obj.rank);
                        var textTitle = document.createTextNode("Title:" + obj.title);
                        var textGenre = document.createTextNode("Genre:" + obj.genre);
                        var textPub = document.createTextNode("Publisher:" + obj.publisher);  
                      
                        target.appendChild(createImgElement);
                        gTitle.appendChild(textRank);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(textTitle);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(textGenre);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(textPub);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(gLink);
                        gLink.appendChild(linkTxtNode);
                        target.appendChild(gTitle);
                        
                        
                  
                         
                    }
                 
                    
               
                 
                
                }
             }
             });
//            end ajax call
                      
            },
        getAllTitles : function(){
                 var output = document.getElementById("output");
                 
             ajaxCall('data/games.json', output, function (data) {
                 
            var listGames = data.games,     
            count = listGames.length, 
            i;
                 
                 
            target.innerHTML = "";
            var i;
            
            if (count > 0){
                
                for(i = 0; i < count; i ++){
                    
                    var obj = listGames[i];
                    
                      target = document.getElementById("output");
                        var gTitle = document.createElement("p");
                        var gLink = document.createElement("a");
                        var linkTxtNode = document.createTextNode("Steam Page");
                        gLink.href = (obj.information);
                    
                    var createImgElement = document.createElement("img");
                        createImgElement.src = (obj.image);
                        
//                    var iLink = obj.information.link(obj.information);
//                        var testLink = document.getElementById("output").innerHTML = iLink;
                        var textRank = document.createTextNode( "Rank:"  + obj.rank);
                        var textTitle = document.createTextNode("Title:" + obj.title);
                        var textGenre = document.createTextNode("Genre:" + obj.genre);
                        var textPub = document.createTextNode("Publisher:" + obj.publisher);  
                      
                        target.appendChild(createImgElement);
                        gTitle.appendChild(textRank);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(textTitle);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(textGenre);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(textPub);
                        gTitle.appendChild(document.createElement("br"));
                        gTitle.appendChild(gLink);
                        gLink.appendChild(linkTxtNode);
                        target.appendChild(gTitle);
//                    
                }
            }
             });
//            end ajax callS
        
        },
        setActiveSection : function(){
            
            this.parentNode.setAttribute("class", "active");
        },
        removeActiveSection : function(){
            
            this.parentNode.removeAttribute("class");
        }
            
                
        }
        getAll.addEventListener("click", gameListMethod.getAllTitles, false);
    
        searchForm.addEventListener("submit", gameListMethod.search, false);
    
        searchField.addEventListener("keyup", gameListMethod.search, false);
        
       
    
    
                      
                        console.log(target);
                       
                         console.log(searchForm);
                        
// get all contacts when you click the button

                 
}());
