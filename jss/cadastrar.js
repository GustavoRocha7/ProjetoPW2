function cadastrarJogador() {
    var nome = document.getElementById('nome').value;
    var time = document.getElementById('time').value;
    var gols = document.getElementById('gols').value;
    var assistencias = document.getElementById('assistencias').value;
    var foto = document.getElementById('foto').value;

    if (nome === '' || time === '' || isNaN(gols) || isNaN(assistencias) || foto === '') {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    var jogador = {
        nome: nome,
        time: time,
        gols: gols,
        assistencias: assistencias,
        foto: foto
    };

    var jogadoresCadastrados = JSON.parse(localStorage.getItem('jogadores')) || [];
    jogadoresCadastrados.push(jogador);
    localStorage.setItem('jogadores', JSON.stringify(jogadoresCadastrados));

    window.location.href = '/index.html';
}

document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    cadastrarJogador();
});
