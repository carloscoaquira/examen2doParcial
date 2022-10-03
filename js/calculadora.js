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
let primeraVariable = 0;
let segundaVariable = 0;
let valorOperacion = undefined ;
containerCalculadora.addEventListener('click', e => {
    if(e.target.tagName == 'BUTTON'){
        let btn = e.target;
        switch(btn.value){
            case 'numero':
                if(valorFinal.innerHTML == 0 || valorFinal.innerHTML == null){
                    valorFinal.innerHTML = btn.innerHTML;
                }else{
                    valorFinal.innerHTML += btn.innerHTML;
                }
                break;
            case 'operador':
                if(primeraVariable == 0 && valorOperacion == undefined){
                    primeraVariable = parseFloat(valorFinal.innerHTML);
                    valorOperacion = btn.dataset.operacion;
                    valorInicial.innerHTML = `${primeraVariable} ${btn.innerHTML}`;
                    valorFinal.innerHTML = " ";
                    console.log(primeraVariable,typeof valorOperacion);
                }else if(primeraVariable != 0 && valorOperacion != undefined){
                    segundaVariable = parseFloat(valorFinal.innerHTML);
                    if(!isNaN(primeraVariable) && !isNaN(segundaVariable)){
                        let resultadoInOperation = 0;
                        switch(valorOperacion){
                            case 'dividir':
                                resultadoInOperation = calculadora.dividir(primeraVariable, segundaVariable);
                                valorInicial.innerHTML = `${resultadoInOperation} ${btn.innerHTML}`;
                                primeraVariable = resultadoInOperation;
                                valorOperacion = btn.dataset.operacion;
                                valorFinal.innerHTML = " ";
                                segundaVariable = 0;
                                break;
                            case 'multiplicar':
                                resultadoInOperation = calculadora.multiplicar(primeraVariable, segundaVariable);
                                valorInicial.innerHTML = `${resultadoInOperation} ${btn.innerHTML}`;
                                primeraVariable = resultadoInOperation;
                                valorOperacion = btn.dataset.operacion;
                                valorFinal.innerHTML = " ";
                                segundaVariable = 0;
                                break;
                            case 'restar':
                                resultadoInOperation = calculadora.restar(primeraVariable, segundaVariable);
                                valorInicial.innerHTML = `${resultadoInOperation} ${btn.innerHTML}`;
                                primeraVariable = resultadoInOperation;
                                valorOperacion = btn.dataset.operacion;
                                valorFinal.innerHTML = " ";
                                segundaVariable = 0;
                                break;
                            case 'sumar':
                                resultadoInOperation = calculadora.sumar(primeraVariable, segundaVariable);
                                valorInicial.innerHTML = `${resultadoInOperation} ${btn.innerHTML}`;
                                primeraVariable = resultadoInOperation;
                                valorOperacion = btn.dataset.operacion;
                                valorFinal.innerHTML = " ";
                                segundaVariable = 0;
                                break;
                        }
                    }
                }
                break;
            case 'resultado':
                segundaVariable = parseFloat(valorFinal.innerHTML);
                if(!isNaN(primeraVariable) && !isNaN(segundaVariable)){
                    switch(valorOperacion){
                        case 'dividir':
                            valorInicial.innerHTML = " ";
                            valorFinal.innerHTML = `${calculadora.dividir(primeraVariable, segundaVariable)}`;
                            primeraVariable = 0;
                            segundaVariable = 0;
                            valorOperacion = undefined;
                            break;
                        case 'multiplicar':
                            valorInicial.innerHTML = " ";
                            valorFinal.innerHTML = `${calculadora.multiplicar(primeraVariable, segundaVariable)}`;
                            primeraVariable = 0;
                            segundaVariable = 0;
                            valorOperacion = undefined;
                            break;
                        case 'restar':
                            valorInicial.innerHTML = " ";
                            valorFinal.innerHTML = `${calculadora.restar(primeraVariable, segundaVariable)}`;
                            primeraVariable = 0;
                            segundaVariable = 0;
                            valorOperacion = undefined;
                            break;
                        case 'sumar':
                            valorInicial.innerHTML = " ";
                            valorFinal.innerHTML = `${calculadora.sumar(primeraVariable, segundaVariable)}`;
                            primeraVariable = 0;
                            segundaVariable = 0;
                            valorOperacion = undefined;
                            break;
                    }
                }
                break;
            case 'limpiar':
                valorInicial.innerHTML = " ";
                valorFinal.innerHTML = "0";
                primeraVariable = 0;
                segundaVariable = 0;
                valorOperacion = undefined;
                break;
            default:
                console.log(`Sorry, we are out of.`);
        }
    }
});