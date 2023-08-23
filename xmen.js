const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        //remove o personagem selecionado anterior
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        //adiciona uma nova classe no objeto selecionado
         personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //altera a imagem do personagem
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;

        //altera o nome do personagem
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name')

        //alterar a descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

