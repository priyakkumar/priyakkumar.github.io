window.onload = initAll;

function initAll() {
    document.getElementById("cumbersubmit").onclick = function() {
        document.getElementById("msgField").innerHTML = getCumberName();
        return false;
    }
}

function getCumberName() {
    var firstName1 = ["Bumber", "Bumper", "Blurry", "Buttle", "Bumble", "Buckwheat", "Bladder", "Bubble", "Blunder", "Bumble", "Bluster", "Blurgle", "Blender", "Blargle", "Bomby", "Bandy", "Bully", "Butter", "Bally", "Bongo", "Bander", "Bandi", "Bobby", "Banjo", "Bauble", "Blanket"];
    var firstName2 = ["poop", "juice", "slop", "bee", "swop", "crunch", "wumbus", "fuzzle", "crumble", "bumble", "hoot", "bumble", "blop", "snoot", "snarf", "whump", "snap", "twerk", "hump", "bongo", "baggage", "brunch", "buddy", "bloop", "blarf", "mulch"];
    // var middleName =["Waffer", "Lilly","Rugrat","Sand", "Fuzzy","Kitty",
    //                  "Puppy", "Snuggles","Rubber", "Stinky", "Lulu", "Lala", "Sparkle", "Glitter",
    //                  "Silver", "Golden", "Rainbow", "Cloud", "Rain", "Stormy", "Wink", "Sugar",
    //                  "Twinkle", "Star", "Halo", "Angel"];
    
    var lastName1 = ["Cucumber", "Cubic", "Curdle", "Crumble", "Crunchy", "Cucumber", "Captain", "Cubic", "Crumble", "Cuddle", "Cosby", "Candy", "Cloister", "Cottage", "Curry", "Crusty", "Cowboy", "Cuttle", "Cubbage", "Clamber", "Cashew", "Cumber", "Cumin", "Curly", "Cabbage", "Cutlet", ];
    var lastName2 = ["blender", "buns" , "kisser", "brains", "fart", "shirt", "burp", "slop", "nose", "bubble", "bebop", "muffin", "pants", "snatch", "sprinkles","sea", "doodle", "boodle", "bottom", "cabbage", "fish", "fanny", "crunchy", "sniff", "snarf", "cheese"];
    
    var firstNm = document.getElementById("fName").value.toUpperCase();
    // var middleNm = document.getElementById("mName").value.toUpperCase();
    var lastNm = document.getElementById("lName").value.toUpperCase();
    var validName = true;
    
    if (firstNm == "") {
        validName = false;
    }
    else {
        var firstNum1 = firstNm.charCodeAt(0) - 65;
        var firstNum2 = firstNm.charCodeAt((firstNm.length-1)) - 65;
        
        if (firstNum1 < 0 || firstNum1 > 25 || firstNum2 < 0 || firstNum2 > 25) {
            validName = false;
        }
    }
    
    if (!validName) {
        document.getElementById("fName").focus();
        document.getElementById("fName").select();
        return "That's not a valid first name!";
    }
    
    if (lastNm == "") {
        validName = false;
    }
    else {
        var lastNum1 = lastNm.charCodeAt(0) - 65;
        var lastNum2 = lastNm.charCodeAt((lastNm.length-1)) - 65;
        
        if (lastNum1 < 0 || lastNum1 > 25 || lastNum2 < 0 || lastNum2 > 25) {
            validName = false;
        }
    }
    
    if (!validName) {
        document.getElementById("lName").focus();
        document.getElementById("lName").select();
        return "That's not a valid last name!";
    }
    
    return "My Benedict Cumberbatch name is " + firstName1[firstNum1]
    + "" + firstName2[firstNum2] + " " + lastName1[lastNum1] + "" + lastName2[lastNum2] + "."
}