function factorial(n) {
    let resultado = 1;
    while (n > 0) {
      resultado *= n;
    n--;
    }
    return resultado;
}

const factorial_10 = factorial(10);
console.log(factorial_10);
