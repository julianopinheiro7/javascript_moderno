console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'

//adicionar um novo elemento
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
// Ordena os dados do array e move as posicoes vazias para o final
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

// Metodo splice para incluir dados, excluir por indice
// Primeiro Parametro é o indice
// Qtde de elementos que quer excluir a partir do indice informado no primeiro parametro

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 1)
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)