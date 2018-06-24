const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcao = e => e
    const filtroMulher = e => {
        if (e.genero == 'F' && e.pais == 'China') {
            return e
        }
    }
    
    let mulheres = funcionarios.map(funcao).filter(filtroMulher)
    let menorSalario = mulheres.map(e => e.salario).reduce(function(menor, atual) {
        if (menor > atual) {
            menor = atual
        }
        return menor
    })
    let resultado = mulheres.filter(e => {
        if (e.salario == menorSalario) {
            return e
        }
    })
    console.log(resultado)
})