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
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1
} 

