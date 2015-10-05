var Liquerinventory = {
    "Liquers": [
        {
            "itemnumber": "001",
            "description": "vodka",
            "cost": "25.00",
            "proof": "80",
            "popularity": "7"
        },
          {
              "itemnumber": "002",
              "description": "whiskey",
              "cost": "20.00",
              "proof": "80",
              "popularity": "6"
          },
            {
                "itemnumber": "003",
                "description": "tequila",
                "cost": "23.00",
                "proof": "90",
                "popularity": "10"
            },
              {
                  "itemnumber": "004",
                  "description": "rum",
                  "cost": "18.00",
                  "proof": "80",
                  "popularity": "7"
              },
                {
                    "itemnumber": "005",
                    "description": "bourbon",
                    "cost": "30.00",
                    "proof": "70",
                    "popularity": "5"
                },
                  {
                      "itemnumber": "006",
                      "description": "beer",
                      "cost": "13.00",
                      "proof": "12",
                      "popularity": "10"
                  }
    ]
}


var inventory = document.getElementById("inventory");

for (i = 0; i < Liquerinventory.Liquers.length; i++) {
    var createinv = document.createElement("h2");
    var cost = document.createElement("p");
    var proof = document.createElement("p");
    createinv.innerHTML = Liquerinventory.Liquers[i].description;
    inventory.appendChild(createinv);
    cost.innerHTML = "Cost" + " " + "$" + Liquerinventory.Liquers[i].cost;
    inventory.appendChild(cost);
    proof.innerHTML = "proof =" + " " + Liquerinventory.Liquers[i].proof;
    inventory.appendChild(proof);
}