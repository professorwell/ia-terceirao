const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "os animais são inofensivos e a maioria precisa de ajuda. como ajudá los?",

        alternativas: [
            "voce pode estar adotando um animalzinho.", 
            "abrigo de animais.."
        ]
    },
    {
        enunciado: "Plantar árvores frutíferas é essencial para sustentar o meio ambiente e fornecer alimentos frescos aumentando a quantidade de árvores e melhorando a qualidade de vida da população. Qual seria a melhor maneira para começar essa iniciativa?",
        alternativas: [
            "Escolha espécies frutíferas adequadas á sua região, prepare bem o solo e plante em áreas com boa luz solar.",
 
            "Escolher lugares estratégicos onde podemos aproveitar ao máximo os benefícios que as árvores tem a oferecer. "
        ]
    },
    {
        enunciado: "Museus são importantes para ver a trajetória de nossos antepassados,  mas um dia nós seremos a história. O que você quer deixar para a história?",

        alternativas: [
            "MEu quero deixar um legado.", 
            "Eu não ligo para história o que importa é o agora."
        ]
    }  
];