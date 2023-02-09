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
let contador = 0;

// Estutura de repedição
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instumento = tecla[contador].classList[1];


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
        tocaSom('#som_tecla_pom');
    };
    contador = contador + 1
} 

