/* Principais comados de repetição 

- while -> ENQUANTO
- for   -> PARA 


São comandos de uso geral, existem em praticamente qualquer linguagem de programação.*/ 

// Exemplo 1: while 
let contador = 1;

while ( contador <= 5 ) {
     console.log("Valor do contador é:" +contador);
     contador++; // ++ operador de incremento 
} 

console.log("---\n");

// Exemplo 2: for
for ( let contador = 1; contador <= 10; contador++ ) {
   console.log("oi maycon"+contador+"ª vez");        
                                                  
} 

// alert("Chega chato pra caramba!!!"); 

/* Nomenclatura para variaveis de controle Embora possamos dar qualquer nome (como contador por exemplo), geralmente são usados as letras i, j ou k (ou  outras letras se necessario) */ 
for(let i = 1; i<= 3; i++){
    console.log("Valor de i é: "+i);
    
} 

console.log("---\n"); 

/* Loops exclusivos do js para estrtura de dados */ 

//for/of -> serve de loop para arrays
const bandas = ["Slayer","Pink Floyd"," Rush", "Nightwish", "iron maiden", "Judas Priest", "Metalica"]; 

for(const banda of bandas) {
   console.log(banda);    
}   

console.log("---\n");


//Usando o for tradicionaçal   

// Guardando o tamanho da array uam vez ( fazendo cache do array) /* e o length ele se adequa a quantidade de lementos que a array tem sendo de forma mais dinamica sem necessario o uso de numeros a toda atualizacção de elemntos na sua array */
let quantidade = bandas.length

for( let i = 0; i <quantidade; i++ ){ 


    /* Usamos i dentro dos colchetes como índice dinâmico do array */
    console.log(bandas[i]);     
}

//for/in -> loop para objetos 
const pessoa = {
    nome: " Fulano da Silva",
    idade: 40,
    cidade: "São Paulo",
    estado: " SP",
    email: " fulano@provedor.com",
    time: "Santos"
}; 

for(const prop in pessoa ){
    // Mostra somente o nome da propriedade
    console.log(prop);
    
    // Mostra somente o valor da propriedade /* mostra o objeto junto com o valor desse objeto de exemplo idade: 17
    console.log(pessoa[prop]);     
} 

console.log("---\n"); 

/* Exercicio
1 faça um array chamado "clientes" contendo 3 objetos. cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Goku ", "  Naruto", " Shiryu" ).  

2 Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
- Cliente: Goku, id: 1
- Cliente: Naruto, id: 2
- Cliente: Shiryu, id:3*/

const clientes = [
    {       
     nome:"Goku",
     identificador: 1 
    }, 

    {
     nome:"Naruto",
     identificador:2
    }, 

    {
     nome:"Shiryu",
     identificador:3
    }
] ;    



for( const cliente of clientes){  //não usar colchetes para acessar o valor no FOR OF importante lembrar disso

    // console.log(clientes);

    // TEMPLATE STRING É = O USO DE CRASES 
    console.log(`Cliente: ${cliente.nome}, id: ${cliente.identificador} `); 
  
    
    
   
}



// for(){}


