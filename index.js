const field = document.querySelector('.field');
let turn = 0;

field.addEventListener('click', event => {
    if(event.target.className === 'square') {
        if (turn % 2 === 0) {
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = '0';
        }
        turn++;
    }
    

})