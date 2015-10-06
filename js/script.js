function generate_table() {
    
    var flies = {

            "flybox": [

                {
                    "Fly Id": "1",
                    "name": "Royal Trude",
                    "type": "Dry",
                    "image": "images/RoyalTrude.jpg"
                },

                {
                    "Fly Id": "2",
                    "name": "Stonefly",
                    "type": "Dry",
                    "image": "images/Stonefly.jpg"
                },

                {
                    "Fly Id": "3",
                    "name": "Turk's Tarantula",
                    "type": "Wet",
                    "image": "images/TurksTarantula.jpg"
                },

                {
                    "Fly Id": "4",
                    "name": "Cripple Dun BWO",
                    "type": "Wet",
                    "image": "images/CrippleDunBWO.jpg"
                },

                {
                    "Fly Id": "5",
                    "name": "Ausable Wulff",
                    "type": "Dry",
                    "image": "images/AusableWulff.jpg"
                },

                {
                    "Fly Id": "6",
                    "name": "Splitsville Flying Ant",
                    "type": "Wet",
                    "image": "images/SplitsvilleFlyingAnt.jpg"
                },

                {
                    "Fly Id": "7",
                    "name": "Sedgehammer",
                    "type": "Dry",
                    "image": "images/Sedgehammer.jpg"
                },

                {
                    "Fly Id": "8",
                    "name": "Lightgning Bug",
                    "type": "Wet",
                    "image": "images/LightningBug.jpg"
                }

            ]
var tblFlies = document.createElement("TABLE");
    table.border = "1";
    var columnCount = flies[0].length;
            var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = flies[0][i];
                row.appendChild(headerCell);
            }


            for (var i = 1; i < flies.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = flies[i][j];
                }
            }

            var flyTable = document.getElementById("tblflies");
            tblFlies.innerHTML = "";
            tblflies.appendChild(table);
        });

};