var curso = {sigla: "k11", nome: "Orientação a Objetos em Java"}

console.log(curso.sigla);
console.log(curso.nome);

var novo_curso = Object.create(curso);

console.log("Alterar Propriedade herdada no objeto e protótipo");

novo_curso.sigla = "k12";
novo_curso.nome  = "Desenvolvimento Web com JSF2 e JPA";

console.log(novo_curso.sigla);
console.log(novo_curso.nome);

curso.sigla = "k21";
curso.nome  = "Persistência com JPA2 e Hibernate";

console.log(novo_curso.sigla);
console.log(novo_curso.nome);

console.log(curso.sigla);
console.log(curso.nome);