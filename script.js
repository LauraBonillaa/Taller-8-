const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function numerosMenoresQue8(arreglo) {
    return arreglo.filter(numero => numero < 8);
}

function numerosMayoresoigualesa8(arreglo) {
    return arreglo.filter(numero => numero >= 8);
}

function contarElementos(arreglo) {
    return arreglo.length;
}

const numerosMenores = numerosMenoresQue8(fibonacci);
const numerosMayoresOIguales =  numerosMayoresoigualesa8(fibonacci);
const numeroElementos = contarElementos(fibonacci);

console.log("Números menores que 8:", numerosMenores);
console.log("Números mayores o iguales que 8:", numerosMayoresOIguales);
console.log("Número total de elementos:", numeroElementos);

document.getElementById("numeros-menores").innerText = `Existen ${numerosMenores.length} números menores que 8`;
document.getElementById("numeros-mayores").innerText = `Existen ${numerosMayoresOIguales.length} números mayores o iguales que 8`;
