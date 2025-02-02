let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nome = input.value.trim(); // remove espaços

    if(nome == null) {
        exibirTextoNaTela('p', 'Por favor, insira um nome!');
    } else if(amigos.includes(nome)){
        exibirTextoNaTela('p', 'Este nome já foi adicionado! Digite o sobrenome para diferenciar!');
    } else {
        amigos[amigos.length] = nome;
        atualizarLista();
    }

    input.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos [i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!'); // Mensagem se não houver nomes
    } else {
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Escolhe um nome aleatório
        document.getElementById('resultado').textContent = `O amigo secreto é: ${sorteado}`; // Exibe o sorteado
    }
}