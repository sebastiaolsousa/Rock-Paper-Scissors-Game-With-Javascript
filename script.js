var prock = document.getElementById('player-rock');
var ppaper = document.getElementById('player-paper');
var pscissors = document.getElementById('player-scissors');
var pchoose = document.getElementById('choose-move-player')
var orock = document.getElementById('opponent-rock');
var opaper = document.getElementById('opponent-paper');
var oscissors = document.getElementById('opponent-scissors');
var ochoose = document.getElementById('choose-move-opponent')
var vs = document.getElementById('vs-text')
var res = [];

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
    res.length = 0;
}

function opponentplay() {
    var opplay = ["rock", "paper", "scissors"];
    var randomplay = Math.floor(Math.random() * opplay.length);
    var randomres = opplay[randomplay];
    if (randomres == "rock"){
        res.push("rock");
        orock.style.transform = 'translate(0px, -7px)';
        orock.style.border = '5px solid lightcoral';
        orock.style.opacity = '0';
        ochoose.textContent = `Your opponent chose: ${randomres}!`;
        setTimeout(function() {
            orock.src = 'images/rock-250px.png';
            orock.style.opacity = '1';
        }, 500)
    }
    if (randomres == "paper"){
        res.push("paper");
        opaper.style.transform = 'translate(0px, -7px)';
        opaper.style.border = '5px solid lightcoral';
        opaper.style.opacity = '0';
        ochoose.textContent = `Your opponent chose: ${randomres}!`;
        setTimeout(function() {
            opaper.src = 'images/paper-250px.png';
            opaper.style.opacity = '1';
        }, 500)
    }
    if (randomres == "scissors"){
        res.push("scissors");
        oscissors.style.transform = 'translate(0px, -7px)';
        oscissors.style.border = '5px solid lightcoral';
        oscissors.style.opacity = '0';
        ochoose.textContent = `Your opponent chose: ${randomres}!`;
        setTimeout(function() {
            oscissors.src = 'images/scissor-250px.png';
            oscissors.style.opacity = '1';
        }, 500)
    }
}

function play(choice){
    res.length = 2;
    reset();
    switch(choice) {
        case 'rock':
            res.push("rock");
            prock.style.transform = 'translate(0px, +7px)';
            prock.style.border = '5px solid skyblue';
            pchoose.textContent = `You chose: ${choice}! Try choosing again!`;
            opponentplay();
            break
        case 'paper':
            res.push("paper");
            ppaper.style.transform = 'translate(0px, +7px)';
            ppaper.style.border = '5px solid skyblue';
            pchoose.textContent = `You chose: ${choice}! Try choosing again!`;
            opponentplay();
            break
        case 'scissors':
            res.push("scissors");
            pscissors.style.transform = 'translate(0px, +7px)';
            pscissors.style.border = '5px solid skyblue';
            pchoose.textContent = `You chose: ${choice}! Try choosing again!`;
            opponentplay();
            break
    }
    if (res[0] == "rock" && res[1] == "scissors") {
        document.body.style.backgroundColor = 'skyblue'
        vs.innerHTML = ("You won!")
    } else if (res[0] == "rock" && res[1] == "paper") {
        document.body.style.backgroundColor = 'lightcoral'
        vs.innerHTML = ("You lose!")
    } else if (res[0] == "paper" && res[1] == "rock"){
        document.body.style.backgroundColor = 'skyblue'
        vs.innerHTML = ("You won!")
    } else if (res[0] == "paper" && res[1] == "scissors"){
        document.body.style.backgroundColor = 'lightcoral'
        vs.innerHTML = ("You lose!")    
    } else if (res[0] == "scissors" && res[1] == "paper"){
        document.body.style.backgroundColor = 'skyblue'
        vs.innerHTML = ("You won!")
    } else if (res[0] == "scissors" && res[1] == "rock"){
        document.body.style.backgroundColor = 'lightcoral'
        vs.innerHTML = ("You lose!")
    } else {
        document.body.style.backgroundColor = 'lightslategray'
        vs.innerHTML = ("Draw!")
    }
}