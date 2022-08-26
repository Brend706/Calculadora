window.addEventListener('load', ()=> {
    const screen = document.querySelector('.calculator__screen');
    const button = document.getElementsByClassName('button');
    const screenResult = document.querySelector('.screen-result');
    const buttonsArray = Array.from(button);

    buttonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            calculator(button, screen, screenResult); 
        });
    });
});

function calculator(button, screen, screenResult){
    switch (button.innerHTML){
        case 'DELETE':
            borrar(screen, screenResult);
            break;
        case 'RESULT':
            calcular(screen, screenResult);
            break;
        case '%':
            porcentaje(screen, screenResult, button)
        default:
            actualizar(screen, button);
            break;
    }
}

function calcular(screen, screenResult){
    screenResult.innerHTML = eval(screen.innerHTML);
}
    

function actualizar(screen, button){
    if(screen.innerHTML == 0){
        screen.innerHTML = "";
    }
    screen.innerHTML += button.innerHTML;
}

function borrar(screen, screenResult){
    screen.innerHTML = "0";
    screenResult.innerHTML = "=";
}

function porcentaje(screen, screenResult, button){
    screenResult.innerHTML = +screen.innerHTML * 0.01;
}