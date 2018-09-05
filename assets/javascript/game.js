$(document).ready(function(){
// Variables
// Generates Random Number
    var random = Math.floor(Math.random() * 101 + 19); 
    $("#randomNumber").text(random);
// Jewel values with random number generator
    var safir = Math.floor(Math.random() * 11 + 1);
    var emerald = Math.floor(Math.random() * 11 + 1);
    var ametist = Math.floor(Math.random() * 11 + 1);
    var rubin = Math.floor(Math.random() * 11 + 1);
// Game and Player Values
    var userTotal = 0;
    $("#finalTotal").text(userTotal);

    var wins = 0;
    $("#numberWins").text(wins);

    var losses = 0;
    $("#numberLosses").text(losses);

// Random Chest images as an accessory
    var newChest = new Array(); 
    newChest[0] = "http://www.efren-cavazos.com/unit-4-game/assets/images/spiked_chest_small.png";
    newChest[1] = "http://www.efren-cavazos.com/unit-4-game/assets/images/common_chest.png";
    newChest[2] = "http://www.efren-cavazos.com/unit-4-game/assets/images/crystal_chest.png";
    newChest[3] = "http://www.efren-cavazos.com/unit-4-game/assets/images/nefrit_chest.png";
    newChest[4] = "http://www.efren-cavazos.com/unit-4-game/assets/images/red_chest.png";

    var chest = newChest.length;
    var x = Math.floor(chest * Math.random());
    $("#randomChest").attr("src", newChest[x]);

// Resets the game
    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $("#randomNumber").text(random);
        ametist = Math.floor(Math.random() * 11 + 1);
        emerald = Math.floor(Math.random() * 11 + 1);
        rubin = Math.floor(Math.random() * 11 + 1);
        safir = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }
// Win Function
    function youWin() {
        alert("You Won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }
// Lose Function
    function youLose() {
        alert ("You Lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
  

// On Click Options
// Safir
    $("#safir").on("click", function(){
        userTotal = userTotal + safir;
        console.log("Safir value = " + safir + "   New userTotal = " + userTotal);
        $("finalTotal").text(userTotal);
        if(userTotal === random) {
            youWin();
        }
        else if(userTotal > random) {
            youLose();
        }
    });

// Emerald
    $("#emerald").on("click", function(){
        userTotal = userTotal + emerald;
        console.log("Emerald value = " + emerald + "   New userTotal = " + userTotal);
        $("finalTotal").text(userTotal);
        if(userTotal === random) {
            youWin();
        }
        else if(userTotal > random) {
            youLose();
        }
    });

// Ametist
    $("#ametist").on("click", function(){
        userTotal = userTotal + ametist;
        console.log("Ametist value = " + ametist + "   New userTotal = " + userTotal);
        $("finalTotal").text(userTotal);
        
        if(userTotal === random) {
            youWin();
        }
        else if(userTotal > random) {
            youLose();
        }
    });

// Rubin
    $("#rubin").on("click", function(){
        userTotal = userTotal + rubin;
        console.log("Rubin value = " + rubin + "   New userTotal = " + userTotal);
        $("finalTotal").text(userTotal);
        if(userTotal === random) {
            youWin();
        }
        else if(userTotal > random) {
            youLose();
        }
    });
})
