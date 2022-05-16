const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {
    const idSelecionado = personagem.attributes.id.value

    if (idSelecionado === 'ultron') return
    // Objetivo 1 - Quando o mouse passar por cima do personagem temos que:
    //  colocar a classe dele selecionado no personagem que passamos o mouse
    //  retira a classe selecionado do personagem anterior
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado')

    // Objetivo 2 - Quando o mouse passar por cima do personagem temos que trocar a imagem e nome do personagem grande
    // -alterar imagem do personagem
    //  -alterar nome do personagem

    const imagemJogador1 = document.getElementById('personagem-jogador-1')
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

    const nomeJogador1 = document.getElementById('nome-jogador-1')
    const nomeSelecionado = personagem.getAttribute('data-name')

    nomeJogador1.innerHTML = nomeSelecionado
  })
})
