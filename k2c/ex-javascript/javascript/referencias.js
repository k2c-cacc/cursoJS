var curso ={sigla: "k11", nome: "Orientação a Objetos em Java"};

console.log(curso.sigla);

console.log(curso.nome);

var x = curso;

x.sigla = "k12";
x.nome  = "Desenvolvimento Web com JSF2 e JPA";

console.log(curso.sigla);
console.log(curso.nome);
