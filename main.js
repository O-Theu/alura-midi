const teclasMIDI = document.querySelectorAll('.tecla');

function tocarSom (idElementAudio) {
    const audios = document.querySelector(`#som_${idElementAudio}`);

    if(audios === null) {
        alert('Elemento não encontrado');
    } else {
        audios.play();
    }
}

teclasMIDI.forEach((tecla) => {
    tecla.onclick = () => tocarSom(tecla.classList[1]);

    tecla.onkeydown = (e) => {
        if(e.code === 'Space' || e.key === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
})