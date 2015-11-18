(function () {
    var boardgamesapp = {
        gamedata: "",
        localstoragekey: "game",
        Allgames: function (data) {
            $.ajax({
                type: 'GET',
                url: 'data/board.json',
                dataType: 'json',
                success: function (data) {
                    boardgamesapp.gamedata = data.games;
                    boardgamesapp.showdata();


                }

            });



        },
        showdata: function () {
            var count = boardgamesapp.gamedata.length;
            if (count > 0) {
                $.each(boardgamesapp.gamedata, function (i, obj) {

                    $("#text").append("<p>" + obj.name + "<br>" + obj.rating);

                    $("#text").append("<img src=" + obj.pic + ">");
                });

            };
        },


        localData: function () {
            if (typeof (localStorage) === 'undefined') {
                $("#button").append("sorry");
            } else {
                var text = localStorage.getItem(boardgamesapp.localstoragekey);
                if (text === null) {
                    alert("No data for you to load.");

                } else {
                    boardgamesapp.gamedata = JSON.parse(text);
                    boardgamesapp.showdata();

                }
            }
        },

        savedata: function () {
            if (typeof (localStorage) === 'undefined') {
                $("button").append("you cant use save localstorage");
            } else {

                if (boardgamesapp.gamedata === null) {
                    alert("Load data before you save it.");
                } else {
                    localStorage.setItem(boardgamesapp.localstoragekey, JSON.stringify(boardgamesapp.gamedata));
                }
            }
        },

        cleardata: function () {
            if (typeof (localStorage) === 'undefined') {
                $("button").append("local storage is not supported.");
            } else {
                localStorage.removeItem(boardgamesapp.localstoragekey);
            }
        }
    };
    $("#aj").click(function () {
        boardgamesapp.Allgames()
    });
    $("#ll").click(function () {
        boardgamesapp.localData()
    });
    $("#ls").click(function () {
        boardgamesapp.savedata();
    });
    $("#lc").click(function () {
        boardgamesapp.cleardata()
    });

    $("#register").submit(function () {
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

        var text = $("#email").val();
        console.log(text);

        if (text === "") {
            alert("Email can't be blank!");
        }
        if (!filter.test(text)) {
            alert("Not a good email");
        }

        var name = $("#name").val();
        console.log(name);

        if (name === "") {
            alert("Name please")
        }

        return false;
    });

}())