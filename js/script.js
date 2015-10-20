// Be sure to add an IIFE to scope your work!

var family = {

    parents: [
        {
            name: "Joseph Schmitt",
            image: "../images/01_dad.jpg",
            description: "The 10th child out of 12 children of Peter and Mary Schmitt.  A warm and generious father of 9 children.  He has semi-retired from farming, however, he is not giving up his little hobbie farm."
},
        {
            name: "Delores Schmitt (Bruemmer)",
            image: "../images/00_momanddad.jpg",
            description: "The 6th child of 6 children of Margaret and Benjamin Bruemmer. The best Mom of 9 children. She is retired from Nursing field of 30 years. Her hobbie is gambling, feeding the birds, and traveling. She has 19 grandchildren and 5 great grandchildren."
}
    ],
    children: [
        {
            name: "Jeffrey Schmitt",
            image: "../images/1_jeff.jpg",
            description: "The oldest of 9 children and father of one child. He lives in California and comes to visit once a year over the 4th of July.  The family misses him a lot."
},
        {
            name: "Charlene Schmitt",
            image: "../images/2_char.jpg",
            description: "The oldest daughter of 3 daughters, 2nd oldest of 9 children.  She has 2 children and 2 grandchildren.  She loves flower gardens, long bike rides, good wine, and he fiance Brian."
},
        {
            name: "Lori Schmitt",
            image: "../images/3_lori.jpg",
            description: "The middle daughter of 3 daughters, 3rd oldest of 9 children.  She has one son. She has large flower gardens and a large vegetable garden. She loves to travel."
},
        {
            name: "Peter Schmitt",
            image: "../images/4_pete.jpg",
            description: "The 4th child of 9 children; named after his grandfather.  He is married to Jodi and has 4 children.  He is on the road most of the week, and really enjoys spending time with his family on the weekends."
},
        {
            name: "Mark Schmitt",
            image: "../images/5_mark.jpg",
            description: "Middle child of 9. He lives on the lake in which the family calls the 'cabin'.  He travels for work all over the world. He loves to make meals that he has enjoyed from other countries."
},
        {
            name: "Robert Schmitt",
            image: "../images/6_bob.jpg",
            description: "The 6th child of 9 children. He if father of 2 girls.  He loves to fish and hunt and supplies the family with perch and sunnies (yummy). He also is a carpenter and build nice cupboards, even a coffin for our uncle."
},
        {
            name: "Lisa Kujava",
            image: "../images/7_lisa.jpg",
            description: "The last daughter of 3 daughters.  She is married to John and a mother of 3 children and grandmother of 3 grandchilden. She is a wonderful baker, lots of deserts."
},
        {
            name: "Randy Schmitt",
            image: "../images/8_randy.jpg",
            description: "The 8th child of 9 children.  He is married to Milissa and is father of 4 children.  He has taken over the family dairy farm.  They built a chicken barn 2 years ago. They seem to be busy all the time with farm work"
},
        {
            name: "Micheal Schmitt",
            image: "../images/9_mike.jpg",
            description: "The baby of the family.  He is married to Traci and has 2 boys.  He also has a lake home on the same lake as his brother Mark.  The family either spends time at Mark's or Mikey's on the summer weekends.  The boys keep them hopping."
}
    ]
};

(function () {

    var parentTarget = document.getElementById("Parents");
    var childrenTarget = document.getElementById("Children");
    console.log(childrenTarget);
    for (i = 0; i < family.parents.length; i++) {

        var addNewH3 = document.createElement('h3');
        parentTarget.appendChild(addNewH3);
        addNewH3.textContent = family.parents[i].name;

        var addNewPara = document.createElement('p');
        addNewPara.textContent = family.parents[i].description;
        parentTarget.appendChild(addNewPara);
    }
    for (i = 0; i < family.children.length; i++) {

        var addNewH3 = document.createElement('h3');
        childrenTarget.appendChild(addNewH3);
        addNewH3.textContent = family.children[i].name;
        console.log(family.children[i].name);
        console.log(i);
        var addNewPara = document.createElement('p');
        addNewPara.textContent = family.children[i].description;
        childrenTarget.appendChild(addNewPara);
    }
}())