const sequencia = {
    _valor: 1,  // convenção para pretensão de acesso interno da variavel
    get valor() { return this._valor++ },
    set valor(valor) {

        //validação para não voltar a sequencia para um numero anterior.
        if(valor > this._valor) {
            this._valor = valor
        }        
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)