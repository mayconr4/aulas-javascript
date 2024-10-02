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

// console.log(livro);

