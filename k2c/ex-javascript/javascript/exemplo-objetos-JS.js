/*
console.log("Criando objetos")
var objetoVazio = {};
var curso = {
    sigla: " K11",
    nome: " Orientação a Objetos em Java "
};

console.log(objetoVazio);
console.log(curso);
console.log(curso.sigla);
console.log(curso.nome)
*/
/*
console.log("Um objeto pode se relacionar com outros objetos através de propriedades")
var formacaoJava = {
    sigla: "K10", nome: "Formação Desenvolvedor Java",
    cursos: [
        {
            sigla: "K11 ",
            nome: " Orientação a Objetos em Java "
        },
        {
            sigla: "K12 ",
            nome: " Desenvolvimento Web com JSF2 e JPA2 "
        },
    ]
};

console.log(formacaoJava);
console.log(formacaoJava.sigla);
console.log(formacaoJava.cursos);
console.log(formacaoJava.cursos.nome);
*/
/*
console.log("Recuperando o valor de uma propriedade")
var curso = {
     sigla : "K11",
     nome : "Orientação a Objetos em Java"
     };
    
     console.log(curso.sigla);
     console.log(curso["sigla"]);
    
     var sigla = "sigla";
     console.log(curso [sigla]);

     */
/*
console.log("*** Alterando o valor de uma propriedade ***");
var curso = {
sigla: "K11",
nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

curso.sigla = "K12";
curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

console.log(curso.sigla);
console.log(curso.nome);
*/
/*
console.log("Referências")
var curso = {
     sigla : "K11",
     nome : "Orientação a Objetos em Java "
     };
    
     console.log(curso.sigla);
    
     console.log(curso.nome);

     // copiando uma referência
     var x = curso;
    
     x.sigla = "K12";
     x.nome = "Desenvolvimento Web com JSF2 e JPA2";
    
     // imprime K12
     console.log(curso.sigla);
    
     // imprime Desenvolvimento Web com JSF2 e JPA2
     console.log(curso.nome);
*/
/*
console.log("Protótipos")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

// criando um objeto sem propriedades
var novo_curso = {};

var novo_curso.__proto__ = curso;

console.log(novo_curso.sigla);

console.log(novo_curso.nome);
*/
/*
console.log("método create de Object")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

// criando um objeto sem propriedades
var novo_curso = {};

var novo_curso = Object.create(curso);

console.log(novo_curso.sigla);

console.log(novo_curso.nome);
*/
/*
console.log("adicionar propriedade")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

// criando um objeto sem propriedades
// var novo_curso = {};

var novo_curso = Object.create(curso);

curso.carga_horaria = 36;

console.log(novo_curso.sigla);
console.log(novo_curso.nome);
console.log(novo_curso.carga_horaria);
*/
/*
console.log("adicionar propriedade")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

// criando um objeto sem propriedades
// var novo_curso = {};

var novo_curso = Object.create(curso);

novo_curso.carga_horaria = 36;

console.log(curso.sigla);
console.log(curso.nome);
console.log(curso.carga_horaria);
*/
/*
console.log("alterar propriedade objeto")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

// criando um objeto sem propriedades
// var novo_curso = {};

var novo_curso = Object.create(curso);

curso.sigla = "K12";
curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

console.log(novo_curso.sigla);
console.log(novo_curso.nome);
*/
/*
console.log("alterar propriedade protótipo")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

// criando um objeto sem propriedades
// var novo_curso = {};

var novo_curso = Object.create(curso);

novo_curso.sigla = "K12";
novo_curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

console.log(curso.sigla);
console.log(curso.nome);
*/
/*
console.log("alterar propriedades geral")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

var novo_curso = Object.create(curso);

novo_curso.sigla = " K12";
novo_curso.nome = " Desenvolvimento Web com JSF2 e JPA2 ";

curso.sigla = "K21 ";
curso.nome = " Persistência com JPA2 e Hibernate "

console.log(curso.sigla);
console.log(curso.nome);

console.log(novo_curso.sigla);
console.log(novo_curso.nome);
*/
/*
console.log("remover propriedades")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

delete curso.sigla

console.log(curso.sigla);
console.log(curso)
*/
/*
console.log("existe propriedade?")
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java "
};

console.log(curso.sigla);
console.log(curso.nome);

console.log("sigla" in curso)
console.log("carga_horaria" in curso)
*/

