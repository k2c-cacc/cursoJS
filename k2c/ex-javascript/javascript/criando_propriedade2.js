var curso = {sigla: "k11", nome: "Orientação a Objetos em Java"}

var novo_curso = Object.create(curso);

novo_curso.carga_horaria = 36;

console.log("Criando Propriedade 2");

console.log(novo_curso.sigla);

console.log(novo_curso.nome);

console.log(novo_curso.carga_horaria);

