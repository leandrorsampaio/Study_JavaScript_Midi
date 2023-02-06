

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}


// Onclick não é uma funçnao, mas um atributo. 
// por isso eu dou ujm valor a esse atributo, com o "="
document.querySelector('.tecla_pom').onclick = tocaSomPom;

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