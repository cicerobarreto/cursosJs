var posicao = window.innerHeight / 2
var topo = window.innerHeight
var interval = null
var div = document.querySelector('[wm-flappy]')
var iniciado = false

function montarPassaro() {
    const flappy = document.createElement('img')
    flappy.setAttribute('src', './imgs/passaro.png')
    flappy.classList.add('passaro')
    div.appendChild(flappy)
    div.style.position = 'absolute'
    div.style.top = `${posicao}px`
    div.style.left = `${window.innerWidth / 4}px`

}

function montarCano() {
    const canoDiv = document.createElement('div')
    canoDiv.classList.add('cano')
    canoDiv.style.position = 'absolute'
    canoDiv.style.top = `${window.innerHeight}px`
    canoDiv.style.left = `${window.innerWidth / 4}px`
    canoDiv.style.height = '50px'
    document.querySelector('body').appendChild(canoDiv)
}

const descer = (div) => {
    posicao = posicao + 4 > topo ? posicao : posicao + 4
    div.style.top = `${posicao}px`
}

const subir = (e) => {
    if (e.keyCode == 32 && iniciado) {
        posicao = posicao - 10 < 0 ? posicao : posicao - 10
        div.style.top = `${posicao}px`
    } 
}

function iniciarJogo(e) {
    if (!iniciado) { 
        iniciado = true
        console.log('inicia...');
        console.log(posicao)
        interval = setInterval(() => descer(div), 100)
    }
}
montarCano();
montarPassaro();
const start = document.querySelector('[start]')
const stop = document.querySelector('[stop]')
start.onclick = e => { iniciarJogo(e) }
stop.onclick = e => { 
    iniciado = false
    clearInterval(interval)
    posicao = window.innerHeight / 2
    div.style.top = `${ window.innerHeight / 2}px`    
    console.log('Parou!!');
}
document.addEventListener('keydown',subir)
