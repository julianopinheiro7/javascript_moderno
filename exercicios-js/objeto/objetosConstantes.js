// pessoa -> endereco(123) -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Quando alterei de Joao para Pedro o endereço da constante continuou o mesmo,
// porém o dado pode ser alterado

// Se vc tentar apontar para outro endereço.
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)

