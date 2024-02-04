const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const numeroCapitulos = 10;
let tocando = false;
let capitulo = 1;

function playCapitulo() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audio.play();
    tocando = true;
}

function pausarCapitulo() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause();
    tocando = false;
}

function playOuPause() {
    if (tocando === true) {
        pausarCapitulo();
    } else {
        playCapitulo();
    }
}

function voltarCapitulo() {
    if (capitulo === 1) {
        capitulo = numeroCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "./assets/books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    playCapitulo();
}

function avancarCapitulo() {
    if (capitulo < numeroCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "./assets/books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    playCapitulo();
}

botaoPlayPause.addEventListener("click", playOuPause);
botaoCapituloAnterior.addEventListener("click", voltarCapitulo);
botaoProximoCapitulo.addEventListener("click", avancarCapitulo);
audio.addEventListener("ended", avancarCapitulo);
