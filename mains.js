const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPergunatas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".teto-resutado")






const perguntas = [
    {
        enunciado: "Você gosta de bolo?",
        alternativas: [
            {
                texto: "Alternativa A",
                afirmacao: "Você é uma pessoa normal"
            },
            {
                texto: "Alternativa B",
                afirmacao: "Você é chato pra caramba"
            }
        ]

    },
    {
        enunciado: "Você dorme?",
        alternativas: [
            {
                texto: "Alternativa A",
                afirmacao: "Você é uma pessoa normal"
            },
            {
                texto: "Alternativa B",
                afirmacao: "Você é uma anomalia desconhecida"
            }
        ]

    }

]




function mostraPergunta() {
    if (atual >= caixaPergunatas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.yextContent = "";
    mostraAlternativas();


}