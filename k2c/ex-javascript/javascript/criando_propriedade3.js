var curso = {sigla: "k11", nome: "Orientação a Objetos em Java"}

var novo_curso = Object.create(curso);

console.log("Propriedade alterada no Protótipo alterada no objeto ");

console.log(curso.sigla);
console.log(curso.nome);

curso.sigla = "k12";
curso.nome  = "Desenvolvimento Web com JSF2 e JPA";

console.log(novo_curso.sigla);
console.log(novo_curso.nome);

