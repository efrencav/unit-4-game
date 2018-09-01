//Global variables that are accesible for all
crystals = ["../images/red.png", "../images/blue.png", "../images/green.png", "../images/yellow.png"];
var counter = 0;
var wins = 0;
var losses = 0;
//wins and losses counter
$("#win").text(wins);
$("#losses").text(losses);
//Players current score
var addition = 0;

//Selecting a random number
var total = Math.floor(Math.random() * 10 + 1);
$(".total").empty();
$(".total").append(total);

//Assign a random number to each crystals
var red = Math.floor(Math.random() * 100 + 1);
var blue = Math.floor(Math.random() * 100 + 1);
var green = Math.floor(Math.random() * 100 + 1);
var yellow = Math.floor(Math.random() * 100 + 1);

//Appending the addition in the HTML
var updateAddition = function(){
        $(".addition").empty();
        $(".addition").append(addition);
        $("#wins").empty();
        $(".#wins").append(wins);
        $("#losses").empty();
        $("#losses").append(losses);
}

//Restarting the function can be achieved as follow
var restart = function(){
        addition = 0;
        total = Math.floor(Math.random()* 100 + 1);
        $(".total").empty();
        $(".total").append(total);
        red = Math.floor(Math.random() * 100 + 1);
        blue = Math.floor(Math.random() * 100 + 1);
        green = Math.floor(Math.random() * 100 + 1);
        yellow = Math.floor(Math.random() * 100 + 1);
        updateAddition();
}

//Wins and losses
var winsLosses = function(){
        if(addition === total) {
            wins++;
            alert("Yeah, Motha Fucka! YOU WIN!!!");
            restart();
        } else if(addition > total){
            losses++;
            alert("Bitch, YOU SUCK!!!");
            restart();
        }else {
            updateAddition();
        }
}
$(".addition").append(total);
$(".addition").append(addition);

//The onclick
$(document).ready(function(){
    $("#red").click(function(){
        addition + red;
        winsLosses();
    })
$(document).ready(function(){
    $("#blue").click(function(){
        addition + blue;
        winsLosses();
    })
$(document).ready(function(){
    $("#green").click(function(){
        addition + green;
        winsLosses();
    })
$(document).ready(function(){
    $("#yellow").click(function(){
        addition + yellow;
        winsLosses();
    })     

});
