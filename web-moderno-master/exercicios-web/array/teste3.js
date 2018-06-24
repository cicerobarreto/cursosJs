Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const objeto = json => JSON.parse(json)
const preco  = objeto => objeto.preco
let resultado1 = carrinho.map(objeto).map(preco)
console.log(resultado1)

let resultado2 = carrinho.map2(objeto).map2(preco)
console.log(resultado2)