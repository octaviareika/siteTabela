var pessoas = document.querySelector(".pessoa");

for (var i = 0; i < pessoas.length; i++){

    var pessoa = pessoas[i];

    var tdNome = document.querySelector(".nome"); // acessar a classe de cada informação

    var nome = tdNome.textContent; // acessar o conteudo que tá dentro de cada informação 

    var tdIdade = document.querySelector(".idade"); // acessar idade

    var idade = tdIdade.textContent;

    var tdAltura = document.querySelector(".altura"); // acessar altura

    var altura = tdAltura.textContent;

    var tdAniversario = document.querySelector(".aniversario"); // acessar aniversario 

    var aniversario = tdAniversario.textContent;


}

//tamanho de uma string(aniversario) nao pode ser maior que 5

// função para validar altura 
function validaAltura(altura){
    if (altura > 0 ||  altura <= 3.00){
        return true;
    }

    else {
        return false;
    }
}

// função para validar aniversario
function validaAniversario(aniversario){
    if (aniversario.length === 5){
        return true;
    }

    else {
        return false; 
    }
}
// funçao para validar idade
function validaIdade(idade) {
    if (idade > 0 || idade <= 100){
        return true;
    }
    else {
        return false;
    }
}