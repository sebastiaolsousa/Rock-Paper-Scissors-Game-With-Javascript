var prock = document.getElementById('player-rock');
var ppaper = document.getElementById('player-paper');
var pscissors = document.getElementById('player-scissors');
var orock = document.getElementById('opponent-rock');
var opaper = document.getElementById('opponent-paper');
var oscissors = document.getElementById('opponent-scissors');
var vs = document.getElementById('vs')
var res = [];
res.length = 2;

function reset() {
    prock.style.transform = '';
    prock.style.border = '';
    ppaper.style.transform = '';
    ppaper.style.border = '';
    pscissors.style.transform = '';
    pscissors.style.border = '';
    orock.style.transform = '';
    orock.style.border = '';
    orock.src = 'images/question-mark-250px.png';
    opaper.style.transform = '';
    opaper.style.border = '';
    opaper.src = 'images/question-mark-250px.png';
    oscissors.style.transform = '';
    oscissors.style.border = '';
    oscissors.src = 'images/question-mark-250px.png';
    res = []
}

function opponentplay() {
    var opplay = ["rock", "paper", "scissors"];
    var randomplay = Math.floor(Math.random() * opplay.length);
    var randomres = opplay[randomplay];
    if (randomres == "rock"){
        res.push[1] = "rock";
        orock.style.transform = 'translate(0px, -7px)';
        orock.style.border = '5px solid lightcoral';
        orock.style.opacity = '0';
        setTimeout(function() {
            orock.src = 'images/rock-250px.png';
            orock.style.opacity = '1';
        }, 500)
    }
    if (randomres == "paper"){
        res.push[1] = "paper";
        opaper.style.transform = 'translate(0px, -7px)';
        opaper.style.border = '5px solid lightcoral';
        opaper.style.opacity = '0';
        setTimeout(function() {
            opaper.src = 'images/paper-250px.png';
            opaper.style.opacity = '1';
        }, 500)
    }
    if (randomres == "scissors"){
        res.push[1] = "scissors";
        oscissors.style.transform = 'translate(0px, -7px)';
        oscissors.style.border = '5px solid lightcoral';
        oscissors.style.opacity = '0';
        setTimeout(function() {
            oscissors.src = 'images/scissor-250px.png';
            oscissors.style.opacity = '1';
        }, 500)
    }
}

function play(choice){
    reset()
    switch(choice) {
        case 'rock':
            res.push[0] = "rock"
            prock.style.transform = 'translate(0px, +7px)'
            prock.style.border = '5px solid skyblue';
            opponentplay()
            if (res[0] == "rock" && res[1] == "scissors") {
                vs.style.backgroundColor = 'rgb(70, 142, 236)'
            }
            break
        case 'paper':
            res.push[0] = "paper"
            ppaper.style.transform = 'translate(0px, +7px)'
            ppaper.style.border = '5px solid skyblue';
            opponentplay()
            break
        case 'scissors':
            res.push[0] = "scissors"
            pscissors.style.transform = 'translate(0px, +7px)'
            pscissors.style.border = '5px solid skyblue';
            opponentplay()
            break
    }
}

console.log(res);
console.log(res[0]);
console.log(res[1]);
console.log(vs);