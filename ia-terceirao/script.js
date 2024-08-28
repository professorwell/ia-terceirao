const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "os animais são inofensivos e a maioria precisa de ajuda. como ajudá los?",

        alternativas: [
            {
                texto: "voce pode estar adotando um animalzinho.",
                afirmacao: "você é uma pessoa muito boa, que preza ao cuidados dos animais"

            },
            {
                texto: "abrigo de animais.",
                afirmacao: "você é uma pessoa que preza a resolver os problemas com a razão"
            }

        ]
    },
    {
        enunciado: "Plantar árvores frutíferas é essencial para sustentar o meio ambiente e fornecer alimentos frescos aumentando a quantidade de árvores e melhorando a qualidade de vida da população. Qual seria a melhor maneira para começar essa iniciativa?",
        alternativas: [
            {
                texto: "Escolha espécies frutíferas adequadas á sua região, prepare bem o solo e plante em áreas com boa luz solar.",
                afirmacao: "alem da boa intenção de reflorestar, seria uma otima opção para um piquinique"
            },
            {
                texto: "Escolher lugares estratégicos onde podemos aproveitar ao máximo os benefícios que as árvores tem a oferecer. ",
                afirmacao: "exelente ideia"
            }
        ]
    },
    {
        enunciado: "Museus são importantes para ver a trajetória de nossos antepassados,  mas um dia nós seremos a história. O que você quer deixar para a história?",

        alternativas: [
            {
                texto: "eu quero deixar um legado!",
                afirmacao: "você é uma pessoa decidida"
            },
            {
                texto: "eu não ligo para a historia, oque importa é o agora, e o futuro!",
                afirmacao: "você não se preocupa muito com as opnião de terceiros"
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();