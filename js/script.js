(function () {
    var para = document.getElementsByTagName("p");
    var para1 = para[0];
      var ajload = document.getElementById("aj");
    var localload = document.getElementById("ll");
    var save = document.getElementById("ls");
    var clear = document.getElementById("lc");
                                       

    //json Boardgames

   // var Board = {
        //"games": [
            //{
            //    "name": "Settlers of catan",
            //    "rating": "Super fun",
             //   "pic": "images/settlers.jpg",
       // },
           // {
              //  "name": "Agricola",
             //   "rating": "Great for resource managent gamers",
              //  "pic": "images/agricola.jpg",
      //  },
         //   {
             //   "name": "Carcassonne",
              //  "rating": "Fun to play with just two people",
               // "pic": "images/carcassonne.jpg",
      // },
           // {
              //  "name": "Killer bunnys",
               // "rating": "Hard to learn but cool to play",
               // "pic": "images/killerbunnies.png"
      //  },
          //  {
             //   "name": "Munchkin",
            //    "rating": "The game to play if you want to laugh",
            //    "pic": "images/munchkin.jpg",
   //     }
     //   ]
 //   };
    
function getHTTPOject() {
    var xhr;
    
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Msxm12.XMLHTTP");
    }
    return xhr;
}
    function ajaxcall() {
        var getgames = getHTTPOject();
        getgames.open("GET", "data/board.json", true);
                      getgames.send(null)
        getgames.onreadystatechange = function() {
            var data; 
            if (getgames.readyState === 4 && getgames.status === 200) {
                data = getgames.responseText;
                games = JSON.parse(data);
                
                mygames();
                
            };
        };
    };
    function mygames() {
    
   var boardgames = games.games
   var gamecount = boardgames.length
    for (i = 0; i < gamecount; i++) {
        var item = boardgames[i],
            name = item.name,
            rating = item.rating,
            pic = item.pic;
      var gamename = document.createTextNode(name);
        var title = document.createElement("h3");
        para1.appendChild(title);
       title.appendChild(gamename);
        var newpic = document.createElement("img");
       para1.appendChild(newpic);
      newpic.setAttribute("src", pic);

     var rate = document.createTextNode(rating);
         para1.appendChild(rate);
    };
    }


var stuff = document.getElementById("text");
 
    function LocalData() {
        if (typeof(localStorage) === 'undefined') {
            stuff.innerHTML = sorry;
        }
         else {
        
            stuff.innerHTML = "Loading Data...";
            text = localStorage.getItem(localStorage);
            if (text === null) {
             stuff.innerHTML = "no data for you.";
                
            }
             else{
                 data1 = JSON.parse(mygames);
                 mygames(data1);
             }
         }
    }
    function savedata(){
        if (typeof(localStorage) === 'undefined') {
            stuff.innerHTML = "you cant use save localstorage";
        }
        else {
            if (localStorage === null) {
                stuff.innerHTML = "Load local srorage before you save it.";
            } 
            else {
                localStorage.setItem(localStorage, JSON.stringify(mygames));
            }
        }
    }
      function cleardata(){
        if (typeof(localStorage) === 'undefined') {
            targetArea.innerHTML = " local storage is not supported.";
        }
        else {
            localStorage.removeItem(localStorage);
        }
    }
    
 
            
            
 ajload.addEventListener("click", ajaxcall, false);
localload.addEventListener("click", LocalData, false);
    save.addEventListener("click", savedata, false);
    clear.addEventListener("click", cleardata, false);
}())


