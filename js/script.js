(function () {
    var Items = {

    var aside = document.getElementsByTagName("aside")[0];
    aside.style.listStylePosition = "center";
    document.querySelector(".hide").style.display = "block";

    var inventory = Items.featuredFlies;
    for (i = 0; i < inventory.length; i++) {

        itemCount = inventory[i];

        var featuredItems = document.getElementById("featured-items");

        var featuredName = document.createTextNode(itemCount.name);
        //console.log(featuredName);

        var pictureElement = document.createElement("img");

        pictureElement.setAttribute("src", itemCount.image);
        //console.log(pictureElement);
        featuredItems.appendChild(pictureElement);
        featuredItems.style.alignImage = "center";


        var featuredElement = document.createElement("h2");
        featuredElement.style.fontSize = "30px";
        featuredElement.style.fontFamily = "sans-serif";
        featuredElement.style.textAlign = "center";




        featuredElement.appendChild(featuredName);
        featuredItems.appendChild(featuredElement);

        var para = document.createElement("p");
        para.style.fontSize = "25px";
        para.style.color = "black";
        para.style.fontFamily = "sans-serif";
        para.style.textAlign = "center";



        var node = document.createTextNode(itemCount.description);
        //console.log(node);

        para.appendChild(node);
        featuredItems.appendChild(para);
    }



}());