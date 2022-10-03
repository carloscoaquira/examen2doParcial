class presupuesto{
    constructor(monto){
        this._monto = monto;

    }


}
const containerMontoEgreso = document.querySelector('#containerEgresos');
const containerMontoIngreso = document.querySelector('#containerIngresos');

function crearElemento(tipo, description, monto){
    if(tipo == 'egreso'){
        let container = document.createElement('DIV');
        let itemMonto = `<div class="row border border-danger mt-2 p-3">
            <div class="col-6">${description}</div>
            <div class="col-6 text-right text-danger"> - ${monto}</div>
        </div>`;
        container.innerHTML = itemMonto;
        containerMontoEgreso.appendChild(container);
    }else if(tipo == 'ingreso'){
        let container = document.createElement('DIV');
        let itemMonto = `<div class="row border border-primary mt-2 p-3">
            <div class="col-6">${description}</div>
            <div class="col-6 text-right text-primary"> + ${monto}</div>
        </div>`;
        container.innerHTML = itemMonto;
        containerMontoIngreso.appendChild(container);
    }
}

function agregarDato(){
    let formPresupuesto = document.forms['form-presupuesto'];
    let tipo = formPresupuesto['tipoMonto'].value;
    let description = formPresupuesto['descriptionMonto'].value;
    let valor = formPresupuesto['valorMonto'].value;
    if(description != '' && valor != ''){
        if(tipo == 'egreso'){
            crearElemento(tipo, description, valor);
            console.log('egreso'+tipo, description,  valor);
        }else if(tipo == 'ingreso'){
            crearElemento(tipo, description, valor);
            console.log('ingreso'+tipo, description,  valor);
        }
    }
}

function generarError(){
    let bodyPrincipal = document.querySelector('body');
    let containerDiv = document.createElement('DIV');
    containerDiv.classList.add('elementoImportanteMensaje');
    let mensaje = document.createTextNode('Lo siento el Navegador no es compatible con Sesion storage');
    console.log(typeof containerDiv)
    containerDiv.appendChild(containerDiv.appendChild(mensaje));
    bodyPrincipal.appendChild(containerDiv);
}

function main(){

}

if (typeof(Storage) !== 'undefined') {
    main();
} else {
    generarError();
}