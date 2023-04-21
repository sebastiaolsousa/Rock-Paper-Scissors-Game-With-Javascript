var prock = document.getElementById('player-rock')
var ppaper = document.getElementById('player-paper')
var pscissors = document.getElementById('player-scissors')
var orock = document.getElementById('opponent-rock')
var opaper = document.getElementById('opponent-paper')
var oscissors = document.getElementById('opponent-scissors')
var res = []

function opponentplay() {
    var opplay = ["rock", "paper", "scissor"]
    var randomplay = Math.floor(Math.random() * opplay.length);
    var randomres = opplay[randomplay]
    if (randomresv == 0){
        res.push = "rock"
        orock.style.transform = 'translate(-10px, -10px)'
        orock.style.opacity = '0'
        setTimeout(function() {
            orock.src = 'images/rock-250px.png'
            orock.style.opacity = '1'
        }, 500)
    }
    if (randomresv == 1){
        res.push = "paper"
        opaper.style.transform = 'translate(-10px, -10px)'
        opaper.style.opacity = '0'
        setTimeout(function() {
            opaper.src = 'images/paper-250px.png'
            opaper.style.opacity = '1'
        }, 500)
    }
    if (randomresv == 2){
        res.push = "scissors"
        oscissors.style.transform = 'translate(-10px, -10px)'
        oscissors.style.opacity = '0'
        setTimeout(function() {
            oscissors.src = 'images/scissor-250px.png'
            oscissors.style.opacity = '1'
        }, 500)
    }
}

function play(choice){
    switch(choice) {
        case 'rock':
            res.push = "rock"
            prock.style.transform = 'translate(-10px, -10px)'
            opponentplay()
            break
        case 'paper':
            res.push = "paper"
            ppaper.style.transform = 'translate(-10px, -10px)'
            opponentplay()
            break
        case 'scissors':
            res.push = "scissors"
            pscissors.style.transform = 'translate(-10px, -10px)'
            opponentplay()
            break
    }
}