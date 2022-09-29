class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }   
    set marca(marca){
        return this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}, del tipo de entrada: ${this.tipoEntrada} y la marca: ${this.marca}`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, del tipo de entrada: ${this.tipoEntrada} y la marca: ${this.marca}`;
    }
}

//class Monitor

class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }   
    set marca(marca){
        return this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
       return `idMonitor: ${this._idMonitor}, de la marca: ${this.marca} y tamaño: ${this._tamaño}`;
    }
}


class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }   
    set nombre(nombre){
        return this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }   
    set monitor(monitor){
        return this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }   
    set teclado(teclado){
        return this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }   
    set raton(raton){
        return this._raton = raton;
    }

    toString(){
        return `Computadora: ${this._idComputadora}, ${this._nombre}
        Monitor: { ${this._monitor.toString()} },
        teclado: { ${this._teclado.toString()} },
        raton: { ${this._raton.toString()} },
        `;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        this._productos.push(producto);
    }

    mostrarOrden(){
        let productosOrden = '';
        for( let producto of this._productos){
            productosOrden += '\n' + producto.toString();
        }
        console.log(`Orden: ${this._idOrden} Productos: 
        ${productosOrden} `);
    }
}


let raton1 = new Raton("blutu", "MSI");
let raton2 = new Raton("inalambrico", "MSI");
let raton3 = new Raton("blutu", "reddragon");
let raton4 = new Raton("inalambrico", "Hyperx");


let teclado1 = new Teclado("blutu", "MSI");
let teclado2 = new Teclado("inalambrico", "MSI");
let teclado3 = new Teclado("blutu", "reddragon");
let teclado4 = new Teclado("inalambrico", "Hyperx");


let Monitor1 = new Monitor("blutu", "XL");
let Monitor2 = new Monitor("inalambrico", "M");
let Monitor3 = new Monitor("blutu", "XS");
let Monitor4 = new Monitor("inalambrico", "L");


let computadora1 = new Computadora("Anastasia", Monitor1, teclado1, raton1);
let computadora2 = new Computadora("Anastasia", Monitor2, teclado2, raton2);
let computadora3 = new Computadora("Anastasia", Monitor3, teclado3, raton3);
let computadora4 = new Computadora("Anastasia", Monitor4, teclado4, raton4);
let computadora5 = new Computadora("Anastasia", Monitor1, teclado2, raton3);
let computadora6 = new Computadora("Anastasia", Monitor2, teclado4, raton1);
 

let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarProducto(computadora1);
orden1.agregarProducto(computadora2);
orden1.agregarProducto(computadora3);

orden1.mostrarOrden();

orden2.agregarProducto(computadora1);
orden2.agregarProducto(computadora2);
orden2.agregarProducto(computadora3);
orden2.agregarProducto(computadora4);

orden2.mostrarOrden();