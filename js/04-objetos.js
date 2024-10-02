// Exemplo 1: objetos com dados de uma pessoa precisa de chaves 
const pessoa = { 
    // propriedades: valor
    nome: "Chaves",
    idade: 10,
    cidade: "são Paulo",
    estado: "SP"
}; 

// Exibindo a estrutura do objeto
console.log(pessoa);

// Acessando determindas prorpiedades para acessar usa pripriedae e o . mais o valor que vc quer mostrar
console.log(`o ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade} no estado de ${pessoa.estado}.`); 

// Exemplo 2: objeto com array
const livro = {
    titulo: "Senhor dos Aneis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "a sociedade do anel",
        "As duas torres",
        "O retorno do rei"
    ]
} 

// exibindo  a estrutura
console.log(livro); 

// Acesso usando nome da propriedade. e indice da array desta propriedade.
console.log(livro.volumes[1]);

// exemplo 3: array e objetos
const livros = [
    {
        titulo: "Harry potter",
        autor: "J.K rowling"
    },  //esta vitgula separa os objetos sempre use no final desta chaves de exemplo 
    {
        titulo: "Senhor doa aneis",
        autor: "J.K.K Toliken"
    },  
    {
        titulo: "Ghost rhider", 
        autor: "Neil Peart"
    }

]; 

// Acessando através do indice a propridade.
console.log(livros[1].autor); 

// exercicio 




const aluno = {
   Nome:"Maycon Henrique Silva Santos",
   data: "12/05/2007" ,
   telefone: ["11-98020-4731", "11-97504-0149"] , 

   endereco: {
    rua:"Rua Guilherme de oliveira sá",
    numero: "625" ,
    bairro: "ermelino matarazzo"   
   }
} 



console.log(aluno.Nome);
console.log(aluno.telefone[1]); 
console.log(aluno.endereco.bairro); 

console.log(`o aluno ${aluno.Nome}, cujo telefone celular é ${aluno.telefone[1]}, que mora no bairro ${aluno.endereco.bairro}.`);




