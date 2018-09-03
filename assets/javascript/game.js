$(document).ready(function(){
// Variables
    var random = Math.floor(Math.random() * 101 + 19); 
    var ametist = Math.floor(Math.random() * 11 + 1);
    var emerald = Math.floor(Math.random() * 11 + 1);
    var rubin = Math.floor(Math.random() * 11 + 1);
    var safir = Math.floor(Math.random() * 11 + 1);
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    var newChest = new Array(); 
    // Random images
    newChest[0] = "http://www.efren-cavazos.com/unit-4-game/assets/images/spiked_chest_small.png";
    newChest[1] = "http://www.efren-cavazos.com/unit-4-game/assets/images/common_chest.png";
    newChest[2] = "http://www.efren-cavazos.com/unit-4-game/assets/images/crystal_chest.png";
    newChest[3] = "http://www.efren-cavazos.com/unit-4-game/assets/images/nefrit_chest.png";
    newChest[4] = "http://www.efren-cavazos.com/unit-4-game/assets/images/red_chest.png";

    var j = 0;
    var p = newChest.length;
    var preBuffer = new Array();

    for (i = 0; i < p; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = newChest[i];
    }
    var whatImage = Math.floor(Math.random() * (p-1));

    function showImage() {
        if(whatImage === 0) {
            document.write('<img src="'+newChest[whatImage]+'" border=0 width=283 </a>');
        }
        else if(whatImage === 1) {
            document.write('<img src="'+newChest[whatImage]+'" border=0 width=283 </a>');
        }
        else if(whatImage === 2) {
            document.write('<img src="'+newChest[whatImage]+'" border=0 width=283 </a>');
        }
        else if(whatImage === 3) {
            document.write('<img src="'+newChest[whatImage]+'" border=0 width=283 </a>');
        }
        else if(whatImage === 4) {
            document.write('<img src="'+newChest[whatImage]+'" border=0 width=283 </a>');
        }
    }
    
// Declaring valuables
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    $("#finalTotal").text(userTotal);
    $("#randomNumber").text(random);


// Resets the game
    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $("#randomNumber").text(random);
        var ametist = Math.floor(Math.random() * 11 + 1);
        var emerald = Math.floor(Math.random() * 11 + 1);
        var rubin = Math.floor(Math.random() * 11 + 1);
        var safir = Math.floor(Math.random() * 11 + 1);
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
// Ametist
    $("#ametist").on("click", function(){
        userTotal = userTotal + ametist;
        console.log("New userTotal = " + userTotal);
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
        console.log("New userTotal = " + userTotal);
        $("finalTotal").text(userTotal);
        if(userTotal === random) {
            youWin();
        }
        else if(userTotal > random) {
            youLose();
        }
    });

// Safir
    $("#safir").on("click", function(){
        userTotal = userTotal + safir;
        console.log("New userTotal = " + userTotal);
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
        console.log("New userTotal = " + userTotal);
        $("finalTotal").text(userTotal);
        if(userTotal === random) {
            youWin();
        }
        else if(userTotal > random) {
            youLose();
        }
    });
})
