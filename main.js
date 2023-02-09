// Onclick não é uma funçnao, mas um atributo. 
// por isso eu dou ujm valor a esse atributo, com o "="
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

/* 
--- IMPORTANTE!!!

Sei eu coloco atributo = funcao() o navegador le e executa
Se eu nao coloco os parenteses () o navegor apenas guarda a referencia

exemplo: 
A) document.querySelector('.tecla_pom').onclick = tocaSomPom();
o navegador executa no momento da leitura a funcao tocaSomPom()

B) document.querySelector('.tecla_pom').onclick = tocaSomPom;
o navegador apenas guarda e referencia da funcao
tocaSomPom dentro do atributo onclick

isso devido a orderm de execucao do JS
*/



// Parametros de funcao
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// Come saber se é uma constante ou variável?
//Simples, vai ser modificada deppois? Se sim é VAR se não é CONST
// LET é para variaveis que mudam 
const listaDeTeclas = document.querySelectorAll('.tecla');





// Estutura de repedição
// Utilizando o FOR
// O problema do whle é que ele depende de um fator externo (contador)
// No codigo desse midi player eu teria q ter um contador para cada novo instrumento
// Sendo assim o FOR funciona por ele mesmo
// O FOR ja possui tudo isso dentro ele
// Estrutura de Loop (laço).

// ANTES:
// let contador = 0;
// while (contador < listaDeTeclas.length) {
//
// DEPOIS:
// Note que o contador funciona dentro do laço for e não fora dele como no WHILE
// For (init var; condição; Incrementa) 
// (ao final não precisa incrementar)
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instumento = tecla.classList[1];


    // --- IMPORTANTE!!!
    // NAME: TEMPLATE STRING !!!!
    // Tratar string utilizando a CRASE e não aspas (simples ou duplas)
    // Assim consegue-se tratar as string e colocar código JS dentro dela.
    // Pode colcaor metodos, math, etc. 
    // exemplo: `blablabl ${codigo js}`
    const idAudio = `#som_${instumento}`;

    // isso resolve o problem anterior do codigo sem o parentese.
    // Ao criar uma função anonima não executamos, apenas chamamos. 
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    };
    
    // No for nao é necessário isso. 
    // Fica la na definicnao do laço
    //contador = contador + 1
} 




/*
FOR: 

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.
*/