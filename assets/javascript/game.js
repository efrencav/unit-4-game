$(document).ready(function(){
    var random = Math.floor(Math.random() * 50) 
    $("#randomNumber").text(random);

    var ametist = Math.floor(Math.random() * 11)
    var emerald = Math.floor(Math.random() * 11)
    var rubin = Math.floor(Math.random() * 11)
    var safir = Math.floor(Math.random() * 11)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    $("#finalTotal").text(userTotal);

    function reset() {
        random = Math.floor(Math.random() * 11);
        console.log(random)
        $("#randomNumber").text(random);
        var ametist = Math.floor(Math.random() * 11);
        var emerald = Math.floor(Math.random() * 11);
        var rubin = Math.floor(Math.random() * 11);
        var safir = Math.floor(Math.random() * 11);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }

    function youWin() {
        alert("You Won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }
    function youLose() {
        alert ("You Lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
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
    })
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
    })
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
    })
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

});