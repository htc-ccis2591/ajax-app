(function() {
  var a = {clubJSON:"data/clubList.json", deleteStorage:function() {
    localStorage.removeItem("clubInfo");
  }, ajaxButtonHide:function() {
    return $("#ajaxLoadButton").attr("class", "hide");
  }, loadButtonHide:function() {
    return $("#localLoadButton").attr("class", "hide");
  }, saveButtonHide:function() {
    return $("#localSaveButton").attr("class", "hide");
  }, clearButtonHide:function() {
    return $("#localClearButton").attr("class", "hide");
  }, loadButtonShow:function() {
    return $("#localLoadButton").removeAttr("class");
  }, saveButtonShow:function() {
    return $("#localSaveButton").removeAttr("class");
  }, clearButtonShow:function() {
    return $("#localClearButton").removeAttr("class");
  }, clearTextBox:function() {
    var a = $("#searchBox");
    return $(a).val("");
  }, searchBoxShow:function() {
    return $("#searchLabel").removeAttr("class");
  }, getFromSessionData:function() {
    return sessionStorage.getItem("clubInfo");
  }, saveToSessionData:function(a) {
    "undefined" === typeof sessionStorage ? alert("Browser does not support storing session data") : (a = JSON.stringify(a), sessionStorage.setItem("clubInfo", a));
  }, search:function(a) {
    var d = $("#searchBox").val(), b = $("#fullList");
    a = a.clubs;
    var e = a.length;
    event.preventDefault();
    b.html("");
    0 < e && "" !== d && $.each(a, function(a, f) {
      if (-1 !== f.club.indexOf(d)) {
        var c = f.stadium, e = f.capacity, h = f.manager, k = f.captain;
        $("<h3>", {text:f.club}).appendTo(b);
        $("<h4>", {text:"Stadium: " + c}).appendTo(b);
        $("<h4>", {text:"Capacity: " + e}).appendTo(b);
        $("<h4>", {text:"Manager: " + h}).appendTo(b);
        $("<h4>", {text:"Captain: " + k}).appendTo(b);
      }
    });
  }, displayClubs:function(c) {
    var d = $("#fullList"), b = $("#searchBox"), e = c.clubs, g = e.length;
    d.html("");
    0 < g && ($.each(e, function(a, b) {
      var c = b.stadium, e = b.capacity, g = b.manager, l = b.captain;
      $("<h3>", {text:b.club}).appendTo(d);
      $("<h4>", {text:"Stadium: " + c}).appendTo(d);
      $("<h4>", {text:"Capacity: " + e}).appendTo(d);
      $("<h4>", {text:"Manager: " + g}).appendTo(d);
      $("<h4>", {text:"Captain: " + l}).appendTo(d);
    }), b.keyup(function() {
      a.search(c);
    }));
  }, loadClubs:function() {
    $.getJSON(a.clubJSON, function(c) {
      $("#fullList").html("Loading Clubs from Data.");
      a.saveToSessionData(c);
      a.displayClubs(c);
      a.searchBoxShow();
      a.ajaxButtonHide();
      a.saveButtonShow();
    });
  }, buttonFunction:function() {
    var c = $("#ajaxLoadButton"), d = $("#localSaveButton"), b = $("#localLoadButton"), e = $("#localClearButton");
    c.click(function() {
      a.loadClubs();
    });
    b.click(function() {
      var b = $("#fullList");
      if ("undefined" === typeof localStorage) {
        alert("Browser does not support storing local data!");
      } else {
        var c = localStorage.getItem("clubInfo"), c = JSON.parse(c);
        b.html("Loading from local storage ...");
        a.displayClubs(c);
        a.clearTextBox();
      }
    });
    d.click(function() {
      "undefined" === typeof localStorage ? alert("Browser does not support storing local data") : (localStorage.setItem("clubInfo", a.getFromSessionData()), a.loadButtonShow(), a.clearButtonShow(), a.saveButtonHide());
    });
    e.click(function() {
      "undefined" === typeof localStorage ? alert("Browser does not support storing local data") : (a.deleteStorage(), a.loadButtonHide(), a.clearButtonHide(), a.saveButtonShow());
    });
  }};
  a.loadButtonHide();
  a.saveButtonHide();
  a.clearButtonHide();
  a.buttonFunction();
})();