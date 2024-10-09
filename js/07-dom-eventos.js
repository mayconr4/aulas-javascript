/* Funões de acesso e manipulação  do DOM

querySlector() é uma função para selecionar um unico elemento da pagina (DOM).

querySlecorALL()é uam função para selecionar VÁRIOS elemntos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no css. 

getElementById()

*/


/* Exemplos */
const tiutlo = document.querySelector("h1");  
const textoDom = document.querySelector(".texto-dom");
const subtitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p, img, button");
console.log(varios); 

/* Modificando os elementos do DOM */
tiutlo.textContent = "Olá JavaScript";
textoDom.innerHTML = "<i> O marcio será reprovado ! <i/>";  

/* Selecionara todos os links da lista de referencias e colocar neles o atributo target valendo _blank */

const links =  document.querySelectorAll(".lista-de-referencias a");
console.log( links );

// Se fosse por um... 
// links[0].setAttribute("target", "_blank");

for( const link of links){
  link.setAttribute("target", "_blank");  //sett attribute precisa do nome do produto e o valor de exemplo target_blank
    
  /*  versão 2 ( usando atributo via prorpiedade)
    ( antiga , avel para atributos nativos do html como id, class,href) 
  link.target = "_blank"; */
    
}; 

/* Manipulando eventos */
const ex1 = document.querySelector("#exemplo01");
/* poderamos tambem usar a função getElmentById() em vez do query slector. A diferença é que ela só funciona pela seleção através do ID. obs.: ao usa-lá NÃO COLOQUE #. */
//const ex1 = document.getElementById("exemplo1");
const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body");


/* Ouvinte de evento ( Event Listener)
aplicado ao elemnto ALVO do evento desejado ("click")e uma função para executar as ções a partir do evento . Obs.: esta função é considerada do tipo "anomina" e é conhecida como "callback". */
ex1.addEventListener("click", function(){ 
   /* Acessmos o paragrafo  vazio e colocamos um conteudo dentro dele */
    msg.innerHTML = "Olá 🎱!"; 


    /* modificando a pagina  alterando a fonte ( do CSS via JS)*/
    pagina.style.fontFamily = "Verdana";
}); 

/*  Ouvinte de evento para voltar ao normal ( sem texto no paragrafo e com fonte padrão na pagina). O evento ocorerrá ao clicar DUAS VEZES no paragrafo da mensagem. */ 

msg.addEventListener("dblclick", function(){ //dblclick significa duis cliques para acinoar o evento
  msg.innerHTML = ""; //removendo o conteu do paragrafo
  pagina.style.fontFamily = "initial"; // voltando para fonte padrão
}); 


/* Exemplo 02 : Modo noturno*/
const botaoAtivar = document.querySelector("#ativar");
botaoAtivar.addEventListener("click", function(){
  /*  Usamos o toggle do classList para alternar aplicação/remoção da classe "noturno". Na prática, vira um liga/desliga. */
  pagina.classList.toggle("noturno");  

  /*  DESAFIO FAÇA AQUI MESMO: trocar o texto do botão.
Se a pagina estiver com a classe "noturno" aplicada, 
o botão deve mostrar a palavra "Ativar". Use if/else! */   

// const botao = document.getElementById('#ativar');

// botao.addEventListener("click", function(){
  if(pagina.classList.contains("noturno")){
    botaoAtivar.textContent = "Desativar";
    
      
  } else {
    console.log("Ativar"); 
    botaoAtivar.textContent = "Ativar";
    
  }       

});  

/* Sobre o duplo e triplo sinal de igual */
let a = "10"; //texto
let b = 10; //numero
let resultado = a === b; // false
console.log(resultado);


/*  == compara VALORES */
/*  === compara VALORES E TIPO DE DADO */



