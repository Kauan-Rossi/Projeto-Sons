function tocarSom(idAudioElemento){
    document.querySelector(idAudioElemento).play();
    mostrarImagem(idAudioElemento);
   
}

function mostrarImagem(idImagemElemento){
    const idImagem = idImagemElemento.replace("#som", ".img");
    const imagem = document.querySelector(idImagem);
    imagem.classList.remove("desativado");
    imagem.classList.add("nao-desativado");
    setTimeout(function (){
        imagem.classList.remove("nao-desativado")
        imagem.classList.add("desativado")}, 3750)
        
    // console.log(imagem)
    // console.log(idImagem)
    // imagem = `${idImagem}`;
    
}

const listaDeBotoes = document.querySelectorAll(".botao")

listaDeBotoes.forEach(botao => {
    const classeSom = botao.classList[1];
    const idAudio = `#som_${classeSom}`;

    botao.onclick = function (){
        tocarSom(idAudio)
    }

    botao.onkeydown = function (evento) {
        if ( evento.code === "Space" || evento.code === "Enter" || evento.code === "NumpadEnter"){
            botao.classList.add("ativa");
        }
    };
    botao.onkeyup = function () {
        botao.classList.remove("ativa");
    }
} )