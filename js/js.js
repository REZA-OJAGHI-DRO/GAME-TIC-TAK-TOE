let box = document.querySelectorAll('.box')
let turn = document.getElementById('Turn')
let game = document.getElementById('game')
let gameEnd = document.getElementById('gameEnd')
let gameStart = document.getElementById('gameStart')
let back = document.getElementById('back')
let tie = document.getElementById('tie')
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let playX = document.getElementById('playX')
let playO = document.getElementById('playO')
let resume = document.getElementById('resume')
let flag3 = 0
let x = 1
let myLocal1 = JSON.parse(localStorage.getItem('myData1'))
let myLocal2 = JSON.parse(localStorage.getItem('myData2'))
let myLocal3 = JSON.parse(localStorage.getItem('myData3'))
const db=[]
box.forEach((val) => {
    val.addEventListener('click', (e) => {
        if (val.getAttribute('data-status') == 'off') {
            val.setAttribute('data-status', 'on')
            val.setAttribute('data-tie', 'on')
            if (x % 2) {
                e.target.innerHTML = 'X'
                e.target.style.color = 'white'
                turn.innerHTML = 'O'
                turn.style.color = 'white'
                e.target.setAttribute("data-game", 'x')
                
            } else {
                e.target.innerHTML = 'O'
                e.target.style.color = 'white'
                turn.innerHTML = 'X'
                turn.style.color = 'white'
                e.target.setAttribute("data-game", 'o')
            }
            x++
            _check()
        }
    })
})

function _check(){
      box.forEach((val, i)=>{
            db[i] = val.getAttribute('data-game')
        })
        if (
            db[0]==db[1] && db[1]==db[2] && db[0]!='m'
            ) {
        box[0].style.color = 'aqua'
        box[1].style.color = 'aqua'
        box[2].style.color = 'aqua'
        if(db[0]=='x'){
            _player1()
        }else if(db[0]=='o'){
            _player2()
        }
    }  else if (
        db[3]==db[4] && db[4]==db[5] && db[3]!='m'
    ) {
        box[3].style.color = 'aqua'
        box[4].style.color = 'aqua'
        box[5].style.color = 'aqua'
        if(db[3]=='x'){
            _player1()
        }else if(db[3]=='o'){
            _player2()
        }
    }  else if (
        db[6]==db[7] && db[7]==db[8] && db[6]!='m'
    ) {
        box[6].style.color = 'aqua'
        box[7].style.color = 'aqua'
        box[8].style.color = 'aqua'
        if(db[6]=='x'){
            _player1()
        }else if(db[6]=='o'){
            _player2()
        }
    } else if (
        db[0]==db[3] && db[3]==db[6] && db[0]!='m'
    ) {
        box[0].style.color = 'aqua'
        box[3].style.color = 'aqua'
        box[6].style.color = 'aqua'
        if(db[0]=='x'){
            _player1()
        }else if(db[0]=='o'){
            _player2()
        }
    } else if (
        db[1]==db[4] && db[4]==db[7] && db[1]!='m'
    ) {
        box[1].style.color = 'aqua'
        box[4].style.color = 'aqua'
        box[7].style.color = 'aqua'
        if(db[1]=='x'){
            _player1()
        }else if(db[1]=='o'){
            _player2()
        }
    }  else if (
        db[2]==db[5] && db[5]==db[8] && db[2]!='m'
    ) {
        box[2].style.color = 'aqua'
        box[5].style.color = 'aqua'
        box[8].style.color = 'aqua'
        if(db[2]=='x'){
            _player1()
        }else if(db[2]=='o'){
            _player2()
        }
    }  else if (
        db[0]==db[4] && db[4]==db[8] && db[0]!='m'
    ) {
        box[0].style.color = 'aqua'
        box[4].style.color = 'aqua'
        box[8].style.color = 'aqua'
        if(db[0]=='x'){
            _player1()
        }else if(db[0]=='o'){
            _player2()
        }
    } else if (
        db[2]==db[4] && db[4]==db[6] && db[2]!='m'
    ) {
        box[2].style.color = 'aqua'
        box[4].style.color = 'aqua'
        box[6].style.color = 'aqua'
        if(db[2]=='x'){
            _player1()
        }else if(db[2]=='o'){
            _player2()
        }
    } 
    // ********************************************************************* 
    if (
        box[0].getAttribute('data-tie') == 'on' &
        box[1].getAttribute('data-tie') == 'on' &
        box[2].getAttribute('data-tie') == 'on' &
        box[3].getAttribute('data-tie') == 'on' &
        box[4].getAttribute('data-tie') == 'on' &
        box[5].getAttribute('data-tie') == 'on' &
        box[6].getAttribute('data-tie') == 'on' &
        box[7].getAttribute('data-tie') == 'on' &
        box[8].getAttribute('data-tie') == 'on'
    ) {
        _tie()
        setTimeout(() => {
            game.style.scale = 0

        }, 500);
    }
}

function _player1() {
    myLocal1++
    player1.innerHTML = myLocal1
    localStorage.setItem('myData1', JSON.stringify(myLocal1))
    setTimeout(() => {
        game.style.scale = 0
    }, 500);
    playX.style.color = 'aqua'
    box.forEach((val) => {
        val.setAttribute('data-status', 'on')
        val.setAttribute('data-tie', 'off')
    })
}

function _player2() {
    myLocal2++
    player2.innerHTML = myLocal2
    localStorage.setItem('myData2', JSON.stringify(myLocal2))
    setTimeout(() => {
        game.style.scale = 0
    }, 500);
    playO.style.color = 'aqua'

    box.forEach((val) => {
        val.setAttribute('data-status', 'on')
        val.setAttribute('data-tie', 'off')
    })
}

function _tie() {
    myLocal3++
    tie.innerHTML = myLocal3
    localStorage.setItem('myData3', JSON.stringify(myLocal3))
}


resume.addEventListener('click', () => {
    gameStart.style.scale = 0
    player1.innerHTML = myLocal1
    player2.innerHTML = myLocal2
    tie.innerHTML = myLocal3
})

function playAgain() {
    box.forEach((val) => {
        playX.style.color = 'white'
        playO.style.color = 'white'
        game.style.scale = 1
        val.setAttribute('data-status', 'off')
        val.setAttribute('data-game', 'm')
        val.setAttribute('data-tie', 'off')
        val.innerHTML = ''
        val.style.color = ''
        turn.innerHTML = ''
        turn.style.color = ''
    })
}

function NewGame() {
    box.forEach((val) => {
        gameStart.style.scale = 0
        val.setAttribute('data-status', 'off')
        val.setAttribute('data-game', 'm')
        val.setAttribute('data-tie', 'off')
        val.innerHTML = ''
        val.style.color = ''
        turn.innerHTML = ''
        player2.innerHTML = 0
        player1.innerHTML = 0
        tie.innerHTML = 0
        localStorage.setItem('myData1', JSON.stringify(0))
        myLocal1 = 0
        localStorage.setItem('myData2', JSON.stringify(0))
        myLocal2 = 0
        localStorage.setItem('myData3', JSON.stringify(0))
        myLocal3 = 0
    })
}

back.addEventListener('click', () => {
    gameStart.style.scale = 1
})