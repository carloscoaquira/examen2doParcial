class Tiendas{
    static contadorTiendas = 0;

    constructor(direccion, telefono, descripcion, nit, email){
        this._idTienda = ++Tiendas.contadorTiendas;
        this._direccion = direccion;
        this._telefono = telefono;
        this._descripcion = descripcion;
        this._nit = nit;
        this._email = email;
    }

    get idTienda(){
        return this._idTienda;
    }

    get direccion(){
        return this._direccion;
    }
    set direccion(direccion){
        this._direccion = direccion;
    }

    get telefono(){
        return this._telefono;
    }   
    set telefono(telefono){
        return this._telefono = telefono;
    }

    get descripcion(){
        return this._descripcion;
    }   
    set descripcion(descripcion){
        return this._descripcion = descripcion;
    }

    get nit(){
        return this._nit;
    }   
    set nit(nit){
        return this._nit = nit;
    }

    get email(){
        return this._email;
    }   
    set email(email){
        return this._email = email;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._direccion}, precio: $${this._telefono} nombre: ${this._descripcion}, precio: $${this._nit} , precio: $${this._email}`;
    }
}

const totalTiendas = [
    new Tiendas('Santa cruz', 12314142, 'esto es una tienda XD', 31412, 'ejemplo@gmail.com'),
    new Tiendas('La paz', 896786, 'esto es una nueva tienda', '2382mnfasjf', 'carlos@gmail.com')
];

const cargarTiendas = ()=>{
    let tiendaHTML = '';
    for(let tienda of totalTiendas){
        tiendaHTML += crearTiendaHTML(tienda);
    }
    document.getElementById('containerTiendas').innerHTML = tiendaHTML;
}

const crearTiendaHTML = (tienda)=>{
    let ingresoHTML = `
    <div class="bg-info mt-3 p-3 text-white">
        <div class="row">
            <div class="col-1">Id: ${tienda.idTienda}</div>
            <div class="col-3">Direccion: ${tienda.direccion}</div>
            <div class="col-4">Telefono: ${tienda.telefono}</div>
            <div class="col-4">NIT: ${tienda.nit}</div>
        </div>
        <div class="row">
            <div class="col-6">${tienda.descripcion}</div>
            <div class="col-4">${tienda.email}</div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

let agregarTienda = ()=>{
    let formulario = document.forms['form-tienda'];
    let direccion = formulario['direccion'];
    let telefono = formulario['telefono'];
    let descripcion = formulario['descripcion'];
    let nit = formulario['nit'];
    let email = formulario['email'];
    totalTiendas.push( new Tiendas(direccion.value, telefono.value, descripcion.value, nit.value, email.value));
    cargarTiendas();
}
cargarTiendas();