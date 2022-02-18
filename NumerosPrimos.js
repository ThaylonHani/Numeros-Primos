//Jeito 1

Primos(12)

function Primos(limit) {
    for (let numero = 2; numero <= limit; numero++) {
        let primo = true;

        for (let divisao = 2; divisao < numero; divisao++) {
            if (numero % divisao === 0) {
                primo = false;
                break;
            }
        }
        if (primo) console.log(numero);
    }
};


// Jeito 2

numeros(17)

function numeros(limit) {
    for (let numero = 2; numero <= limit; numero++) {
        if (Soprimo(numero)) console.log(numero)
    }
};

function Soprimo(numero) {
    for (let divisao = 2; divisao < numero; divisao++) {
        if (numero % divisao === 0) {
            return false;

        }
    }
    return true;
}