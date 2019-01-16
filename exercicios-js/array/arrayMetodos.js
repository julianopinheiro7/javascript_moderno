const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

// Metodo pop() remove o ultimo elemento do array.
pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)

// Metodo push() adiciona um dado ao array. 
pilotos.push('Verstappen')
console.log(pilotos)

// Metodo shift() remove o primeiro elemento do array.
pilotos.shift()
console.log(pilotos)

// Metodo unshift() adiciona um elemento no inicio do array.
pilotos.unshift('Hamilton')
console.log(pilotos)

// Metodo splice pode adicionar e remover elementos.
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa' )
console.log(pilotos)

// remover 
pilotos.splice(3, 1) // massa qubrou :()
console.log(pilotos)

// Metodo slice() retorna um novo array a partir da posição informada.
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Indice 4 não entra.
console.log(algunsPilotos2)