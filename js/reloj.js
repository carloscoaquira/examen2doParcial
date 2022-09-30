const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
};

const mostrarReloj = ()=> {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.querySelector('#hora').innerHTML = `${hr}: ${min}: ${seg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',  'Viernes', 'Sabado'];

    let dia = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let Año = fecha.getFullYear();

    let textoFecha = `${dia}, ${mes} del  ${Año}`
    document.querySelector('#fecha').innerHTML = textoFecha;
};


setInterval(mostrarReloj, 1000);