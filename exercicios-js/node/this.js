console.log(this === global) //false, pois aponta para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // true
}

logThis()

// Dentro da função o this irá apontar para o global
// E Dentro do modulo o this estará apontando para o module.exports