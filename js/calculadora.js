class Operaciones{

    sumar(num1, num2){
        return num1 + num2;
    }
    restar(num1, num2){
        return num1 - num2;
    }
    multiplicar(num1, num2){
        return num1 * num2;
    }
    dividir(num1, num2){
        return num1 / num2;
    }
}
const calculadora = new Operaciones();
const containerCalculadora = document.querySelector('#calculadora');
let valorInicial = document.querySelector('#valorInicial');
let valorFinal = document.querySelector('#valorFinal');
containerCalculadora.addEventListener('click', e => {
    if(e.target.tagName == 'BUTTON'){
        let btn = e.target;
        if(btn.value == 'numero'){
            if(valorFinal.innerHTML == 0 || valorFinal.innerHTML == null){
                valorFinal.innerHTML = btn.innerHTML;
            }else{
                valorFinal.innerHTML += btn.innerHTML;
            }
        }
        if(btn.value == 'operador'){
            if(!valorFinal.innerHTML == 0){
                let primeraVariable = valorFinal.innerHTML;
                valorInicial.innerHTML = `${primeraVariable} ${btn.innerHTML}`;
                valorFinal.innerHTML = "";
            }
        }
        if(btn == 'resultado'){}
    }
});