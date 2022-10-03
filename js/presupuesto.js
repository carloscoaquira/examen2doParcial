function generarError(){
    let containerDiv = document.createElement('DIV');
    let mensajeDiv = document.createElement('P');
    mensajeDiv.innerHTML = 'Ups! surgio un problema es necesario un monto inicial';
    containerDiv.classList.add('elementoImportanteMensaje');
    containerDiv.appendChild(mensajeDiv);
    return containerDiv;
}
document.addEventListener('DOMContentLoaded', () =>{
    let bodyPrincipal = document.querySelector('body');
    let montoInicial = +(prompt('Cual es tu presupuesto inicial ?'));
    if(montoInicial == 0 || isNaN(montoInicial)){
        let containerDiv = generarError();
        bodyPrincipal.appendChild(containerDiv);
    }
});