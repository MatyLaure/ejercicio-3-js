function factorial(n) {
    var resultado = 1;
    var i = 1;
    while (true) {
      resultado *= i;
    if (i === n) {
        break;
    }
    i++;
    }
    return resultado;
}

var numero = 10;
var factorialDeDiez = factorial(numero);
console.log("El factorial de " + numero + " es: " + factorialDeDiez);
