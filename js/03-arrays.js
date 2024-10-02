// declarando um array este simbolo > []
let alunos = ["jon oliva", "ozzy Osbourne", "Tom Araya"];

// Exibindo a estrutura do array
console.log(alunos); 

// Acessando um elemento especifico do array este simbolo []
console.log(` ${alunos[2]} é o vocalista da banda slayer! 🐱‍🏍  `); 


// mini exercicio 

/* 1 crie um novo array contendo nome de 7 coisas que você gosta (artista, musica , livro, comida... seila inventa) */ 

/* 2) Em seguida , mostre no console uma frase personalizada indicando o nome do segundo, quinto e do setimo elemnto do array. Use concatenação ou template string */  

let gostos = ["Lebron James", "Kyrie irving", "Kobe Bryant", "Lamello Ball", "Lonzo Ball", "Gui santos", "Isiah Thomas"]; 

// console.log(gostos); 

console.log(` Gosto bastante do :${gostos[1]}, ${gostos[4]} e tambem ${gostos[6]}`);



// Array como matriz de 2 dimensões 
const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express", ["Apache", "IIS"]]
]; 

// console.log(tecnologias); 

console.log(tecnologias[0][2]); //JavaScript
console.log(tecnologias[1][0]); //figma
console.log(tecnologias[2][3]); // express
console.log(tecnologias[0][0]); // HTML5 
console.log(tecnologias[2][4][0]); // apache , exemplo de acessar dimenoses no css como exemplos pesquisar sobre matriz e dimensões






