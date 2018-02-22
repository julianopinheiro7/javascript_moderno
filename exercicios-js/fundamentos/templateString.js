const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //Suporte quebra de linha.
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

//Função para tornar texto maiusculo.
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)
