var inventory = document.getElementById("inventory");
var Liquerinventory = null;
var getfield = document.getElementById("inventorydropdown");
var itemheader = document.getElementById("itemheader");
var cost = document.getElementById("cost");
var proof = document.getElementById("proof");
var imgholder = document.getElementById("imgholder");
var favbutton = document.getElementById("favbutton");
var favoritearray = [];
var favoritesdisplay = document.getElementById("favoritesdisplay")
var savebutton = document.getElementById("savebutton")

// Setting What Object To Use For AJAX
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
// Making The AJAX Request, Waiting For The Data To Be Ready, Parsing The String Returned Into a JSON.  
// Invoking "setdropdown" Function.
function loaddata() {
   
    var request = getHTTPObject();
    request.open("GET", "data/liquers.json", true);
    request.send(null);
    request.onreadystatechange = function () {
        var text;
        if (request.readyState === 4 && request.status === 200) {
            text = request.responseText;
            Liquerinventory = JSON.parse(text);
          //  display();
            setdropdown();
        }
    }
}
loaddata()

// Change Displayed Data Based On Selected Dropdown Item.
function viewinventory(item) {
   
    for (i = 0; i < Liquerinventory.Liquers.length; i++) {
        if (Liquerinventory.Liquers[i].description == item) {
            itemdetails = (Liquerinventory.Liquers[i])
            itemheader.innerHTML = itemdetails.description;
            cost.innerHTML = "Cost" + " " + "$" + itemdetails.cost;
            proof.innerHTML = "proof =" + " " + itemdetails.proof;
            imgholder.style.backgroundImage = "url(" + itemdetails.image + ")";
        }
        else if (item == "") {
            itemheader.innerHTML = ""
            cost.innerHTML = ""
            proof.innerHTML = ""
            imgholder.style.backgroundImage = ""
        }
    }
}
// Loads All Item Descriptions Into The Dropdown Bar.
function setdropdown() {
    
    for (i = 0; i < Liquerinventory.Liquers.length; i++){
        var addchoice = document.createElement("option")
        addchoice.innerHTML = Liquerinventory.Liquers[i].description;
        getfield.add(addchoice);
    }
}


// Event Listener For Drop Down Field Changes
getfield.addEventListener("change", function() {
    console.log(getfield.children[getfield.selectedIndex].text);
    viewinventory(getfield.children[getfield.selectedIndex].text)
})

//Event Listener For Buttons 
favbutton.addEventListener("click", addfav)
clearbutton.addEventListener("click", clearfavorites)
loadbutton.addEventListener("click", loadfavorites)

// Storing favorite data into a JSON
function addfav() {

    favoritearray.push({name: itemheader.innerHTML, image: imgholder.style.backgroundImage})
    
    var afavorite = document.createElement("h3");
    afavorite.innerHTML = itemheader.innerHTML;
    favoritesdisplay.appendChild(afavorite);

    var stringtostore = JSON.stringify(favoritearray);
    localStorage.setItem("favorites", stringtostore);
  
    
}
function loadfavorites() {
    var savedfavs = localStorage.getItem("favorites");
    if (savedfavs != null) {
        var loadfavs = JSON.parse(savedfavs);
        
        for (i = 0; i < loadfavs.length; i++) {
            var afavorite = document.createElement("h3");
            afavorite.innerHTML = loadfavs[i].name;
            favoritesdisplay.appendChild(afavorite);
        }
        favoritearray.concat(loadfavs)
            
        
    }
}

function clearfavorites() {
   var h3s = document.getElementsByTagName("h3")
   for (i = 0; i < h3s.length; i++ ){h3s[i].innerHTML = ""}
    localStorage.removeItem("favorites");
    favoritearray = [];
}

function displayfavorites() {
    for (i = 0; i < favoritearray.length; i++) {
        var afavorite = document.createElement("h3");
        afavorite.innerHTML = favoritearray[i].name;
        favoritesdisplay.appendChild(afavorite);
    }
}
