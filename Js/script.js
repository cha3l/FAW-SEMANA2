window.onload = () => {
    calcularExp();
    calcularGf();
    mostrarnombres();
}
let basen;
let expn;
var listanombres = [];
let ej3numn;
var listanums = [];
let eje7col;

function getDEj1() {
    basen = parseInt(document.getElementById("ej1base").value);
    expn = parseInt(document.getElementById("ej1exp").value);
}

function calcularExp() {
    getDEj1(); // Actualizar los valores de basen y expn
    let resultado = Math.pow(basen, expn);
    document.getElementById("respej1").textContent = `Resultado: ${resultado}`;
}

let centn;

function getDej2() {
    centn = parseInt(document.getElementById("ej2gc").value)
}

function calcularGf() {
    getDej2();
    let resultado = (centn * (9 / 5)) + 32;
    document.getElementById("respej2").textContent = `°F: ${resultado}`;

}

function addname() {
    let nombre = document.getElementById("ej3add").value;
    listanombres.push(nombre);
    mostrarnombres();
}

function mostrarnombres() {
    let ul = document.getElementById("listadoname");
    let htmldata = "";
    listanombres.forEach(x => {
        htmldata += ` <li> ${x} </li>`;
    });
    ul.innerHTML = htmldata;
}

function getDEj3() {
    ej3numn = parseInt(document.getElementById("ej3num").value);
}

function filtro() {
    getDEj3();
    let ul = document.getElementById("filtradoname");
    let htmldata = "";
    listanombres.forEach(x => {
        if (x.length === ej3numn) {
            htmldata += ` <li> ${x} </li>`;
        }
    });
    ul.innerHTML = htmldata;

}

function calcedad() {

    let fechaNacimiento = new Date(document.getElementById('fechanac').value);
    let fechaActual = new Date();
    let edadEnAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    document.getElementById('edad').innerHTML = 'Edad: ' + edadEnAnios + ' años';
}

function calcnopal() {
    let hilera = document.getElementById("hilera").value;
    let palabras = hilera.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });
    document.getElementById("palabrasn").innerText = "Número de palabras: " + palabras.length;
}


function addnums() {
    let numero = parseInt(document.getElementById("ej6num").value);
    listanums.push(numero);
    mostrarnums();
}

function mostrarnums() {
    let ul = document.getElementById("listadonum");
    let htmldata = "";
    listanums.forEach(x => {
        htmldata += ` <li> ${x} </li>`;
    });
    ul.innerHTML = htmldata;
}

function calcprom() {
    let promedio = 0;
    if (listanums.length > 0) {
        let suma = listanums.reduce((total, numero) => total + numero, 0);
        promedio = suma / listanums.length;
    }
    document.getElementById("promedion").innerText = "Promedio: " + promedio.toFixed(2);
}

function getDej7 (){
    eje7col =document.getElementById("colorej7").value;                                                                                                                      
}

function agregarcolor(){
    getDej7();
    let cuadro = document.getElementById("cuadrocolor")
    let color = eje7col;
    cuadro.style.backgroundColor = color;
}