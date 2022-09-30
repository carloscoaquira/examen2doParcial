class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get idPersona(){
        return this._idPersona;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }
    get apellido(){
        return this._apellido;
    }


    addPersona(){
        let elementoLista = document.createElement('li');
        let itemPersona = `${this._idPersona}: ${this._nombre} ${this._apellido}`;
        elementoLista.innerHTML = itemPersona;
        return elementoLista;
    }

}

const listaContenido = document.querySelector('#list-content');
const fomularioLista = document.querySelector('#form-lista');

fomularioLista.addEventListener('submit', (event) => {
    event.preventDefault();
    let nombrePersona = fomularioLista['nombrePersona'].value;
    let apellidoPersona = fomularioLista['apellidoPersona'].value;
    if(nombrePersona != ''){
        document.querySelector('.Listado-error').innerHTML = " ";
        let itemPersona = new Persona(nombrePersona, apellidoPersona);
        listaContenido.appendChild(itemPersona.addPersona()); 
    }else{
        document.querySelector('.Listado-error').innerHTML = "debe tener nombre";
    }
});