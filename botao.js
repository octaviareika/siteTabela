var botaoEnviar = document.getElementById("enviar-nome");

botaoEnviar.addEventListener("click", function(evento){

    evento.preventDefault(); // prevenir que a página seja recarregada 

    var formulario = document.getElementById("formulario-adiciona");

    var pessoa = obtemPessoa(formulario);

    // fazer a verificação pra ver se pode colocar na tabela 

    var erro = verificarPessoa(pessoa);
    
    if(erro.length > 0){
        mensagemErro(erro);
        return;
    }


    adicionarPessoaNaTabela(pessoa); 

    formulario.reset();

})


// função para obter os dados da pessoa 
function obtemPessoa(formulario){

    var pessoa = {
        nome: formulario.nome.value, // pegar o id do formulario
        idade: formulario.idade.value,
        altura: formulario.altura.value,
        aniversario: formulario.aniversario.value,
    }

    return pessoa;

}

// função que cria o elemento filho
function criaTd(dado, classe){
    var td = document.createElement("td"); // vai criar um elemento do html
    td.textContent = dado;// a informação que ta no td vai ser adicionada(o value)
    td.classList.add(classe);

    return td;
}

// Função que que cria o elemento pai(tr)
function criaTr(pessoa){
    var pessoatr = document.createElement("tr"); // criar um elemento tr e dentro dele vai ter os tds

    pessoatr.classList.add("pessoa"); // adicionar a classe do tr que tu vai criar pra ficar igual os outros 

    var infoPessoa = criaTd(pessoa.nome, "nome"); // criar
    var infoIdade = criaTd(pessoa.idade, "idade");
    var infoAltura = criaTd(pessoa.altura, "altura");
    var infoAniversario = criaTd(pessoa.aniversario, "aniversario");

    pessoatr.appendChild(infoPessoa); // adicionar as tags filho no elemento pai
    pessoatr.appendChild(infoIdade);
    pessoatr.appendChild(infoAltura); 
    pessoatr.appendChild(infoAniversario);


    return pessoatr;
    

}

// função para adicionar pessoa na tabela 
function adicionarPessoaNaTabela(pessoa){
    var pessoatr = criaTr(pessoa);
    var corpoDaTabela = document.querySelector(".corpo-tabela");

    corpoDaTabela.appendChild(pessoatr); // adiciona o elemento filho (tr) ao elemento pai (tbody)
}

function verificarPessoa(pessoa){
    var erro = [];

    if(!validaIdade(pessoa.idade)){
        erro.push("Idade invalida");
    }

    if (!validaAniversario(pessoa.aniversario)){
        erro.push("Aniversario invalido");
    }

    if (!validaAltura(pessoa.altura)){
        erro.push("Altura inválida");
    }

    if (pessoa.nome.length === 0){
        erro.push("O nome não pode ficar em branco");
    }

    if(pessoa.idade.length === 0){
        erro.push("A idade não pode ficar em branco");
    }

    if(pessoa.altura.length === 0){
        erro.push("A altura não pode ficar em branco");
    }

    if(pessoa.aniversario.length === 0){
        erro.push("A data não pode ficar em branco");
    }


    return erro;

}

function mensagemErro(erro){

    var linhadeErro = document.querySelector(".mensagem-erro");

    linhadeErro.innerHTML = ""; // zerar quando recarrega a pagina

    erro.forEach(errinho => { // para cada errinho
        var li = document.createElement("li"); 
        li.textContent = errinho; // aparece no conteudo do texto a mensagem erro
        linhadeErro.appendChild(li);

        
    });

}