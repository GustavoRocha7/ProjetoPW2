function incGols(nome) {
    const index = jogadores.findIndex(jogador => jogador.nome === nome);
    if (index !== -1) {
        jogadores[index].gols++;
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        window.location.reload();
    }
}

function decGols(nome) {
    const index = jogadores.findIndex(jogador => jogador.nome === nome);
    if (index !== -1 && jogadores[index].gols > 0) {
        jogadores[index].gols--;
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        window.location.reload();
    }
}

function incAssistencias(nome) {
    const index = jogadores.findIndex(jogador => jogador.nome === nome);
    if (index !== -1) {
        jogadores[index].assistencias++;
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        window.location.reload();
    }
}

function decAssistencias(nome) {
    const index = jogadores.findIndex(jogador => jogador.nome === nome);
    if (index !== -1 && jogadores[index].assistencias > 0) {
        jogadores[index].assistencias--;
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        window.location.reload();
    }
}
