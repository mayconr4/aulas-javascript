/* Comando condicionais mais comuns: 
if   ->  SE 
else  -> SENÃO*/  

// Exemplo 1: condicional simples
let numero = 10;

if( numero > 10 ){
    console.log(numero);
    
} 

// Exempo 2: condicional composta
let aluno = "Klaibert";
let idade = 18;

/* Lógica: verificar se aluno é maior de iadade ou maior de idade. */ 

if( idade < 18 ){
   console.log("É menor de idade");
   
} else {
    console.log("É maior de idade");
    
}  

console.log("---\n");


/* Exercicios  */

/* 1 Crie duas variaveis conforme a seguir:
Nota 1 ( contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10) */

/* 2 Crie uma variavel cahamada "media que receberá o valor CALCULADO da média das duas notas informadas. DICA: você deve SOMAR as duas notas e depois dividir por 2." */ 

/* Programe uma condicional que verifique o valor da media calculada. SE á media for maior/igual a 7 , mostre "aprovado". Caso contrario, mostre "reprovado" */ 

let nota_1  = 5;
let nota_2  = 8;  
let valor = nota_1+nota_2;     


let media = valor/2; 
console.log(media);


if( media >= 7){
    console.log("aprovado");
    
} else {
    console.log("reprovado");
    
}  


// Lógica inversa 

let exercicio = media <= 7 ? "aprovado" : "reprovado"

/* ShortHand if/else " curto/abreviado" 
usando operador ternário ?: */ 
let situacao = media >= 7 ? "aprovado" : "reprovado";

console.log(situacao);
