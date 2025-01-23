// Classificador de Nível do Herói
// Crie uma variável para armazena o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagem abaixo.

//Variáveis
let heroi = "felipe";
let experiencia = 8999;

//Estrutura de decisão com nível do herói
function classificarNivelHeroi(xp) {
    let nivel;
    switch (true){
    case (xp < 1000):
        nivel = "Nível do herói é Ferro.";
        break;
    case (xp >= 1001 && xp < 2000):
        nivel = "Nível do herói é Bronze.";
        break;
    case (xp >= 2001 && xp < 5000):
        nivel = "Nível do herói é Prata.";
        break;
    case (xp >= 5001 && xp < 7000):
        nivel = "Nível do herói é Ouro.";
        break;     
    case (xp >= 7001 && xp < 8000):
        nivel = "Nível do herói é Platina Diamante.";
        break;     
    case (xp >= 8001 && xp < 9000):
        nivel = "Nível do herói é Ascendente.";
        break;     
    case (xp >= 9001 && xp < 10000):
        nivel = "Nível do herói é Imortal.";
        break;     
    case (xp >= 10001):
        nivel = "Nível do herói é Radiante.";
        break;   
    default:
        nivel = "Nível do herói é desconhecido e jogue novamente.";                
    }
    return nivel;
}

// Determinar o nível do herói
let nivelHeroi = classificarNivelHeroi(experiencia);

// Exibir mensagem
console.log(`${heroi} é ${nivelHeroi}`);

