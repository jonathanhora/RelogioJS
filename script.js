function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var minuto = new Date().getMinutes().toString()
    var titulo = document.getElementById('titulo')
    var footer = document.getElementById('rodape')
    msg.innerHTML = `Agora são ${hora}:${minuto}`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha_250.png'
        document.body.style.background = '#f7f799'
    }else if (hora < 18){
        img.src = 'imagens/tarde_250.png'
        document.body.style.background = '#e2a65d'
    }else{
        img.src = 'imagens/noite_250.png'
        document.body.style.background = '#303944'
        titulo.style.color = 'white'
        footer.style.color = 'white'
    }
}
