var curso = {sigla: "k11", nome: "Orientação a Objetos em Java"}

var novo_curso = Object.create(curso);

novo_curso.carga_horaria = 36;

console.log("Propriedade nova no objeto não adicionada no Protótipo");

console.log(curso.sigla);

console.log(curso.nome);

console.log(curso.carga_horaria);

