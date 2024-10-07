/* Funões de acesso e manipulação  do DOM

querySlector() é uma função para selecionar um unico elemento da pagina (DOM).

querySlecorALL()é uam função para selecionar VÁRIOS elemntos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no css.*/


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
const msg = document.querySelector("#mensagem");

ex1.addEventListener("click", function(){
    msg.innerHTML = "Olá 🐱‍👤!";
});