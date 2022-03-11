const field = document.querySelector('.field');
let turn = 0;

field.addEventListener('click', event => {
    if(event.target.className === 'square')
    console.log(event.target);
})