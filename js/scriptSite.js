(function () {

$(document).ready(function () {

(function(){
    $( "h1" ).css({
        color: "#0066CC",
    });
    
    $( "form button" ).css({
      background: "#FD6CA3",
      color: "#ffffff",
      border: "3px red solid",
      fontFamily: "Papyrus",
      fontSize: "15px",
      fontWeight: "Bold"
    });
    $( "form input" ).css({

      border: "1px blue solid",
      margin: "2px",
    });
    

    var ajaxLoadButton = $("#ajaxload-btn"),
        localLoadButton = $("#localload-btn"),
        localSaveButton = $("#localsave-btn"),
        localClearButton = $("#localclear-btn"),
        searchField = $("#search"),        
        target = $("#network");

    
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
                outputElement.html("Loading.. Please take a moment.");
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
            var output = $("#network");    
             site.ajax('data/netSites.json', output, function (data) {
                var searchValue = searchField.val(),
                    siteList = data.socialNetworks,
                    count = siteList.length;
                event.preventDefault(); 
                target.html("");
                   if(count > 0 && searchValue !== "") {
                     $.each(siteList, function (i, obj) {
                            isItFound = obj.site.indexOf(searchValue);
                        if(isItFound !== -1) {
                         var img = $('<img />');
                        target.append(img);
                             img.attr("class", "float");
                             img.attr("src", "images/" + obj.image);
                             img.attr("alt", obj.site);
                        target.append('<h2><a href="'+ obj.link +'">' + obj.site + '</a></h2>');

                        target.append('<h4>'+'<span>'+"+ Load More"+'</span>'+'</h4>');
                         $('h4').attr("style","cursor:pointer;");
                         $('span').attr("class","expander");
                         
                        target.append('<p>'+obj.desc+'</p>'); 
                         $('p').attr("class","text");
                         $('p').attr("style", "display:none");
                        } // end if
                      }); // end each
                          $('.expander').click(function () {
                            // .parent() selects the h4 tag, .next() selects the P tag
                            $(this).parent().next().slideToggle(200);
                           if ($(this).text() == "+ Load More"){
                                $(this).html("- Show Less")
                            }
                            else {
                                $(this).text("+ Load More")
                            }
                        });
                        $('.text').slideUp(200);
                 } // end count check
                 
            }); // end ajax call
        },
        socialNet : function () {
            var output = $("#network");
            ajaxLoadButton.hide();
            localSaveButton.show();
            localClearButton.hide();
            site.ajax('data/netSites.json', output, site.build);
        },     
        build : function(data){ 
             $.getJSON('data/netSites.json', function (data) {       
                var siteList = data.socialNetworks,
                count = siteList.length;
                target.html("");
                if(count > 0) {
                     $.each(siteList, function (i, obj) {
                        var img = $('<img />');
                        target.append(img);
                             img.attr("class", "float");
                             img.attr("src", "images/" + obj.image);
                             img.attr("alt", obj.site);
                        target.append('<h2><a href="'+ obj.link +'">' + obj.site + '</a></h2>');

                        target.append('<h4>'+'<span>'+"+ Load More"+'</span>'+'</h4>');
                         $('h4').attr("style","cursor:pointer;");
                         $('span').attr("class","expander");
                         
                        target.append('<p>'+obj.desc+'</p>'); 
                         $('p').attr("class","text");
                         $('p').attr("style", "display:none");

                }); // end each
                        $('.expander').click(function () {
                            // .parent() selects the h4 tag, .next() selects the P tag
                            $(this).parent().next().slideToggle(200);
                           if ($(this).text() == "+ Load More"){
                                $(this).html("- Show Less")
                            }
                            else {
                                $(this).text("+ Load More")
                            }
                        });
                        $('.text').slideUp(200);
                    
                 } // end count check  
             }); // end ajax call                
        },   
        error: function() {
            alert('An ajax error occurred.');
        },
        localLoad : function () {
            if (typeof(Storage) !== "undefined") 
                {
                    var storedItem = localStorage.getItem("socialNetwork");
                    if (storedItem === null)
                    {
                        target.html("No saved data found.");
                    }
                    else
                    {
                    target.html("Data has been saved into local storage.");
                    var convertObject = JSON.parse(storedItem);
                    site.socialNetwork = convertObject;
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
                        target.html("No data is on the page yet.");
                    }
                    else
                    {
                        target.html("Data has been saved.");
                        localSaveButton.hide();
                        localClearButton.show();
                    var stringObject = JSON.stringify(site.socialNetwork);
                        
                    localStorage.setItem("socialNetwork", stringObject);
                    }
                } 
            else 
                {
                    target.html("Sorry, your browser does not support Web Storage...");
                }
        },
        localClear: function () {
            if (site.socialNetwork === null)
                {
                   target.html("No data to be deleted in the local storage.");
                }
            else
                {
                    localStorage.clear();
                    target.html("Data in the local storage has been deleted.");
                    ajaxLoadButton.show();
                    localSaveButton.hide();
                    localClearButton.hide();
                }
        },
        
        ajaxloadClick : function() {
            
            ajaxLoadButton.click(site.socialNet);    
        },
        localloadClick : function() {
            
            localLoadButton.click(site.localLoad);    
        },
        localsaveClick : function() {
            
            localSaveButton.click(site.localSave);    
        },      
        
        localclearClick : function() {
                
            localClearButton.click(site.localClear);    
        },
        searchfieldSearch: function()   {
            searchField.keyup(site.search);
        },

    } // end site object
        target.html("Click a button to Load Data");
        site.ajaxloadClick();
        site.localloadClick();
        site.localsaveClick();
        site.localclearClick();
        site.searchfieldSearch();

})(); // end anonymous function
                      
}); // close document.ready
        
})(); // end of anonymous function
    