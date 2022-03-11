const field = document.querySelector('.field');
const squares = document.getElementsByClassName('square');
let turn = 0;
let result = '';

field.addEventListener('click', event => {
    if (event.target.className === 'square') {
        if (turn % 2 === 0) {
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = '0';
        }
        turn++;
        checkWin();
    }
})

const checkWin = () => {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
        if (squares[winConditions[i][0]].innerHTML === 'X' && squares[winConditions[i][1]].innerHTML === 'X' && squares[winConditions[i][2]].innerHTML === 'X') {
            result = 'tic';
            alertResult(result);
        } else if (squares[winConditions[i][0]].innerHTML === '0' && squares[winConditions[i][1]].innerHTML === '0' && squares[winConditions[i][2]].innerHTML === '0') {
            result = 'tac';
            alertResult(result);
        }
    }
}

function alertResult(winner) {
    console.log(winner);
}