const numeroSenha = document.querySelector('parametro-senha-texto');
let tamanhoSenha=12;//variavel que pode ser alterada

numeroSenha.textContent=tamanhoSenha;//atribui o tamanho da senha para o numeroSenha
const botoes=document.querySelectorAll('parametro-senha-botao');//seleciona todas
botoes[0].onclick=dinuiTamanho;
function dinuiTamanho()  {
    if (condition) {
        
    }
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}

botoes[1].onclick=aumentaTamanho;
function aumentaTamanho()  {
    tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;
}
