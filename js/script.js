/* create some data in the form of a JSON object you can consume and loop through */

var netsites = {
    "socialNetworks" : [
        {
            "image": "images/facebook.gif",
            "site": "Facebook",
            "link": "http://www.facebook.com",
            "desc": "900,000,000 - Estimated Unique Monthly Visitors | 2- Alexa Rank",
        },
        {
            "image": "images/twitter.gif",
            "site": "Twitter",
            "link": "http://www.twitter.com",
            "desc": "310,000,000 - Estimated Unique Monthly Visitors | 8- Alexa Rank",
        },
        {
            "image": "images/linkedin.gif",
            "site": "LinkedIn",
            "link": "http://www.linkedin.com",
            "desc": "255,000,000 - Estimated Unique Monthly Visitors | 9- Alexa Rank",
        },
        {
            "image": "images/pinterest.gif",
            "site": "Pinterest",
            "link": "http://www.pinterest.com/",
            "desc": "250,000,000 - Estimated Unique Monthly Visitors | 26- Alexa Rank",
        },
        {
            "image": "images/instagram.gif",
            "site": "Instagram",
            "link": "http://www.instagram.com",
            "desc": "100,000,000 - Estimated Unique Monthly Visitors | 36- Alexa Rank",
        }
    ]
};

/* wrap everything in an anonymous function to contain the variables */
(function(){

    /* cache some initial variables */
    
    var object = netsites.socialNetworks, // save the JSON object
        networksCount = object.length, // how many items in the JSON object? "5"
        target = document.getElementById("network"),// where you're outputting the data
         i; // declare the "i" variable for later use in the loop
    
    /* before doing anything make sure there are contacts to loop through */
    
    if(networksCount > 0) {
    
        /* loop through each JSON object item until you hit #5, then stop */
    
        for (i = 0; i < networksCount; i = i + 1) {
    
            /* inside the loop "i" is the array index */
    
            var item = object[i],
                name = item.site, // save the site to a variable
                link = item.link, // save the link to a variable
                desc = item.desc, // save the desc to a variable
                image = item.image; // save the image to a variable
            
            var p_pic = document.createElement("img");
            imagepath = object[i].image;  
            p_pic.setAttribute("class","float");
            p_pic.setAttribute("src",imagepath);
            target.appendChild(p_pic);
            
            target.innerHTML += '<h2><a href="'+ object[i].link +'">' + object[i].site + '</a></h2>';    
            
            var p_name = document.createElement("p");
            var p_name_text = document.createTextNode(object[i].desc);
            p_name.appendChild(p_name_text);
            target.appendChild(p_name);    
    
        } // end for loop
    
    } // end count check
    
})(); // end anonymous function